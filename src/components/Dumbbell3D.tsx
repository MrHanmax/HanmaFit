import { useEffect, useRef } from 'react';
import * as THREE from 'three';

// A slowly turning 3D dumbbell in Hanma ink and gold. Follows the pointer a little.
// Loads only when scrolled into view (client:visible) and stays still for reduced motion.
export default function Dumbbell3D({ className = '' }: { className?: string }) {
  const host = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = host.current;
    if (!el) return;
    const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    } catch {
      return; // no WebGL: the section reads fine without it
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    el.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
    camera.position.set(0, 0.6, 9);

    const gold = new THREE.MeshStandardMaterial({ color: 0xe5b53d, metalness: 0.85, roughness: 0.32 });
    const plate = new THREE.MeshStandardMaterial({ color: 0x1d1c18, metalness: 0.35, roughness: 0.55 });
    const steel = new THREE.MeshStandardMaterial({ color: 0xcfc9b8, metalness: 0.9, roughness: 0.28 });

    const bell = new THREE.Group();
    const along = (mesh: THREE.Mesh, at: number) => { mesh.rotation.z = Math.PI / 2; mesh.position.x = at; bell.add(mesh); };

    // handle with knurl rings
    along(new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.16, 2.4, 32), steel), 0);
    for (let i = -4; i <= 4; i++) {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.165, 0.012, 8, 32), steel);
      ring.rotation.y = Math.PI / 2; ring.position.x = i * 0.22; bell.add(ring);
    }

    // plate stacks: big, medium, small, collar
    const stack = (side: 1 | -1) => {
      const specs: [number, number, number][] = [[1.25, 0.26, 1.55], [1.0, 0.22, 1.8], [0.78, 0.18, 2.0]];
      specs.forEach(([r, t, at]) => {
        along(new THREE.Mesh(new THREE.CylinderGeometry(r, r, t, 72), plate), side * at);
        const rim = new THREE.Mesh(new THREE.TorusGeometry(r - 0.06, 0.035, 12, 96), gold);
        rim.rotation.y = Math.PI / 2; rim.position.x = side * (at + side * (t / 2 + 0.005)); bell.add(rim);
        const hub = new THREE.Mesh(new THREE.TorusGeometry(0.3, 0.03, 12, 48), gold);
        hub.rotation.y = Math.PI / 2; hub.position.x = side * (at + side * (t / 2 + 0.005)); bell.add(hub);
      });
      along(new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.32, 0.22, 48), gold), side * 2.24);
      along(new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.17, 0.5, 32), steel), side * 2.55);
    };
    stack(1); stack(-1);
    bell.rotation.set(0.35, -0.55, 0.12);
    scene.add(bell);

    scene.add(new THREE.AmbientLight(0xfcfaf3, 0.35));
    const key = new THREE.DirectionalLight(0xfff1d0, 2.4); key.position.set(4, 5, 6); scene.add(key);
    const rim = new THREE.DirectionalLight(0xe5b53d, 2.2); rim.position.set(-6, -2, -4); scene.add(rim);
    const fill = new THREE.PointLight(0x8ea2ff, 6, 20); fill.position.set(-4, 3, 4); scene.add(fill); // the studio's blue light

    const size = () => {
      const w = el.clientWidth, h = el.clientHeight;
      renderer.setSize(w, h, false);
      renderer.domElement.style.width = '100%';
      renderer.domElement.style.height = '100%';
      camera.aspect = w / Math.max(h, 1);
      camera.position.z = camera.aspect < 1 ? 12 : 9;
      camera.updateProjectionMatrix();
    };
    size();
    const ro = new ResizeObserver(size); ro.observe(el);

    let tx = 0, ty = 0;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      tx = ((e.clientX - r.left) / r.width - 0.5) * 0.6;
      ty = ((e.clientY - r.top) / r.height - 0.5) * 0.4;
    };
    window.addEventListener('pointermove', onMove, { passive: true });

    let raf = 0, visible = true;
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; });
    io.observe(el);
    const clock = new THREE.Clock();
    const tick = () => {
      raf = requestAnimationFrame(tick);
      if (!visible) return;
      const t = clock.getElapsedTime();
      bell.rotation.y += ((-0.55 + t * 0.25 + tx) - bell.rotation.y) * 0.05;
      bell.rotation.x += ((0.35 + ty) - bell.rotation.x) * 0.05;
      bell.position.y = Math.sin(t * 1.2) * 0.08;
      renderer.render(scene, camera);
    };
    if (still) renderer.render(scene, camera); else tick();

    return () => {
      cancelAnimationFrame(raf); ro.disconnect(); io.disconnect();
      window.removeEventListener('pointermove', onMove);
      renderer.dispose(); el.innerHTML = '';
    };
  }, []);

  return <div ref={host} className={className} aria-hidden="true" />;
}

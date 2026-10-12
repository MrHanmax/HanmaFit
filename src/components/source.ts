import { useEffect, useState } from 'react';

export type LeadSource = { code: string; utm_source?: string; utm_campaign?: string; gclid?: string; landing?: string };

export function getSource(): LeadSource {
  if (typeof window === 'undefined') return { code: 'WEB' };
  return ((window as unknown as { hanmaSource?: LeadSource }).hanmaSource) ?? { code: 'WEB' };
}

export function useSourceCode() {
  const [code, setCode] = useState('WEB');
  useEffect(() => setCode(getSource().code || 'WEB'), []);
  return code;
}

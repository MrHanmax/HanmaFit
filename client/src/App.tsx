import { Switch, Route, Link } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HomePage from "@/pages/home";
import ServicesPage from "@/pages/services";
import PersonalTrainingPage from "@/pages/services/personal-training";
import GroupClassesPage from "@/pages/services/group-classes";
import SchedulePage from "@/pages/schedule";
import PricingPage from "@/pages/pricing";
import AboutPage from "@/pages/about";
import TestimonialsPage from "@/pages/testimonials";
import ContactPage from "@/pages/contact";
import TrialPage from "@/pages/trial";

function Router() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/services" component={ServicesPage} />
          <Route path="/services/personal-training" component={PersonalTrainingPage} />
          <Route path="/services/group-classes" component={GroupClassesPage} />
          <Route path="/schedule" component={SchedulePage} />
          <Route path="/pricing" component={PricingPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/testimonials" component={TestimonialsPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/trial" component={TrialPage} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;

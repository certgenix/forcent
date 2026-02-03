import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import Industries from "@/pages/Industries";
import HealthcareDental from "@/pages/industries/HealthcareDental";
import ProfessionalServices from "@/pages/industries/ProfessionalServices";
import TradesHomeServices from "@/pages/industries/TradesHomeServices";
import RealEstate from "@/pages/industries/RealEstate";
import HospitalityRetail from "@/pages/industries/HospitalityRetail";
import Construction from "@/pages/industries/Construction";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import ResponsibleAI from "@/pages/ResponsibleAI";
import Solutions from "@/pages/Solutions";
import Marketing from "@/pages/Marketing";
import SoftwareDevelopment from "@/pages/solutions/SoftwareDevelopment";
import DigitalTransformation from "@/pages/solutions/DigitalTransformation";
import CybersecurityCompliance from "@/pages/solutions/CybersecurityCompliance";
import NotFound from "@/pages/not-found";
import CookieConsent from "@/components/CookieConsent";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/industries" component={Industries} />
      <Route path="/industries/healthcare-dental" component={HealthcareDental} />
      <Route path="/industries/professional-services" component={ProfessionalServices} />
      <Route path="/industries/trades-home-services" component={TradesHomeServices} />
      <Route path="/industries/real-estate" component={RealEstate} />
      <Route path="/industries/hospitality-retail" component={HospitalityRetail} />
      <Route path="/industries/construction" component={Construction} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/responsible-ai" component={ResponsibleAI} />
      <Route path="/solutions" component={Solutions} />
      <Route path="/marketing" component={Marketing} />
      <Route path="/solutions/software-development" component={SoftwareDevelopment} />
      <Route path="/solutions/digital-transformation" component={DigitalTransformation} />
      <Route path="/solutions/cybersecurity-compliance" component={CybersecurityCompliance} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
        <CookieConsent />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

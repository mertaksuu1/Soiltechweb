import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import HomePage from "@/pages/HomePage";
import KumlamaBoyamaPage from "@/pages/KumlamaBoyamaPage";
import EndustriyelHizmetlerPage from "@/pages/EndustriyelHizmetlerPage";
import MarinHizmetleriPage from "@/pages/MarinHizmetleriPage";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/kumlama-boyama" component={KumlamaBoyamaPage} />
      <Route path="/endustriyel-hizmetler" component={EndustriyelHizmetlerPage} />
      <Route path="/marin-hizmetleri" component={MarinHizmetleriPage} />
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
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

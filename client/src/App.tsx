import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import DiaryDetail from "@/pages/DiaryDetail";
import WorkDetail from "@/pages/WorkDetail";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/diary/:slug" component={DiaryDetail} />
      <Route path="/work/:slug" component={WorkDetail} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    
  );
}

export default App;

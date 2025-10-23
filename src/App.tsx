import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Demo from "./pages/Demo";
import Recruiting from "./pages/Recruiting";
import Consulting from "./pages/Consulting";
import Sales from "./pages/Sales";
import Marketing from "./pages/Marketing";
import Finance from "./pages/Finance";
import Assistant from "./pages/Assistant";
import Enrich from "./pages/Enrich";
import Email from "./pages/Email";
import Workflows from "./pages/Workflows";
import Templates from "./pages/Templates";
import Careers from "./pages/Careers";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/demo" element={<Demo />} />
                
                {/* Solution Pages */}
          <Route path="/recruiting" element={<Recruiting />} />
          <Route path="/consulting" element={<Consulting />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/finance" element={<Finance />} />
          
                {/* Product Pages */}
                <Route path="/assistant" element={<Assistant />} />
                <Route path="/enrich" element={<Enrich />} />
                <Route path="/email" element={<Email />} />
                <Route path="/workflows" element={<Workflows />} />
          
          {/* Other Pages */}
          <Route path="/templates" element={<Templates />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

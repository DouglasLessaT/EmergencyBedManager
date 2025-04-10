
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Patients from "./pages/Patients";
import Beds from "./pages/settings/Beds";
import Transfers from "./pages/Transfers";
import Hospital from "./pages/settings/Hospital";
import StatusEntidade from "./pages/settings/StatusEntidade";
import AtendimentosUTI from "./pages/settings/AtendimentosUTI";
import BedManagement from "./pages/settings/BedManagement";
import AppNavbar from "./components/AppNavbar";
import Learning from "./pages/Learning";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppNavbar />
        <Routes>
          <Route path="/" element={<Learning />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/beds" element={<Beds />} />
          <Route path="/transfers" element={<Transfers />} />
          <Route path="/settings/hospital" element={<Hospital />} />
          <Route path="/settings/status" element={<StatusEntidade />} />
          <Route path="/settings/uti" element={<AtendimentosUTI />} />
          <Route path="/settings/bed-management" element={<BedManagement />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

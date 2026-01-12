import "../src/Custom-Css/Homepage.css";
import HomePage from "@/pages/HomePage";
import Activities from "@/pages/Activities";
import Hotels from "@/pages/Hotels";
import Gastronomy from "@/pages/Gastronomy";
import Beaches from "@/pages/Beaches";
import Boating from "@/pages/Boating";
import RealEstate from "@/pages/RealEstate";
import Layout from "@/components/layout/Layout";
import ProjectDetails from "@/pages/DetailsPage";
import RealestatePage from "@/pages/Real-Estate-Page";
import NotFound from "@/pages/NotFound"

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <HomePage />
              </Layout>
            }
          />
           <Route
            path="/activities"
            element={
              <Layout>
                <Activities />
              </Layout>
            }
          />
           <Route
            path="/hotels"
            element={
              <Layout>
                <Hotels />
              </Layout>
            }
          />
           <Route
            path="/gastronomy"
            element={
              <Layout>
                <Gastronomy />
              </Layout>
            }
          />
           <Route
            path="/beaches"
            element={
              <Layout>
                <Beaches />
              </Layout>
            }
          />
           <Route
            path="/boating"
            element={
              <Layout>
                <Boating />
              </Layout>
            }
          />
           <Route
            path="/realEstate"
            element={
              <Layout>
                <RealEstate />
              </Layout>
            }
          />
          <Route
            path="/projectDetails"
            element={
              <Layout>
                <ProjectDetails />
              </Layout>
            }
          />
          <Route
            path="/real-Estate"
            element={
              <Layout>
                <RealestatePage />
              </Layout>
            }
          />
          <Route
            path="*"
            element={<Layout>
                <NotFound />
              </Layout>} 
          />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  );
}

export default App;

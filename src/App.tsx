import "../src/Custom-Css/Homepage.css";
import HomePage from "@/pages/HomePage";
import Activities from "@/pages/Activities";
import Hotels from "@/pages/Hotels";
import Gastronomy from "@/pages/Gastronomy";
import Beaches from "@/pages/Beaches";
import Boating from "@/pages/Boating";
import RealEstate from "@/pages/RealEstate";
import ElitePage from "@/pages/elite";
import Layout from "@/components/layout/Layout";

import DetailedActivity from "@/pages/Detailed-Activity";
import DetailedBeach from "@/pages/Detailed-Beach";
import DetailedHotel from "@/pages/Detailed-Hotel";
import DetailedBoating from "@/pages/Detailed-Boating";
import DetailedGastronomy from "@/pages/Detailed-Gyst";

import RealestatePage from "@/pages/Real-Estate-Page";
import NotFound from "@/pages/NotFound"
import RealestateListing from "@/pages/real-estate-listing";

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
            path="/Activities"
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
            path="/Gastronomy"
            element={
              <Layout>
                <Gastronomy />
              </Layout>
            }
          />
          <Route
            path="/Beaches"
            element={
              <Layout>
                <Beaches />
              </Layout>
            }
          />
          <Route
            path="/Boating"
            element={
              <Layout>
                <Boating />
              </Layout>
            }
          />
          <Route
            path="/realState"
            element={
              <Layout>
                <RealEstate />
              </Layout>
            }
          />
        <Route
            path="/elite"
            element={
              <Layout>
                <ElitePage />
              </Layout>
            }
          />
          <Route
            path="/real-Estate-detailed"
            element={
              <Layout>
                <RealestatePage />
              </Layout>
            }
          />
           <Route
            path="/real-Estate-listing"
            element={
              <Layout>
                <RealestateListing />
              </Layout>
            }
          />

          
          <Route
            path="/Detailed-Boating"
            element={
              <Layout>
                <DetailedBoating />
              </Layout>
            }
          />
          <Route
            path="/Detailed-Activity"
            element={
              <Layout>
                <DetailedActivity />
              </Layout>
            }
          />
          <Route
            path="/Detailed-Beach"
            element={
              <Layout>
                <DetailedBeach />
              </Layout>
            }
          />
          <Route
            path="/Detailed-Hotel"
            element={
              <Layout>
                <DetailedHotel />
              </Layout>
            }
          />
          <Route
            path="/Detailed-Gastronomy"
            element={
              <Layout>
                <DetailedGastronomy />
              </Layout>
            }
          />
          <Route
            path="*"
            element={
              <Layout>
                <NotFound />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  );
}

export default App;

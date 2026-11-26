"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { SwarmBoardShowcase } from "@/components/SwarmBoardShowcase";
import { BusinessImpactSection } from "@/components/BusinessImpactSection";
import { RoiCalculator } from "@/components/RoiCalculator";
import { ToolsAndStackSection } from "@/components/ToolsAndStackSection";
import {
  Footer,
  PilotEstimateContext,
  PilotRequestModal,
  PilotSection,
} from "@/components/PilotAndFooter";

export default function FaktryHomePage() {
  const [pilotModalOpen, setPilotModalOpen] = useState(false);
  const [pilotEstimate, setPilotEstimate] = useState<PilotEstimateContext | null>(
    null
  );

  const handleOpenDefaultModal = () => {
    setPilotEstimate(null);
    setPilotModalOpen(true);
  };

  const handleOpenWithEstimate = (est: PilotEstimateContext) => {
    setPilotEstimate(est);
    setPilotModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-950">
      <Navbar onOpenAuditModal={handleOpenDefaultModal} />

      <main className="flex-1">
        <HeroSection onOpenAuditModal={handleOpenDefaultModal} />
        <SwarmBoardShowcase onOpenAuditModal={handleOpenDefaultModal} />
        <BusinessImpactSection />
        <RoiCalculator onRequestPilotWithEstimate={handleOpenWithEstimate} />
        <ToolsAndStackSection />
        <PilotSection onOpenModal={handleOpenDefaultModal} />
      </main>

      <Footer onOpenModal={handleOpenDefaultModal} />

      <PilotRequestModal
        isOpen={pilotModalOpen}
        onClose={() => setPilotModalOpen(false)}
        estimate={pilotEstimate}
      />
    </div>
  );
}

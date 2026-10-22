"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { TrustCompliance } from "@/components/sections/TrustCompliance";
import { About } from "@/components/sections/About";
import { Founder } from "@/components/sections/Founder";
import { Ecosystem } from "@/components/sections/Ecosystem";
import { Projects } from "@/components/sections/Projects";
import { Infrastructure } from "@/components/sections/Infrastructure";
import { Internships } from "@/components/sections/Internships";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { SuccessStories } from "@/components/sections/SuccessStories";
import { Services } from "@/components/sections/Services";
import { Achievements } from "@/components/sections/Achievements";
import { NewsArticles } from "@/components/sections/NewsArticles";
import { CareerQuiz } from "@/components/sections/CareerQuiz";
import { FaqSection } from "@/components/sections/FaqSection";
import { Footer } from "@/components/layout/Footer";
import { CertificateModal } from "@/components/modals/CertificateModal";
import { ApplicationModal } from "@/components/modals/ApplicationModal";
import { certificates } from "@/data/achievements";

export default function Home() {
  const [selectedCert, setSelectedCert] = useState<(typeof certificates)[0] | null>(null);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState<string>("web-development");

  const handleOpenApply = (trackId?: string) => {
    if (trackId) setSelectedTrack(trackId);
    setIsApplyModalOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Top Header */}
      <Header onOpenApplyModal={() => handleOpenApply()} />

      {/* Main Sections */}
      <main className="flex-1">
        <Hero onOpenApplyModal={() => handleOpenApply()} />
        <TrustCompliance onSelectCertificate={(cert) => setSelectedCert(cert)} />
        <About />
        <Founder />
        <Ecosystem onOpenApplyModal={() => handleOpenApply()} />
        <Projects />
        <Infrastructure />
        <Internships onOpenApplyModal={(trackId) => handleOpenApply(trackId)} />
        <WhyChooseUs />
        <SuccessStories />
        <Services onOpenApplyModal={() => handleOpenApply()} />
        <Achievements />
        <NewsArticles />
        <CareerQuiz onOpenApplyModal={(trackId) => handleOpenApply(trackId)} />
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Certificate Viewer Modal */}
      <CertificateModal
        certificate={selectedCert}
        isOpen={!!selectedCert}
        onClose={() => setSelectedCert(null)}
      />

      {/* Application Form Modal */}
      <ApplicationModal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
        initialTrackId={selectedTrack}
      />
    </div>
  );
}

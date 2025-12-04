import ChatSection from "@/components/features/home/ChatSection";
import FlowerSection from "@/components/features/home/FlowerSection";
import MysteryReveal from "@/components/features/home/MysteryReveal";
import { useState } from "react";

type Section = "mystery" | "flower" | "chat";

const Index = () => {
  const [currentSection, setCurrentSection] = useState<Section>("mystery");

  const handleMysteryReveal = () => {
    setCurrentSection("flower");
  };

  const handleFlowerNext = () => {
    setCurrentSection("chat");
  };

  return (
    <div className="min-h-screen gradient-romantic overflow-hidden">
      {/* Background decoration */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-sand/40 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-10 w-48 h-48 bg-coral/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-blush/25 rounded-full blur-2xl" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {currentSection === "mystery" && (
          <div className="min-h-screen flex items-center justify-center px-6 py-12">
            <MysteryReveal onReveal={handleMysteryReveal} />
          </div>
        )}

        {currentSection === "flower" && (
          <FlowerSection onNext={handleFlowerNext} />
        )}

        {currentSection === "chat" && <ChatSection />}
      </div>

      {/* Progress indicator */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {["mystery", "flower", "chat"].map((section) => (
          <div
            key={section}
            className={`w-2 h-2 rounded-full transition-all duration-500 ${
              currentSection === section
                ? "bg-primary w-6"
                : "bg-primary/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Index;

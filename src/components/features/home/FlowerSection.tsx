import AnimatedFlower from "./AnimatedFlower";

interface FlowerSectionProps {
  onNext: () => void;
}

const FlowerSection = ({ onNext }: FlowerSectionProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
      <div className="max-w-lg mx-auto text-center space-y-8">
        {/* Flower */}
        <div className="mb-8">
          <AnimatedFlower />
        </div>

        {/* Text */}
        <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: "3s" }}>
          <p className="text-lg md:text-xl font-display text-foreground leading-relaxed">
            Como ainda é cedo pra flores de verdade…
          </p>
          <p className="text-2xl md:text-3xl font-display italic text-primary">
            fiz essa aqui só pra você.
          </p>
        </div>

        {/* Button */}
        <div className="animate-fade-in-up pt-4" style={{ animationDelay: "4s" }}>
          <button
            onClick={onNext}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-body font-medium transition-all duration-300 hover:shadow-glow hover:scale-105 active:scale-95"
          >
            <span>Trocar por uma real no nosso encontro?</span>
            <span className="text-xl group-hover:rotate-12 transition-transform">🌸</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlowerSection;

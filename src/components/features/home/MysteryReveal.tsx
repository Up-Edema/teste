import { useState } from "react";

interface MysteryRevealProps {
  onReveal: () => void;
}

const MysteryReveal = ({ onReveal }: MysteryRevealProps) => {
  const [isRevealed, setIsRevealed] = useState(false);

  const handleClick = () => {
    setIsRevealed(true);
    setTimeout(onReveal, 2000);
  };

  return (
    <div className="text-center">
      {!isRevealed ? (
        <div className="space-y-8 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-foreground leading-tight">
            Semana passada,<br />
            <span className="italic text-primary">uma coisa</span><br />
            me lembrou você.
          </h1>
          
          <button
            onClick={handleClick}
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-full transition-all duration-500 hover:shadow-glow"
          >
            <span className="font-body text-foreground group-hover:text-primary transition-colors">
              Clique pra descobrir
            </span>
            <span className="text-primary group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      ) : (
        <div className="space-y-6 animate-fade-in-up">
          <div className="inline-block px-8 py-6 bg-card/80 backdrop-blur-sm rounded-2xl border border-border/50 shadow-romantic">
            <p className="text-xl md:text-2xl font-display italic text-foreground leading-relaxed">
              "Ok… talvez eu te conte<br />
              <span className="text-primary">pessoalmente.</span>"
            </p>
          </div>
          
          <p className="text-sm text-muted-foreground font-body animate-pulse-soft">
            preparando algo especial...
          </p>
        </div>
      )}
    </div>
  );
};

export default MysteryReveal;

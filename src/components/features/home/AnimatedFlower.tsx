import { useEffect, useState } from "react";

const AnimatedFlower = () => {
  const [isGrowing, setIsGrowing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsGrowing(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const petals = Array.from({ length: 8 }, (_, i) => i);

  return (
    <div className="relative w-48 h-80 mx-auto animate-sway">
      {/* Stem */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 bg-gradient-to-t from-soft-green to-accent rounded-full origin-bottom"
        style={{
          height: isGrowing ? "180px" : "0",
          transition: "height 2s ease-out",
        }}
      />

      {/* Leaves */}
      <div
        className="absolute bottom-16 left-1/2 origin-bottom-left"
        style={{
          opacity: isGrowing ? 1 : 0,
          transform: isGrowing ? "translateX(-50%) rotate(-30deg) scale(1)" : "translateX(-50%) rotate(-30deg) scale(0)",
          transition: "all 1s ease-out 1.5s",
        }}
      >
        <div className="w-8 h-14 bg-soft-green rounded-full rounded-bl-none" 
          style={{ clipPath: "ellipse(50% 100% at 50% 100%)" }} 
        />
      </div>
      <div
        className="absolute bottom-24 left-1/2 origin-bottom-right"
        style={{
          opacity: isGrowing ? 1 : 0,
          transform: isGrowing ? "translateX(-50%) rotate(30deg) scale(1)" : "translateX(-50%) rotate(30deg) scale(0)",
          transition: "all 1s ease-out 1.8s",
        }}
      >
        <div className="w-8 h-14 bg-accent rounded-full rounded-br-none" 
          style={{ clipPath: "ellipse(50% 100% at 50% 100%)" }} 
        />
      </div>

      {/* Flower head */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2"
        style={{
          opacity: isGrowing ? 1 : 0,
          transform: isGrowing ? "translateX(-50%) scale(1)" : "translateX(-50%) scale(0)",
          transition: "all 1.5s ease-out 2s",
        }}
      >
        {/* Petals */}
        <div className="relative w-32 h-32">
          {petals.map((i) => {
            const rotation = i * 45;
            return (
              <div
                key={i}
                className="absolute top-1/2 left-1/2 w-12 h-16 -ml-6 -mt-16 origin-bottom animate-petal-flutter"
                style={{
                  "--rotation": `${rotation}deg`,
                  transform: `rotate(${rotation}deg)`,
                  animationDelay: `${i * 0.1}s`,
                } as React.CSSProperties}
              >
                <div className="w-full h-full bg-gradient-to-t from-primary via-petal-pink to-blush rounded-full opacity-90" />
              </div>
            );
          })}

          {/* Center */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-gradient-to-br from-coral to-primary rounded-full shadow-romantic z-10" />
        </div>
      </div>

      {/* Sparkles */}
      {isGrowing && (
        <>
          <div className="absolute top-4 right-4 w-2 h-2 bg-coral rounded-full animate-float opacity-60" style={{ animationDelay: "0s" }} />
          <div className="absolute top-12 left-2 w-1.5 h-1.5 bg-petal-pink rounded-full animate-float opacity-50" style={{ animationDelay: "0.5s" }} />
          <div className="absolute top-8 right-0 w-1 h-1 bg-blush rounded-full animate-float opacity-70" style={{ animationDelay: "1s" }} />
        </>
      )}
    </div>
  );
};

export default AnimatedFlower;

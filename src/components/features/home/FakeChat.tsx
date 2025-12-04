import { useEffect, useState } from "react";

interface Message {
  text: string;
  delay: number;
}

const messages: Message[] = [
  { text: "Teu humor sincero, autêntico e deliciosamente duvidoso.", delay: 0 },
  { text: "Os teus bordões e frases que já viraram ícones por aqui.", delay: 4000 },
  { text: "“Gunga, vai ser minha guia, quero nem saber…”", delay: 8000 },
  { text: "Cada versão tua — até a misteriosa :D", delay: 11500 },
  { text: "Meu hiperfoco declarado nesse sorriso.", delay: 14500 },
  { text: "O teu jeito de falar e de lidar com as pessoas, sempre tão natural.", delay: 17500 },
  { text: "Tua energia, tua vibe… isso aí ninguém copia.", delay: 22000 },
  { text: "E claro… a “boa e nova” entra nessa lista também.", delay: 25500 },
  { text: "Agora deveriam vir flores — mas por enquanto vai só aquela flor.", delay: 29000 },
  { text: "Pronto… já falei demais.", delay: 33000 },
  { text: "Por fim, vou deixar uma frase pra marcar tua vida — e você que se vire pra traduzir com o momento certo:", delay: 35500 },
  { text: "“You’re never too young to dream big.”", delay: 41000 },
  { text: "E sempre lembra disso quando desacreditar de si mesma.", delay: 44000 },
];

const FakeChat = () => {
  const [visibleMessages, setVisibleMessages] = useState<number>(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (visibleMessages < messages.length) {
      const timer = setTimeout(() => {
        setIsTyping(true);
        setTimeout(() => {
          setVisibleMessages((prev) => prev + 1);
          setIsTyping(visibleMessages + 1 < messages.length);
        }, 800);
      }, messages[visibleMessages]?.delay || 1000);
      return () => clearTimeout(timer);
    } else {
      setIsTyping(false);
    }
  }, [visibleMessages]);

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Chat Header */}
      <div className="bg-primary/10 backdrop-blur-sm rounded-t-2xl px-5 py-4 border border-border/50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-coral flex items-center justify-center text-primary-foreground font-display text-lg">
            M
          </div>
          <div>
            <p className="font-body font-medium text-foreground">Mariana ✨</p>
            <p className="text-xs text-muted-foreground">versão alternativa</p>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="bg-card/80 backdrop-blur-sm min-h-[280px] p-5 space-y-4 border-x border-border/50">
        {messages.slice(0, visibleMessages).map((msg, index) => (
          <div
            key={index}
            className="animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="inline-block max-w-[85%] bg-primary/10 rounded-2xl rounded-tl-sm px-4 py-3">
              <p className="text-foreground font-body text-sm leading-relaxed">{msg.text}</p>
            </div>
          </div>
        ))}

        {/* Typing Indicator */}
        {isTyping && visibleMessages < messages.length && (
          <div className="flex items-center gap-1.5 px-4 py-3 bg-muted/50 rounded-2xl rounded-tl-sm w-fit">
            <span className="w-2 h-2 bg-muted-foreground/60 rounded-full animate-typing" style={{ animationDelay: "0s" }} />
            <span className="w-2 h-2 bg-muted-foreground/60 rounded-full animate-typing" style={{ animationDelay: "0.2s" }} />
            <span className="w-2 h-2 bg-muted-foreground/60 rounded-full animate-typing" style={{ animationDelay: "0.4s" }} />
          </div>
        )}
      </div>

      {/* Chat Footer */}
      <div className="bg-primary/5 backdrop-blur-sm rounded-b-2xl px-5 py-3 border border-t-0 border-border/50">
        <p className="text-center text-xs text-muted-foreground italic font-body">
          as mensagens são automáticas 🤫
        </p>
      </div>
    </div>
  );
};

export default FakeChat;

import { useEffect, useState } from "react";

interface Message {
  text: string;
  delay: number;
}

const messages: Message[] = [
  { text: "Oi, Matheus… aqui quem fala é a versão alternativa da Mariana. Aquela que fala o que a original não admite kkkkk.", delay: 0 },
  { text: "Eu sei, eu sei… você vive dizendo que gosta do meu humor. Mas a verdade é que eu só rio fácil assim quando é você falando.", delay: 2500 },
  { text: "E sim… eu também sei que fico soltando esse meu famoso ‘hmmmmmm kkkkk’ só pra você ficar me decifrando. É charme involuntário 😌.", delay: 5500 },
  { text: "Falam que eu tenho um jeitinho misterioso… mas é só porque eu gosto de deixar você curioso. Funciona, né?", delay: 9000 },
  { text: "Sobre o Gunga… eu amei essa ideia de a gente se perder lá. Eu falando que sei o caminho, você duvidando… e no fim nós dois perdidos rindo kkkkk. e eu ainda nao acredito que voce ainda fala sobre esse gunga kkkkk", delay: 12500 },
  { text: "E olha… esse seu jeito com as palavras? Eu percebo, tá. Você tenta parecer casual, mas eu sinto que tem coisa ali.", delay: 16500 },
  { text: "E quando você fala do meu sorriso então? Aí acabou. Eu fico igual idiota. Seu hiperfoco nele é criminoso, viu? 😳", delay: 20000 },
  { text: "No fundo, eu sou isso: risada fácil, ironia automática, mistério calculado… E uma leve, bem leve, queda por você.", delay: 24000 },
  { text: "eu fico assim 🥰", delay: 28000 },
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

import FakeChat from "./FakeChat";

const ChatSection = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
      <div className="max-w-lg w-full mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-3 animate-fade-in-up">
          <p className="text-sm font-body uppercase tracking-widest text-muted-foreground">
            mensagem interceptada
          </p>
          <h2 className="text-3xl md:text-4xl font-display text-foreground">
            Pensamentos de <span className="italic text-primary">Mariana</span>
          </h2>
        </div>

        {/* Chat */}
        <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <FakeChat />
        </div>

        {/* Final CTA */}
        <div className="text-center space-y-6 pt-8 animate-fade-in-up" style={{ animationDelay: "8s" }}>
          <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          
          <p className="font-display text-lg text-muted-foreground italic">
            E aí, quando vai ser?
          </p>

          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              // Could link to WhatsApp or just be decorative
              alert("Agora é só marcar! 💕");
            }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-coral text-primary-foreground rounded-full font-body font-medium transition-all duration-300 hover:shadow-glow hover:scale-105"
          >
            <span>Vamos marcar</span>
            <span>💬</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ChatSection;

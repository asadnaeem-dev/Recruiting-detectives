"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const FILES = {
  1: {
    id: "file-01",
    name: "Asad Naeem",
    title: "The Syndicate Muscle",
    text: "Listen, copper. I was down in the basement gym throwing around some heavy iron. You don't stay 6-foot and 80 kilos in this town without putting in the work. I was wearing my usual black baggy trousers and a white polo, just minding my own business. I didn't hear no scuffle upstairs. With the clanking of the weights, I didn't even know anything happened until I heard your sirens wailing down the block.",
  },
  2: {
    id: "file-02",
    name: "Saddam Hussein",
    title: "The Rival Boss",
    text: "I was across town at my own establishment. I have a dozen of my boys who can vouch they saw me smoking a cigar and playing a few rounds of cards all afternoon. I have no reason to clip Whiskers—it's bad for business. I didn't even know the mouse was dead until your goons kicked my door down and dragged me in here.",
  },
  3: {
    id: "file-03",
    name: "Mr. Redacted",
    title: "The Shady Informant",
    text: "I was supposed to meet Whiskers for a... confidential transaction. I slipped through the fire escape into his study at exactly 4:00 PM. I found him slumped over his mahogany desk, already gone. I panicked. I swear I didn't touch the body! But I did notice a thick hardcover book on his desk. He must have been reading right before the killer got to him. I remember seeing his leather bookmark wedged tight right between pages 15 and 16. That's all I saw before I scrammed back out the window.",
  },
};

export default function DashboardPage() {
  const [timeLeft, setTimeLeft] = useState(180);
  const [activeFile, setActiveFile] = useState<1 | 2 | 3 | null>(null);
  const [gameState, setGameState] = useState<"playing" | "won" | "lost">("playing");
  const [detectiveName, setDetectiveName] = useState("DETECTIVE");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const name = localStorage.getItem("detectiveName");
    if (name) setDetectiveName(name.toUpperCase());
  }, []);

  useEffect(() => {
    if (gameState !== "playing") return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setGameState("lost");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [gameState]);

  const handleAccuse = async (fileId: 1 | 2 | 3) => {
    setActiveFile(null);
    if (fileId === 3) {
      setGameState("won");
      setIsSubmitting(true);
      const timeTaken = 180 - timeLeft;
      try {
        const { supabase } = await import("@/lib/supabase");
        await supabase.from("leaderboard").insert([{ name: detectiveName, time_taken: timeTaken }]);
      } catch (err) {
        console.error("Failed to save score:", err);
      }
      setIsSubmitting(false);
      setTimeout(() => {
        router.push("/leaderboard");
      }, 1200);
    } else {
      setGameState("lost");
    }
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  const isUrgent = timeLeft <= 30;

  if (gameState === "won") {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center" style={{ backgroundColor: "#EAE3DA" }}>
        <h1 
          className="animate-in fade-in zoom-in duration-1000 inline-block" 
          style={{
            fontFamily: "var(--font-special-elite), monospace",
            fontSize: "4rem",
            color: "#1a1a1a",
          }}
        >
          Case solved.
        </h1>
      </div>
    );
  }

  if (gameState === "lost") {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center animate-in fade-in duration-1000" style={{ backgroundColor: "#fdfaf5" }}>
        <h1 className="text-6xl font-headline-lg text-red-600 mb-6 uppercase tracking-widest">Case Failed</h1>
        <p className="text-2xl font-body-lg text-stone-800 mb-8 max-w-2xl">
          {timeLeft === 0
            ? "Time ran out before you could identify the killer."
            : "You accused the wrong suspect. The real killer got away."}
        </p>
        <button
          onClick={() => { setGameState("playing"); setTimeLeft(180); }}
          className="bg-red-700 text-white px-8 py-4 uppercase font-headline-md hover:bg-red-600 transition-colors shadow-[4px_4px_0_0_#000]"
        >
          Retry Case
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden" style={{ backgroundColor: "#EAE3DA" }}>

      {/* ── Header ── */}
      <header
        className="relative z-20 flex justify-between items-center px-8 py-5"
        style={{
          borderBottom: "1px solid rgba(60,40,20,0.12)",
          background: "rgba(253,250,245,0.9)",
          backdropFilter: "blur(8px)",
        }}
      >
        {/* Detective name */}
        <div
          style={{
            fontFamily: "var(--font-special-elite), monospace",
            fontSize: "0.85rem",
            letterSpacing: "0.25em",
            color: "rgba(60,40,20,0.55)",
            textTransform: "uppercase",
          }}
        >
          Detective:&nbsp;
          <span style={{ color: "rgba(60,40,20,0.9)", fontWeight: 700 }}>
            {detectiveName}
          </span>
        </div>

        {/* ── Premium Clock ── */}
        <div
          className="flex items-center gap-3"
          style={{
            background: isUrgent
              ? "linear-gradient(135deg, #7a1010 0%, #3a0808 100%)"
              : "linear-gradient(135deg, #2a1f0f 0%, #1a1308 100%)",
            border: isUrgent
              ? "1px solid rgba(220,50,50,0.4)"
              : "1px solid rgba(180,150,80,0.25)",
            borderRadius: "6px",
            padding: "8px 20px",
            boxShadow: isUrgent
              ? "0 0 20px rgba(180,20,20,0.35), inset 0 1px 0 rgba(255,120,120,0.15)"
              : "0 0 20px rgba(180,140,40,0.15), inset 0 1px 0 rgba(255,220,100,0.1)",
            transition: "all 0.5s ease",
          }}
        >
          {/* Clock icon */}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke={isUrgent ? "rgba(255,120,120,0.7)" : "rgba(200,160,60,0.6)"}
            strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <span
            style={{
              fontFamily: "monospace",
              fontSize: "1.8rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              color: isUrgent ? "#ff8080" : "#d4a830",
              textShadow: isUrgent
                ? "0 0 12px rgba(255,80,80,0.6)"
                : "0 0 12px rgba(212,168,48,0.5)",
              fontVariantNumeric: "tabular-nums",
              animation: isUrgent ? "pulse 0.8s ease-in-out infinite" : "none",
            }}
          >
            {formatTime(timeLeft)}
          </span>
        </div>
      </header>

      {/* ── Main Content ── */}
      <main className="flex-1 flex flex-col items-center justify-start p-6 md:p-10 overflow-y-auto">
        
        {/* Banner Image (you.png) at the top */}
        <div className="w-full flex justify-center mb-8 md:mb-12 mt-2">
          <img src="/you.png" alt="You Are Recruited" className="max-w-[700px] w-full h-auto object-contain drop-shadow-md" />
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12 w-full max-w-7xl">
          {([1, 2, 3] as const).map((idx) => (
            <div
              key={idx}
              onClick={() => setActiveFile(idx)}
              title={`Open File ${idx.toString().padStart(2, "0")}`}
              className="cursor-pointer transition-transform duration-300 hover:-translate-y-4 hover:scale-[1.02] hover:shadow-2xl hover:z-10 group relative w-full sm:w-[45%] lg:w-[30%] max-w-[380px]"
            >
              <img 
                src={`/${idx}.png`} 
                alt={`Case File ${idx}`} 
                className="w-full h-auto object-contain drop-shadow-xl" 
              />
              
              {/* Hover shimmer overlay */}
              <div
                className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100 rounded-lg pointer-events-none"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 60%)",
                  mixBlendMode: "overlay",
                }}
              />
            </div>
          ))}
        </div>
      </main>

      {/* ── Modal Transcript ── */}
      {activeFile && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
          style={{ backgroundColor: "rgba(20,14,8,0.75)", backdropFilter: "blur(4px)" }}
        >
          <div
            className="w-full max-w-xl relative overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-300"
            style={{
              background: "#f5efe0",
              boxShadow: "0 30px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(0,0,0,0.15)",
              backgroundImage: "repeating-linear-gradient(transparent, transparent 31px, #d6c9a8 31px, #d6c9a8 32px)",
            }}
          >
            {/* Close */}
            <button
              onClick={() => setActiveFile(null)}
              className="absolute top-4 right-4 z-20 transition-colors"
              aria-label="Close"
              style={{ color: "rgba(80,60,30,0.5)" }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Body */}
            <div className="px-10 pt-10 pb-6 overflow-y-auto">
              <p
                className="text-xs uppercase mb-3"
                style={{ fontFamily: "var(--font-special-elite)", letterSpacing: "0.35em", color: "rgba(80,60,30,0.5)" }}
              >
                {FILES[activeFile].id} — Interrogation Transcript
              </p>
              <h2
                className="text-5xl font-black uppercase leading-none mb-1"
                style={{ fontFamily: "var(--font-playfair)", color: "#2a1a0a" }}
              >
                {FILES[activeFile].name}
              </h2>
              <p
                className="text-base italic mb-8 pb-5"
                style={{
                  fontFamily: "var(--font-playfair)",
                  color: "rgba(80,60,30,0.65)",
                  borderBottom: "1px solid rgba(80,60,30,0.2)",
                }}
              >
                a.k.a. &ldquo;{FILES[activeFile].title}&rdquo;
              </p>
              <p
                className="text-[1.05rem] leading-[2rem]"
                style={{ fontFamily: "var(--font-special-elite)", color: "#3a2510" }}
              >
                &ldquo;{FILES[activeFile].text}&rdquo;
              </p>
            </div>

            {/* Footer */}
            <div className="px-10 py-8 flex justify-center">
              <button
                onClick={() => handleAccuse(activeFile)}
                className="uppercase tracking-[0.25em] transition-all active:scale-95"
                style={{
                  fontFamily: "var(--font-special-elite)",
                  fontSize: "0.85rem",
                  letterSpacing: "0.3em",
                  background: "#2a1a0a",
                  color: "#f5efe0",
                  padding: "12px 56px",
                  borderRadius: "9999px",
                  boxShadow: "4px 4px 0 0 #7a2020",
                }}
              >
                Accuse
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

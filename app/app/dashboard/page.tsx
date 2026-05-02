"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const FILES = {
  1: {
    id: "file-01",
    name: "Asad Naeem",
    title: "The Syndicate Muscle",
    text: "Listen, copper. I was down in the basement gym throwing around some heavy iron. You don't stay 6-foot and 80 kilos in this town without putting in the work. I was wearing my usual black baggy trousers and a white polo, just minding my own business. I didn't hear no scuffle upstairs. With the clanking of the weights, I didn't even know anything happened until I heard your sirens wailing down the block."
  },
  2: {
    id: "file-02",
    name: "Saddam Hussein",
    title: "The Rival Boss",
    text: "I was across town at my own establishment. I have a dozen of my boys who can vouch they saw me smoking a cigar and playing a few rounds of cards all afternoon. I have no reason to clip Whiskers—it's bad for business. I didn't even know the mouse was dead until your goons kicked my door down and dragged me in here."
  },
  3: {
    id: "file-03",
    name: "Mr. Redacted",
    title: "The Shady Informant",
    text: "I was supposed to meet Whiskers for a... confidential transaction. I slipped through the fire escape into his study at exactly 4:00 PM. I found him slumped over his mahogany desk, already gone. I panicked. I swear I didn't touch the body! But I did notice a thick hardcover book on his desk. He must have been reading right before the killer got to him. I remember seeing his leather bookmark wedged tight right between pages 15 and 16. That's all I saw before I scrammed back out the window."
  }
};

export default function DashboardPage() {
  const [timeLeft, setTimeLeft] = useState(180); // 3 minutes
  const [activeFile, setActiveFile] = useState<1 | 2 | 3 | null>(null);
  const [gameState, setGameState] = useState<"playing" | "won" | "lost">("playing");
  const [detectiveName, setDetectiveName] = useState("DETECTIVE");
  const router = useRouter();

  useEffect(() => {
    const name = localStorage.getItem("detectiveName");
    if (name) setDetectiveName(name);
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

  const handleAccuse = (fileId: 1 | 2 | 3) => {
    // Mr. Redacted (File 3) is the killer because pages 15 and 16 are on the same leaf.
    if (fileId === 3) {
      setGameState("won");
    } else {
      setGameState("lost");
    }
    setActiveFile(null);
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  if (gameState === "won") {
    return (
      <div className="min-h-screen bg-[#fdfaf5] flex flex-col items-center justify-center p-8 text-center animate-in fade-in duration-1000">
        <h1 className="text-6xl font-headline-lg text-green-700 mb-6 uppercase tracking-widest">Case Closed!</h1>
        <p className="text-2xl font-body-lg text-stone-800 mb-8 max-w-2xl">
          Excellent work, {detectiveName}. You spotted the contradiction: a bookmark cannot be wedged between pages 15 and 16 of a standard book, as they are printed on the front and back of the exact same page! Mr. Redacted was lying.
        </p>
        <button 
          onClick={() => router.push("/")}
          className="bg-black text-white px-8 py-4 uppercase font-headline-md hover:bg-stone-800 transition-colors shadow-[4px_4px_0_0_#d32f2f]"
        >
          Return to HQ
        </button>
      </div>
    );
  }

  if (gameState === "lost") {
    return (
      <div className="min-h-screen bg-stone-950 flex flex-col items-center justify-center p-8 text-center animate-in fade-in duration-1000">
        <h1 className="text-6xl font-headline-lg text-red-600 mb-6 uppercase tracking-widest">Case Failed</h1>
        <p className="text-2xl font-body-lg text-stone-400 mb-8 max-w-2xl">
          {timeLeft === 0 
            ? "Time ran out before you could identify the killer." 
            : "You accused the wrong suspect. The real killer got away."}
        </p>
        <button 
          onClick={() => {
            setGameState("playing");
            setTimeLeft(180);
          }}
          className="bg-red-700 text-white px-8 py-4 uppercase font-headline-md hover:bg-red-600 transition-colors shadow-[4px_4px_0_0_#000]"
        >
          Retry Case
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#111] flex flex-col relative font-body-md">
      {/* Top Banner / Timer */}
      <header className="absolute top-0 left-0 w-full z-10 flex justify-between items-center p-6 bg-gradient-to-b from-black/80 to-transparent">
        <div className="text-white font-headline-md opacity-80 uppercase tracking-widest">
          Detective: {detectiveName}
        </div>
        <div className={`text-5xl font-headline-lg ${timeLeft <= 30 ? 'text-red-500 animate-pulse' : 'text-white'} drop-shadow-lg`}>
          {formatTime(timeLeft)}
        </div>
      </header>

      {/* Main Game Area */}
      <main className="flex-1 flex flex-col items-center justify-center p-4 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl h-auto md:h-[600px]">
          {/* Suspect 1 */}
          <div 
            className="w-full h-[400px] md:h-full cursor-pointer hover:opacity-80 transition-opacity border-4 border-stone-800 bg-stone-900 shadow-[8px_8px_0_0_#000]"
            style={{ backgroundImage: "url('/testimonials.png')", backgroundSize: "300% 100%", backgroundPosition: "left center" }}
            onClick={() => setActiveFile(1)}
            title="View File 01"
          />
          {/* Suspect 2 */}
          <div 
            className="w-full h-[400px] md:h-full cursor-pointer hover:opacity-80 transition-opacity border-4 border-stone-800 bg-stone-900 shadow-[8px_8px_0_0_#000]"
            style={{ backgroundImage: "url('/testimonials.png')", backgroundSize: "300% 100%", backgroundPosition: "center center" }}
            onClick={() => setActiveFile(2)}
            title="View File 02"
          />
          {/* Suspect 3 */}
          <div 
            className="w-full h-[400px] md:h-full cursor-pointer hover:opacity-80 transition-opacity border-4 border-stone-800 bg-stone-900 shadow-[8px_8px_0_0_#000]"
            style={{ backgroundImage: "url('/testimonials.png')", backgroundSize: "300% 100%", backgroundPosition: "right center" }}
            onClick={() => setActiveFile(3)}
            title="View File 03"
          />
        </div>
      </main>

      {/* Popup Modal for Transcripts */}
      {activeFile && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm animate-in fade-in duration-200">
          <div
            className="bg-[#f0ead8] w-full max-w-xl relative overflow-hidden flex flex-col max-h-[90vh]"
            style={{
              boxShadow: "12px 12px 0 0 #000, 0 0 0 2px #1a1a1a",
              backgroundImage: "repeating-linear-gradient(transparent, transparent 31px, #c8bfa0 31px, #c8bfa0 32px)",
            }}
          >
            {/* Close button — top right corner */}
            <button
              onClick={() => setActiveFile(null)}
              className="absolute top-4 right-4 z-20 text-stone-600 hover:text-black transition-colors"
              aria-label="Close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {/* Modal Body */}
            <div className="px-10 pt-10 pb-6 overflow-y-auto relative">
              {/* File label — small, muted */}
              <p
                className="text-xs uppercase tracking-[0.35em] text-stone-500 mb-3"
                style={{ fontFamily: "var(--font-special-elite)" }}
              >
                {FILES[activeFile].id} — Interrogation Transcript
              </p>

              {/* Suspect Name — Playfair Display, bold, large */}
              <h2
                className="text-5xl font-black text-stone-900 uppercase leading-none mb-1"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {FILES[activeFile].name}
              </h2>

              {/* Alias — italic Playfair */}
              <p
                className="text-base text-stone-600 italic mb-8 pb-5 border-b border-stone-400"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                a.k.a. "{FILES[activeFile].title}"
              </p>

              {/* Testimony — Special Elite typewriter font */}
              <p
                className="text-[1.05rem] text-stone-800 leading-[2rem]"
                style={{ fontFamily: "var(--font-special-elite)" }}
              >
                "{FILES[activeFile].text}"
              </p>
            </div>

            {/* Footer — ACCUSE only, centered */}
            <div className="px-10 py-8 flex justify-center">
              <button
                onClick={() => handleAccuse(activeFile)}
                className="bg-stone-900 text-[#f0ead8] px-14 py-3 uppercase tracking-[0.25em] rounded-full hover:bg-black transition-colors active:scale-95 shadow-[4px_4px_0_0_#7a2020]"
                style={{ fontFamily: "var(--font-special-elite)", fontSize: "1rem", letterSpacing: "0.3em" }}
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

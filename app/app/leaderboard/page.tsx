"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

type LeaderboardEntry = {
  id: number;
  name: string;
  time_taken: number;
};

export default function LeaderboardPage() {
  const [leaders, setLeaders] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function fetchLeaderboard() {
      try {
        const { data, error } = await supabase
          .from("leaderboard")
          .select("*")
          .order("time_taken", { ascending: true })
          .limit(10);
        
        if (error) throw error;
        setLeaders(data || []);
      } catch (error) {
        console.error("Error fetching leaderboard:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchLeaderboard();
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 relative" style={{ backgroundColor: "#EAE3DA" }}>
      {/* Noir border frame */}
      <div className="w-full max-w-3xl border-4 border-stone-900 p-8 md:p-12 relative shadow-[8px_8px_0_0_#1a1a1a] bg-[#EAE3DA]">
        <h1 
          className="text-4xl md:text-5xl font-special-elite text-stone-900 mb-8 text-center tracking-widest animate-in fade-in zoom-in duration-1000 inline-block"
        >
          Top detectives
        </h1>

        {loading ? (
          <div className="text-center py-12 flex justify-center">
            <p 
              className="text-xl font-special-elite text-stone-500 animate-pulse inline-block"
            >
              Retrieving classified records...
            </p>
          </div>
        ) : leaders.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl font-special-elite text-stone-500">No records found. Be the first to solve the case.</p>
          </div>
        ) : (
          <div className="w-full">
            <div className="flex border-b-2 border-stone-900 pb-2 mb-4 font-body-lg font-bold uppercase tracking-wider text-stone-900">
              <div className="w-16 text-center">Rank</div>
              <div className="flex-1 px-4">Detective Name</div>
              <div className="w-32 text-right">Time</div>
            </div>
            
            <div className="flex flex-col gap-2 font-special-elite text-lg text-stone-900">
              {leaders.map((entry, index) => (
                <div key={entry.id} className="flex py-2 border-b border-stone-300 hover:bg-stone-200 transition-colors">
                  <div className="w-16 text-center font-bold text-stone-400">#{index + 1}</div>
                  <div className="flex-1 px-4 uppercase tracking-widest font-bold">{entry.name}</div>
                  <div className="w-32 text-right text-red-800 font-bold">{formatTime(entry.time_taken)}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-12 text-center">
          <button
            onClick={() => router.push("/")}
            className="bg-stone-900 text-[#EAE3DA] px-8 py-3 uppercase font-headline-md hover:bg-red-800 transition-colors shadow-[4px_4px_0_0_#d32f2f]"
          >
            Play Again
          </button>
        </div>
      </div>
      <div className="mt-8 font-special-elite text-sm text-stone-500 tracking-widest uppercase">
        ©1933 Mouse PI Agencies
      </div>
    </div>
  );
}

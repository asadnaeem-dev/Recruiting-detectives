"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

type WireId = "red" | "green" | "blue";
type PortId = "port1" | "port2" | "port3";

interface Connection {
  wire: WireId;
  target: PortId | null;
}

export default function SwitchboardGame() {
  const [connections, setConnections] = useState<Connection[]>([
    { wire: "red", target: null },
    { wire: "green", target: null },
    { wire: "blue", target: null },
  ]);

  const [draggingWire, setDraggingWire] = useState<WireId | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isSolved, setIsSolved] = useState(false);
  const [recruitedName, setRecruitedName] = useState("");
  const router = useRouter();

  const svgRef = useRef<SVGSVGElement>(null);

  const sourcePorts = {
    red: { x: 100, y: 350, color: "#d32f2f" },
    green: { x: 300, y: 350, color: "#388e3c" },
    blue: { x: 500, y: 350, color: "#1976d2" },
  };

  const targetPorts = {
    port1: { x: 100, y: 100 },
    port2: { x: 300, y: 100 },
    port3: { x: 500, y: 100 },
  };

  const handlePointerDown = (wire: WireId) => {
    if (isSolved) return;
    setDraggingWire(wire);
    // Disconnect if already connected
    setConnections((prev) =>
      prev.map((c) => (c.wire === wire ? { ...c, target: null } : c))
    );
  };

  const handlePointerMove = (e: React.PointerEvent<SVGSVGElement>) => {
    if (!draggingWire || !svgRef.current) return;
    // Call e.preventDefault to stop scrolling on mobile touch
    e.preventDefault(); 
    const rect = svgRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 600;
    const y = ((e.clientY - rect.top) / rect.height) * 450;
    setMousePos({ x, y });
  };

  const handlePointerUp = () => {
    if (!draggingWire) return;
    
    // Check if near any target port
    let connectedPort: PortId | null = null;
    for (const [portId, pos] of Object.entries(targetPorts)) {
      const dx = pos.x - mousePos.x;
      const dy = pos.y - mousePos.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < 40) {
        connectedPort = portId as PortId;
        break;
      }
    }

    if (connectedPort) {
      // Check if port is already taken by another wire, if so disconnect it
      setConnections((prev) => {
        const newConns = prev.map((c) =>
          c.target === connectedPort ? { ...c, target: null } : c
        );
        return newConns.map((c) =>
          c.wire === draggingWire ? { ...c, target: connectedPort } : c
        );
      });
    }

    setDraggingWire(null);
  };

  // Check win condition
  useEffect(() => {
    const isWin =
      connections.find((c) => c.wire === "blue")?.target === "port1" &&
      connections.find((c) => c.wire === "green")?.target === "port2" &&
      connections.find((c) => c.wire === "red")?.target === "port3";

    if (isWin && !isSolved) {
      setTimeout(() => setIsSolved(true), 500);
    }
  }, [connections, isSolved]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (recruitedName.trim() !== "") {
      // Store the name so the dashboard can display it
      localStorage.setItem("detectiveName", recruitedName.trim());
      // Navigate to dashboard
      router.push("/dashboard");
    }
  };

  return (
    <section className="max-w-container-max mx-auto px-margin py-12">
      <div className="bg-stone-800 border-[3px] border-black hard-shadow p-8 rounded-none relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {/* Left Clues Panel */}
          <div className="space-y-4 z-10 relative">
            <div className="bg-tertiary-container border-[3px] border-black p-4 rotate-[-1deg]">
              <h3 className="font-headline-md text-on-tertiary-container mb-2 uppercase border-b-2 border-black">
                The Clues
              </h3>
              <ul className="space-y-2 font-label-sm text-on-tertiary-container list-none">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined">radio_button_checked</span>
                  Blue connects to the first port on the left.
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined">radio_button_checked</span>
                  Red goes on the right of Green.
                </li>
              </ul>
            </div>
            <img
              className="w-full h-48 object-cover border-[3px] border-black hard-shadow-small grayscale contrast-125"
              data-alt="Vintage typewriter"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7Xx4x2a-veudu4b-pzxDzh8rTP3oxoMK9X0GSdX9858CGxlBs0Zmm4u90OUYwFtnU5BxohUhFaqPgsqXns5i3vVOndEdWc7pQeNC-FXLeWsyF0HPLkEKnaCg2z76eYSrRuKCs7eUIci5PLIDd_Yg6CmhtGkK79FZbQgSA2DyWI_CzUKfQm09K8e5T0BY48dHqlhhIDr8ssuIpbVl8yo34rPOpBAR7PyX1ReYOL0Fq4tN3VgMz_RtXSijkf56RG41_tcrPBlerYCit"
            />
          </div>

          {/* Main Switchboard Hub */}
          <div className="md:col-span-2 bg-stone-900 border-[3px] border-black p-6 relative select-none">
            <div className="flex justify-between items-center mb-8 relative z-10 pointer-events-none">
              <span className={`font-headline-md ${isSolved ? 'text-green-400' : 'text-primary'}`}>
                STATUS: {isSolved ? 'CONNECTION SECURED' : 'FRANTIC'}
              </span>
              <div className="flex gap-2">
                <div className={`w-4 h-4 rounded-full border-2 border-black ${isSolved ? 'bg-green-500' : 'bg-primary-container animate-pulse'}`}></div>
                <div className="w-4 h-4 rounded-full bg-on-tertiary border-2 border-black"></div>
              </div>
            </div>

            {/* SVG Game Layer */}
            <div className="relative w-full aspect-[4/3] bg-black/50 border-2 border-stone-700 overflow-hidden touch-none">
              <svg
                ref={svgRef}
                viewBox="0 0 600 450"
                className="w-full h-full absolute top-0 left-0"
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerLeave={handlePointerUp}
              >
                {/* Target Ports Background*/}
                <path d="M 0 100 L 600 100" stroke="#444" strokeWidth="20" opacity="0.3" />
                <path d="M 0 350 L 600 350" stroke="#444" strokeWidth="20" opacity="0.3" />

                {/* Target Ports */}
                {Object.entries(targetPorts).map(([portId, pos]) => (
                  <g key={portId} transform={`translate(${pos.x}, ${pos.y})`}>
                    <circle cx="0" cy="0" r="24" fill="#1a1a1a" stroke="#444" strokeWidth="4" />
                    <circle cx="0" cy="0" r="10" fill="#000" />
                  </g>
                ))}

                {/* Wires */}
                {["red", "green", "blue"].map((w) => {
                  const wire = w as WireId;
                  const source = sourcePorts[wire];
                  const conn = connections.find((c) => c.wire === wire);
                  const isDragging = draggingWire === wire;

                  let endX = source.x;
                  let endY = source.y + 20; // Default dropped state

                  if (isDragging) {
                    endX = mousePos.x;
                    endY = mousePos.y;
                  } else if (conn?.target) {
                    endX = targetPorts[conn.target].x;
                    endY = targetPorts[conn.target].y;
                  }

                  // Calculate rubber-hose bezier curve
                  const dx = Math.abs(endX - source.x);
                  const controlYOffset = Math.max(100, dx * 0.5);
                  const d = `M ${source.x} ${source.y} C ${source.x} ${source.y - controlYOffset}, ${endX} ${endY + controlYOffset}, ${endX} ${endY}`;

                  return (
                    <path
                      key={`wire-${wire}`}
                      d={d}
                      fill="none"
                      stroke={source.color}
                      strokeWidth={12}
                      strokeLinecap="round"
                      className="transition-all duration-75"
                      style={{ filter: "drop-shadow(2px 4px 4px rgba(0,0,0,0.5))" }}
                      pointerEvents="none"
                    />
                  );
                })}

                {/* Source Ports (Draggable handles) */}
                {Object.entries(sourcePorts).map(([wire, pos]) => (
                  <g 
                    key={`source-${wire}`} 
                    transform={`translate(${pos.x}, ${pos.y})`}
                    className={isSolved ? "pointer-events-none" : "cursor-pointer"}
                    onPointerDown={(e) => {
                      e.stopPropagation();
                      (e.target as Element).setPointerCapture(e.pointerId);
                      handlePointerDown(wire as WireId);
                    }}
                  >
                    <circle cx="0" cy="0" r="24" fill="#1a1a1a" stroke="#444" strokeWidth="4" />
                    <circle cx="0" cy="0" r="16" fill={pos.color} stroke="#000" strokeWidth="2" />
                    {/* Highlight when hovering if not solved */}
                    {!isSolved && <circle cx="0" cy="0" r="24" fill="transparent" className="hover:fill-white/20 transition-colors" />}
                  </g>
                ))}
              </svg>
            </div>
            
            <div className="mt-6 p-4 border-2 border-stone-700 bg-black/40 text-sm font-mono text-stone-400">
              {isSolved ? (
                <span className="text-green-400">SYSTEM LOG: ALL CONNECTIONS VERIFIED. ACCESS GRANTED.</span>
              ) : (
                <span>SYSTEM LOG: AWAITING CORRECT WIRING SEQUENCE...</span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Success Registration State */}
      {isSolved && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#fdfaf5] p-4 animate-in fade-in duration-500">
          <div className="relative w-full max-w-5xl aspect-[16/9] animate-in zoom-in-95 duration-500">
             <img src="/recruitment-page.png" alt="Recruitment" className="w-full h-full object-contain pointer-events-none" />
             
             <form onSubmit={handleSubmit} className="absolute inset-0">
               {/* Invisible Input overlaying the drawn input field, starting after "YOUR NAME:" */}
               <input
                 required
                 className="absolute top-[61%] left-[48%] w-[18%] h-[6.5%] bg-transparent border-none outline-none focus:ring-0 text-2xl font-body-md text-black px-2"
                 type="text"
                 value={recruitedName}
                 onChange={(e) => setRecruitedName(e.target.value)}
                 style={{
                   fontFamily: "var(--font-limelight)",
                 }}
               />
               
               {/* Transparent button overlaying the drawn ACCEPT CASE button */}
               <button
                 className="absolute top-[72%] left-[41%] w-[18%] h-[8%] bg-transparent border-none cursor-pointer hover:bg-black/10 transition-colors rounded-xl"
                 type="submit"
               />
             </form>
          </div>
        </div>
      )}
    </section>
  );
}

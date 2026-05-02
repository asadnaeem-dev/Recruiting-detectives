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
    green: { x: 150, y: 340, color: "#1e8449", glow: "rgba(0,0,0,0.2)" },
    red:   { x: 300, y: 340, color: "#a93226", glow: "rgba(0,0,0,0.2)" },
    blue:  { x: 450, y: 340, color: "#21618c", glow: "rgba(0,0,0,0.2)" },
  };

  const targetPorts = {
    port1: { x: 150, y: 110 },
    port2: { x: 300, y: 110 },
    port3: { x: 450, y: 110 },
  };

  const handlePointerDown = (wire: WireId) => {
    if (isSolved) return;
    setDraggingWire(wire);
    setConnections((prev) =>
      prev.map((c) => (c.wire === wire ? { ...c, target: null } : c))
    );
  };

  const handlePointerMove = (e: React.PointerEvent<SVGSVGElement>) => {
    if (!draggingWire || !svgRef.current) return;
    e.preventDefault();
    const rect = svgRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 600;
    const y = ((e.clientY - rect.top) / rect.height) * 450;
    setMousePos({ x, y });
  };

  const handlePointerUp = () => {
    if (!draggingWire) return;

    let connectedPort: PortId | null = null;
    for (const [portId, pos] of Object.entries(targetPorts)) {
      const dx = pos.x - mousePos.x;
      const dy = pos.y - mousePos.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < 45) {
        connectedPort = portId as PortId;
        break;
      }
    }

    if (connectedPort) {
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

  // Check win condition — blue→port1, green→port2, red→port3
  // (meaning order left-to-right is: blue, green, red → red is immediately right of green, so green is immediately left of red → "red goes on the immediate left of green" reversed... )
  // Wait: clue is "red goes on the immediate LEFT of green" → red=port1? No:
  // "red goes on the immediate left of green" → red is LEFT of green.
  // left-to-right ports: port1 port2 port3
  // So red=port1, green=port2. Blue gets port3.
  useEffect(() => {
    const isWin =
      connections.find((c) => c.wire === "red")?.target === "port1" &&
      connections.find((c) => c.wire === "green")?.target === "port2" &&
      connections.find((c) => c.wire === "blue")?.target === "port3";

    if (isWin && !isSolved) {
      setTimeout(() => setIsSolved(true), 500);
    }
  }, [connections, isSolved]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (recruitedName.trim() !== "") {
      localStorage.setItem("detectiveName", recruitedName.trim());
      router.push("/dashboard");
    }
  };

  // Port label letters
  const portLabels = ["I", "II", "III"];

  return (
    <section className="flex flex-col items-center justify-center w-full">
      {/* The Puzzle Frame */}
      <div
        className="relative"
        style={{
          background: "#fdfaf5",
          border: "4px solid #1a1a1a",
          borderRadius: "8px",
          boxShadow: "8px 8px 0 #1a1a1a",
          width: "min(600px, 95vw)",
        }}
      >
        {/* Subtle header line */}
        <div className="flex items-center justify-center pt-8 pb-4">
          <div style={{ height: "2px", flex: 1, background: "#1a1a1a", marginLeft: "24px" }} />
          <span
            style={{
              fontFamily: "var(--font-limelight), sans-serif",
              color: "#1a1a1a",
              fontSize: "0.85rem",
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              padding: "0 20px",
            }}
          >
            Switchboard
          </span>
          <div style={{ height: "2px", flex: 1, background: "#1a1a1a", marginRight: "24px" }} />
        </div>

        {/* SVG Game Area */}
        <div
          className="relative touch-none select-none"
          style={{ aspectRatio: "600/450", width: "100%" }}
        >
          <svg
            ref={svgRef}
            viewBox="0 0 600 450"
            className="w-full h-full absolute top-0 left-0"
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
          >
            <defs>
              <filter id="glow-solved">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
            </defs>

            {/* Top rail */}
            <rect x="60" y="90" width="480" height="4" rx="2" fill="rgba(0,0,0,0.1)" />
            {/* Bottom rail */}
            <rect x="60" y="356" width="480" height="4" rx="2" fill="rgba(0,0,0,0.1)" />

            {/* Target Ports */}
            {Object.entries(targetPorts).map(([portId, pos], i) => {
              const conn = connections.find((c) => c.target === portId);
              const wireColor = conn ? sourcePorts[conn.wire as WireId] : null;
              return (
                <g key={portId} transform={`translate(${pos.x}, ${pos.y})`}>
                  {/* Outer ring */}
                  <circle cx="0" cy="0" r="22" fill="#fff" stroke="#1a1a1a" strokeWidth="3" />
                  {/* Inner socket */}
                  <circle cx="0" cy="0" r="12" fill="#e0dcd3" stroke="#1a1a1a" strokeWidth="2" />
                  {/* Center pin */}
                  <circle cx="0" cy="0" r="4" fill="#1a1a1a" />
                  {/* Port label */}
                  <text x="0" y="-32" textAnchor="middle" fill="#1a1a1a" fontSize="12" fontFamily="var(--font-limelight)" letterSpacing="2" fontWeight="bold">
                    {portLabels[i]}
                  </text>
                </g>
              );
            })}

            {/* Wires */}
            {(["red", "green", "blue"] as WireId[]).map((wire) => {
              const source = sourcePorts[wire];
              const conn = connections.find((c) => c.wire === wire);
              const isDragging = draggingWire === wire;

              let endX = source.x;
              let endY = source.y + 20;

              if (isDragging) {
                endX = mousePos.x;
                endY = mousePos.y;
              } else if (conn?.target) {
                endX = targetPorts[conn.target].x;
                endY = targetPorts[conn.target].y;
              }

              const dx = Math.abs(endX - source.x);
              const controlYOffset = Math.max(80, dx * 0.45);
              const d = `M ${source.x} ${source.y} C ${source.x} ${source.y - controlYOffset}, ${endX} ${endY + controlYOffset}, ${endX} ${endY}`;
              const isConnected = !!conn?.target;

              return (
                <g key={`wire-${wire}`}>
                  {/* Shadow stroke */}
                  <path
                    d={d}
                    fill="none"
                    stroke="rgba(0,0,0,0.6)"
                    strokeWidth={16}
                    strokeLinecap="round"
                    pointerEvents="none"
                  />
                  {/* Main wire */}
                  <path
                    d={d}
                    fill="none"
                    stroke={source.color}
                    strokeWidth={10}
                    strokeLinecap="round"
                    pointerEvents="none"
                  />
                  {/* Highlight sheen */}
                  <path
                    d={d}
                    fill="none"
                    stroke="rgba(255,255,255,0.3)"
                    strokeWidth={3}
                    strokeLinecap="round"
                    pointerEvents="none"
                  />
                </g>
              );
            })}

            {/* Source Ports (Draggable handles) */}
            {(Object.entries(sourcePorts) as [WireId, typeof sourcePorts.red][]).map(([wire, pos]) => (
              <g
                key={`source-${wire}`}
                transform={`translate(${pos.x}, ${pos.y})`}
                className={isSolved ? "pointer-events-none" : "cursor-pointer"}
                onPointerDown={(e) => {
                  e.stopPropagation();
                  (e.target as Element).setPointerCapture(e.pointerId);
                  handlePointerDown(wire);
                }}
              >
                {/* Outer casing */}
                <circle cx="0" cy="0" r="26" fill="#fff" stroke="#1a1a1a" strokeWidth="3" />
                {/* Colored plug head */}
                <circle cx="0" cy="0" r="18" fill={pos.color} />
                {/* Specular highlight */}
                <ellipse cx="-5" cy="-6" rx="5" ry="3" fill="rgba(255,255,255,0.4)" />
                {/* Hover ring */}
                {!isSolved && (
                  <circle cx="0" cy="0" r="26" fill="transparent" className="hover:fill-black/5 transition-colors" />
                )}
                {/* Wire label */}
                <text x="0" y="44" textAnchor="middle" fill="#1a1a1a" fontSize="11" fontFamily="var(--font-limelight)" letterSpacing="1" style={{ textTransform: "uppercase" }} fontWeight="bold">
                  {wire.toUpperCase()}
                </text>
              </g>
            ))}

            {/* Solved glow overlay */}
            {isSolved && (
              <rect x="0" y="0" width="600" height="450" fill="rgba(39,174,96,0.04)" rx="0" pointerEvents="none" />
            )}
          </svg>
        </div>

        {/* Status strip */}
        <div
          className="flex items-center justify-center py-4 px-6"
          style={{ borderTop: "2px solid #1a1a1a", background: "rgba(0,0,0,0.02)" }}
        >
          <span
            style={{
              fontFamily: "var(--font-special-elite), monospace",
              fontSize: "0.85rem",
              letterSpacing: "0.3em",
              color: isSolved ? "#1e8449" : "#1a1a1a",
              textTransform: "uppercase",
              transition: "color 0.5s",
              fontWeight: "bold",
            }}
          >
            {isSolved ? "▲  CONNECTION SECURED  ▲" : "AWAITING WIRING SEQUENCE"}
          </span>
        </div>
      </div>

      {/* Single Hint */}
      <p
        className="mt-8 text-center"
        style={{
          fontFamily: "var(--font-playfair), serif",
          color: "#e74c3c",
          fontSize: "1.2rem",
          letterSpacing: "0.06em",
          fontStyle: "italic",
        }}
      >
        Hint: red goes on the immediate left of green.
      </p>

      {/* Success Registration State */}
      {isSolved && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-500"
          style={{ backgroundColor: "#fdfaf5" }}>
          <div className="relative w-full max-w-5xl animate-in zoom-in-95 duration-500" style={{ aspectRatio: "16/9" }}>
            <img src="/recruitment-page.png" alt="Recruitment" className="w-full h-full object-contain pointer-events-none" />

            <form onSubmit={handleSubmit} className="absolute inset-0">
              <input
                required
                className="absolute top-[61%] left-[48%] w-[18%] h-[6.5%] bg-transparent border-none outline-none focus:ring-0 text-2xl text-stone-900 px-2"
                type="text"
                value={recruitedName}
                onChange={(e) => setRecruitedName(e.target.value)}
                style={{ fontFamily: "var(--font-special-elite), monospace", color: "#000000", fontWeight: "bold" }}
              />
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

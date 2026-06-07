import { useState } from "react";
import LoadingScreen from "../components/LoadingScreen";
import LPCard from "../components/LPCard";
import { members } from "../data/members";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [activeId, setActiveId] = useState<string | null>(null);

  if (loading) {
    return <LoadingScreen onFinish={() => setLoading(false)} />;
  }

  return (
    <div className="relative min-h-screen bg-white flex flex-col items-center px-6 py-14 overflow-hidden">

      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-15"
        style={{
          backgroundImage: "url(/background/noisy-background.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "repeat",
        }}
      />

      {activeId && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-md transition-all duration-500 z-0" />
      )}

      <div className="relative z-10 text-center">

        <h1
          className={`
            text-5xl md:text-6xl font-bold tracking-[0.3em]
            transition-all duration-500
            ${
              activeId
                ? "text-[#0585B0] opacity-50 drop-shadow-[0_0_12px_rgba(5,133,176,0.3)]"
                : "primary opacity-80"
            }
          `}
        >
          hrtz.archive
        </h1>

        <div
          className={`
            transition-all duration-500
            ${activeId ? "opacity-40 blur-[1px]" : "opacity-100"}
          `}
        >

          <p className="mt-3 text-xs tracking-[0.4em] text-gray-400">
            A record of songs recommended by hrtz.wav
          </p>

          <div className="mt-10 w-24 h-[1px] bg-gray-200 mx-auto" />

          <div className="mt-7 flex justify-center">
            <img
              src="/logo/logo.png"
              alt="hrtz logo"
              className={`
                w-24 md:w-32 object-contain
                transition-all duration-500
                ${activeId ? "opacity-40 blur-[1px]" : "opacity-100"}
              `}
            />
          </div>

        </div>
      </div>

      <div
        className={`
          mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 z-10
          transition-all duration-500
          ${activeId ? "scale-[0.98]" : "scale-100"}
        `}
      >
        {members.map((m) => {
          const isActive = activeId === m.id;
          const isDimmed = activeId !== null && !isActive;

          return (
            <div
              key={m.id}
              className={`
                transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]
                transform
                ${isDimmed ? "opacity-20 blur-sm scale-90" : ""}
                ${isActive ? "scale-125 z-50" : ""}
              `}
            >
              <LPCard
                member={m}
                isActive={isActive}
                setActiveId={setActiveId}
              />
            </div>
          );
        })}
      </div>

      <div className="mt-20 w-full flex justify-center z-10">
        <div className="w-1/2 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-40" />
      </div>

      <div className="mt-6 z-10 text-center">
        <p className="text-xs text-gray-400 tracking-wide">
          Last updated: 2026.06.07.
        </p>
      </div>

    </div>
  );
}
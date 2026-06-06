import { useEffect, useState } from "react";
import LoadingWave from "./LoadingWave.tsx";

export default function LoadingScreen({ onFinish }: { onFinish: () => void }) {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 500);

    const timer = setTimeout(() => {
      onFinish();
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white">

<div
        className="absolute inset-0 pointer-events-none opacity-[0.4]"
        style={{
          backgroundImage: "url(/background/noisy-background.jpg)",
          backgroundRepeat: "repeat",
          backgroundSize: "300px 300px",
        }}
      />

      <div className="text-center">
        <LoadingWave />

        <p className="mt-8 font-bold primary">
          Tuning into your frequency{dots}
        </p>
      </div>
    </div>
  );
}
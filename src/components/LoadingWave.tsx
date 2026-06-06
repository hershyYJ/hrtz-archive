import { motion } from "framer-motion";

export default function LoadingWave() {
  const path = `
    M0 50 L15 50 L25 20 L35 80 L45 50
    L60 50 L70 10 L80 90 L90 50
    L110 50 L120 40 L130 60 L140 50
    L160 50 L170 0 L180 100 L190 50
    L210 50 L220 35 L230 65 L240 50
    L260 50
  `;

  return (
    <svg width="260" height="120" viewBox="0 0 260 120">
      <motion.path
        d={path}
        stroke="#2ec3f5"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2.5, repeat: Infinity }}
      />
    </svg>
  );
}
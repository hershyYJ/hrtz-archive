import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import type { Member } from "../data/members";

export default function LPCard({
  member,
  isActive,
  setActiveId,
}: {
  member: Member;
  isActive: boolean;
  setActiveId: (id: string | null) => void;
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    setActiveId(member.id);

    setTimeout(() => {
      navigate(`/playlist/${member.id}`);
    }, 2200);
  };

  return (
    <div
      onClick={handleClick}
      className="relative w-[180px] h-[180px] cursor-pointer mx-auto group"
    >

      <motion.div
        className="absolute inset-0 rounded-xl overflow-hidden shadow-xl z-20"
        animate={{ x: isActive ? -10 : 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={member.image}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {!isActive && (
        <div className="absolute inset-0 bg-black/20 rounded-xl z-30" />
      )}

      <motion.div
        className="absolute top-1/2 left-0 w-[160px] h-[160px] rounded-full shadow-2xl z-10 overflow-hidden"
        style={{
          background:
            "radial-gradient(circle at 40% 40%, rgba(255,255,255,0.08), transparent 50%), #000",
        }}
        initial={false}
        animate={{
          x: isActive ? 140 : 0,
          y: -80,
          scale: isActive ? 1 : 0.9,
          rotate: isActive ? 360 : 0,
        }}
        transition={{
          duration: 1.2,
          ease: [0.25, 1, 0.5, 1],
          rotate: {
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >

        <div className="absolute inset-0 rounded-full">
          <div className="absolute inset-2 rounded-full border border-white/5" />
          <div className="absolute inset-5 rounded-full border border-white/5" />
          <div className="absolute inset-8 rounded-full border border-white/5" />
          <div className="absolute inset-11 rounded-full border border-white/5" />
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-10 h-10 rounded-full border border-white/20 shadow-inner"
            style={{
              background: `
                radial-gradient(
                  circle at 30% 30%,
                  white,
                  ${member.color} 45%,
                  ${member.color} 100%
                )
              `,
            }}
          />
          
          <div
            className="absolute w-1.5 h-1.5 rounded-full"
            style={{
              background: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.9), rgba(255,255,255,0.4) 40%, rgba(0,0,0,0.05) 70%)",
              boxShadow: "inset 0 0 2px rgba(0,0,0,0.2)",
            }}
          />
        </div>

      </motion.div>

      <div
        className="absolute inset-0 rounded-full blur-xl scale-110 transition-opacity duration-500 z-0"
        style={{
          backgroundColor: member.color,
          opacity: isActive ? 0.35 : 0.1,
        }}
      />

      <div className="absolute -bottom-6 w-full text-center z-40">
        <p className="text-xs tracking-[0.3em] text-gray-500">
          {member.name}
        </p>
      </div>

    </div>
  );
}
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logoWorld.webp";
import worldMap from "../assets/world_map_hd.png";

export default function Home() {
  const [name, setName] = useState("");
  const [mode, setMode] = useState("classic");
  const navigate = useNavigate();

  const startQuiz = () => {
    navigate("/quiz", { state: { name, mode } });
  };

  return (
    <div className="min-h-screen bg-[#EAA568] flex flex-col items-center px-8 md:px-16 pt-6 pb-8 relative overflow-hidden">
      {/* Fond carte du monde */}
      <img
        src={worldMap}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-15 pointer-events-none"
      />

      {/* Logo */}
      <div className="flex items-center gap-3 self-start mb-8 z-10">
        <img src={logo} alt="Map or Trap" className="h-16 animate-spin" />
        <h1
          className="text-white text-4xl uppercase leading-none"
          style={{ fontFamily: "'Fredoka'", letterSpacing: "-1px" }}
        >
          Map or
          <br />
          Trap !
        </h1>
      </div>

      {/* Carte START */}
      <div className="bg-[#FFF8F0] rounded-2xl px-10 py-16 w-full max-w-5xl mb-6 mt-auto z-10">
        <p
          className="text-[#1B2A4A] mb-14 text-lg"
          style={{
            fontFamily: "'Fredoka'",
            letterSpacing: "-1px",
            fontSize: "28px",
          }}
        >
          Think you know the world? Four choices. Only one is right. Don't get
          trapped !
        </p>

        {/* Boutons mode */}
        <div className="grid grid-cols-2 gap-3 z-10">
          <button
            onClick={() => setMode("classic")}
            className={`rounded-xl p-4 text-center border-2 hover:scale-105 hover:bg-[#EAA568] hover:text-white hover:border-white transition-all duration-300 cursor-pointer ${
              mode === "classic"
                ? "bg-[#EAA568] border-white text-white"
                : "bg-white border-[#EAA568] text-[#EAA568]"
            }`}
          >
            <div className="font-bold" style={{ fontSize: "22px" }}>
              Classic
            </div>
            <div className="text-xs mt-1 opacity-80">
              No pressure, take your time
            </div>
          </button>

          <button
            onClick={() => setMode("timerush")}
            className={`rounded-xl p-4 text-center border-2 hover:scale-105 hover:bg-[#EAA568] hover:text-white hover:border-white transition-all duration-300 cursor-pointer ${
              mode === "timerush"
                ? "bg-[#EAA568] border-white text-white"
                : "bg-white border-[#EAA568] text-[#EAA568]"
            }`}
          >
            <div
              className="font-bold flex items-center justify-center gap-2"
              style={{ fontSize: "22px" }}
            >
              ⏱ Time Rush
            </div>
            <div className="text-xs mt-1 opacity-80">
              30 seconds per question
            </div>
          </button>
        </div>
      </div>
      {/* Champ pseudo */}
      <input
        type="text"
        placeholder="Enter your name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full max-w-5xl p-4 rounded-xl border-2 border-white/50 bg-white/15 text-white placeholder-white/60 font-medium mb-4 outline-none z-10"
      />

      {/* Bouton Start */}
      <button
        onClick={startQuiz}
        className="w-full max-w-5xl p-4 rounded-xl bg-[#1B2A4A] text-white font-bold text-xl uppercase tracking-wider mb-6 z-10 hover:bg-[black] hover:scale-105 transition-all duration-300 cursor-pointer"
      >
        Start !
      </button>

      {/* Compteurs */}
      <div className="flex gap-6 mb-auto z-10">
        <div className="bg-white/20 rounded-xl px-6 py-3 text-center">
          <div className="text-white font-bold text-lg">150+</div>
          <div className="text-[#FFF8F0] text-xs">questions</div>
        </div>
        <div className="bg-white/20 rounded-xl px-6 py-3 text-center">
          <div className="text-white font-bold text-lg">6</div>
          <div className="text-[#FFF8F0] text-xs">continents</div>
        </div>
        <div className="bg-white/20 rounded-xl px-6 py-3 text-center">
          <div className="text-white font-bold text-lg">2</div>
          <div className="text-[#FFF8F0] text-xs">game modes</div>
        </div>
      </div>
    </div>
  );
}

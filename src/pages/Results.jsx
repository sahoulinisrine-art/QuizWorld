import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logoWorld.webp";
import worldMap from "../assets/world_map_hd.png";

export default function Results() {
  const location = useLocation();
  const navigate = useNavigate();

  const name = location.state.name;
  const score = location.state.score;
  const total = location.state.total;
  const mode = location.state.mode;

  // Calculer le pourcentage
  const percentage = Math.round((score / total) * 100);

  // Choisir le message selon le score
  function getMessage() {
    if (percentage >= 80) {
      return "Amazing, " + name + " !";
    } else if (percentage >= 50) {
      return "Well played, " + name + " !";
    } else {
      return "Keep trying, " + name + " !";
    }
  }
  // =================================================================
  // Rejouer
  function playAgain() {
    navigate("/quiz", { state: { name: name, mode: mode } });
  }

  // =================================================================
  // Retour accueil
  function goHome() {
    navigate("/");
  }
  // =================================================================
  // HEADER
  return (
    <div className="min-h-screen bg-[#EAA568] flex flex-col items-center justify-center px-8 md:px-16 py-8 relative overflow-hidden">
          <img
            src={worldMap}
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-15 pointer-events-none"
          />
      {/* Logo */}
      <div className="flex items-center gap-3 mb-8 z-10">
        <img src={logo} alt="Map or Trap" className="h-12 animate-spin-slow" />
        <h1
          className="text-white uppercase leading-none"
          style={{
            fontFamily: "'Fredoka'",
            letterSpacing: "-1px",
            fontSize: "28px",
          }}
        >
          Map or
          <br />
          Trap !
        </h1>
      </div>
      {/*// ================================================================= */}
      {/* Carte Game Over */}
      <div className="bg-[#FFF8F0] rounded-2xl px-10 py-8 w-full max-w-4xl mb-6 text-center z-10">
        <p className="text-[#EAA568] font-bold text-sm uppercase tracking-wider mb-2">
          Game Over
        </p>
        <p className="text-[#1B2A4A] font-bold text-2xl mb-1">{getMessage()}</p>
        <p className="text-[#B07840] text-sm">Here are your results</p>
      </div>

      {/*// ================================================================= */}

      {/* Score cercle */}
      <div className="bg-[#FFF8F0] rounded-2xl px-10 py-8 w-full max-w-4xl mb-6 text-center z-10">
        <div className="w-32 h-32 rounded-full bg-[#1B2A4A] flex flex-col items-center justify-center mx-auto mb-6">
          <span className="text-white text-4xl font-bold">{score}</span>
          <span className="text-[#EAA568] font-bold">/ {total}</span>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
          <div className="bg-green-100 border-2 border-green-500 rounded-xl p-4 text-center">
            <div className="text-green-700 text-2xl font-bold">{score}</div>
            <div className="text-green-700 text-sm">Correct</div>
          </div>
          <div className="bg-red-100 border-2 border-red-500 rounded-xl p-4 text-center">
            <div className="text-red-700 text-2xl font-bold">
              {total - score}
            </div>
            <div className="text-red-700 text-sm">Wrong</div>
          </div>
        </div>
        {/* AJOUTER LES MAUVAISES REPONSES LISTES APRES*/}
      </div>

      {/*// ================================================================= */}
      {/* Boutons */}
      <div className="grid grid-cols-2 gap-4 w-full max-w-4xl z-10">
        <button
          onClick={playAgain}
          className="p-4 rounded-xl bg-[#1B2A4A] text-white font-bold text-xl uppercase tracking-wider hover:bg-[#2a3f6a] hover:scale-105 transition-all duration-300 cursor-pointer"
        >
          Play again
        </button>
        <button
          onClick={goHome}
          className="p-4 rounded-xl bg-white/20 border-2 border-white text-white font-bold text-xl uppercase tracking-wider hover:bg-white/30 hover:scale-105 transition-all duration-300 cursor-pointer"
        >
          Home
        </button>
      </div>
      {/*// ================================================================= */}
    </div>
  );
}

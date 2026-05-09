import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logoWorld.webp";

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
}
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
}
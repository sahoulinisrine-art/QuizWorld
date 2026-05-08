import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"; 
  // useLocation: récupère les données envoyées depuis la page précédente (le name et le mode qu'on a envoyé avec navigate dans Home.jsx)
import logo from "../assets/logoWorld.webp";

function Quiz() {
 //=======================================================================================
  const location = useLocation();
  const navigate = useNavigate();
  // fonction qui permet de rediriger vers une autre page pareil de home à quiz
  const name = location.state.name;
  const mode = location.state.mode;
  // Home.jsx on a fait navigate("/quiz", { state: { name, mode } }) 

  const [questions, setQuestions] = useState([]);
    // -> array avec 10 q. Vide au début [], se remplit quand l'API répond.
  const [current, setCurrent] = useState(0);
    // ->  numéro de la question actuelle
  const [score, setScore] = useState(0);
    // -> bonnes réponses; +1 
  const [selected, setSelected] = useState(null);
    // -> quelle réponse joueur a cliqué. null = il a pas encore cliqué.
  const [showFeedback, setShowFeedback] = useState(false);
    // -> show vert/rouge? false = pas encore répondu vs true = montre résultat.
 //=======================================================================================

  // Récupérer les questions depuis l'API
  useEffect(function () { // quand la page charge, exécute le code
    fetch("http://localhost:8080/questions.php") // va chercher les questions sur API PHP. 
      .then(function (res) {
        return res.json(); // réponse de PHP arrive en texte brut, res.json() la transforme en tableau JS.
      })
      .then(function (data) {
        setQuestions(data); // data = [] de 10 questions. On le met dans questions avec setQuestions.
      });
  }, []); // [] = une seule fois, au chargement

     // => À partir de là, le quiz peut commencer.
 //=======================================================================================
  // Quand le joueur clique sur une réponse
  function clickAnswer(answer) {
    setSelected(answer); // on sauvegarde quelle réponse le joueur a cliqué
    setShowFeedback(true); // montre le vert/rouge mtn
    if (answer === questions[current].correct) { // questions[current] = ex: questions[0] = 1ère question et .correct c'est la bonne réponse
      setScore(score + 1);
    }
  }
 //=======================================================================================
  // Passer à la question suivante ou page results si dépasse 10
  function goNext() {
    if (current + 1 >= questions.length) {
      navigate("/results", {
        state: {
          name: name,
          score: score,
          total: questions.length,
          mode: mode,
        },
      });
    } else {
      setCurrent(current + 1); // passe à la question suivante
      setSelected(null);  // on efface la réponse sélectionnée 
      setShowFeedback(false); // on cache le vert/rouge pour la prochaine question
    }
  }
 //=======================================================================================
  // Si les questions sont pas encore chargées
  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-[#EAA568] flex items-center justify-center">
        <p className="text-white text-2xl font-bold">Loading questions...</p>
      </div>
    );
  }
  
 //=======================================================================================
  // La question actuelle
  const q = questions[current];

  // Choisir la couleur du bouton réponse
  function getButtonStyle(answer) {
    if (!showFeedback) {
      return "bg-white border-2 border-[#EAA568] text-[#1B2A4A]";
    }
    if (answer === q.correct) {
      return "bg-green-500 border-2 border-green-600 text-white";
    }
    if (answer === selected && answer !== q.correct) {
      return "bg-red-500 border-2 border-red-600 text-white";
    }
    return "bg-white border-2 border-gray-200 text-gray-400";
  }

  const letters = ["A", "B", "C", "D"];

  return (
    <div className="min-h-screen bg-[#EAA568] flex flex-col items-center px-8 md:px-16 pt-6 pb-8 relative overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between w-full max-w-4xl mb-4 z-10">
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Map or Trap"
            className="h-15 animate-spin-slow"
          />
          <span
            className="text-white font-bold text-lg uppercase"
            style={{ fontFamily: "'Fredoka'" }}
          >
                    <h1
          className="text-white text-4xl uppercase leading-none"
          style={{ fontFamily: "'Fredoka'", letterSpacing: "-1px", fontSize:"28px"}}
        >
          Map or
          <br />
          Trap !
        </h1>
          </span>
        </div>
      </div>

      {/* Barre de progression */}
      <div className="flex items-center gap-3 w-full max-w-4xl mb-6 z-10">
        <div className="flex-1 h-3 bg-white/25 rounded-full overflow-hidden">
          <div
            className="h-full bg-white rounded-full"
            style={{ width: ((current + 1) / questions.length) * 100 + "%" }}
          ></div>
        </div>
        <span className="text-white font-bold">
          {current + 1}/{questions.length}
        </span>
      </div>

      {/* Question */}
      <div className="bg-[#FFF8F0] rounded-2xl px-10 py-8 w-full max-w-4xl mb-6 z-10">
        <p className="text-[#EAA568] font-bold text-sm uppercase tracking-wider mb-2">
          {q.type}
        </p>
        <p className="text-[#1B2A4A] font-bold text-xl">{q.question}</p>

        {q.type === "flag" && (
          <img
            src={"https://flagcdn.com/w320/" + q.flag + ".png"}
            alt="flag"
            className="h-24 mt-4 rounded-lg shadow"
          />
        )}
      </div>

      {/* Les 4 réponses */}
      <div className="grid grid-cols-2 gap-4 w-full max-w-4xl mb-6 z-10">
        {q.answers.map(function (answer, i) {
          return (
            <button
              key={i}
              onClick={function () {
                if (!showFeedback) {
                  clickAnswer(answer);
                }
              }}
              className={
                "rounded-xl p-4 text-center font-bold text-lg cursor-pointer hover:scale-105 transition-all duration-300 " +
                getButtonStyle(answer)
              }
            >
              <span className="text-sm font-semibold opacity-60">
                {letters[i]}
              </span>
              <div>{answer}</div>
            </button>
          );
        })}
      </div>

      {/* Feedback */}
      {showFeedback && (
        <div
          className={
            "w-full max-w-4xl rounded-xl p-4 mb-4 text-center font-bold z-10 " +
            (selected === q.correct
              ? "bg-green-100 border-2 border-green-500 text-green-700"
              : "bg-red-100 border-2 border-red-500 text-red-700")
          }
        >
          {selected === q.correct
            ? "✅ Correct !"
            : "❌ Wrong ! The answer was " + q.correct}
        </div>
      )}

      {/* Bouton Next */}
      {showFeedback && (
        <button
          onClick={goNext}
          className="w-full max-w-4xl p-4 rounded-xl bg-[#1B2A4A] text-white font-bold text-xl uppercase tracking-wider z-10 hover:bg-[#2a3f6a] hover:scale-105 transition-all duration-300 cursor-pointer"
        >
          {current + 1 >= questions.length ? "See results" : "Next question →"}
        </button>
      )}
    </div>
  );
}

export default Quiz;

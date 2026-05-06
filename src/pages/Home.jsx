import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logoWorld.webp";
import chrono from "../assets/chrono.png";

export default function Home() {
  const [name, setName] = useState("");
  const [mode, setMode] = useState("classic");
  const navigate = useNavigate();

  const startQuiz = () => {
  navigate("/quiz", { state: { name, mode } });
};

  return (
    <div className="min-h-screen bg-[#EAA568] flex flex-col items-center justify-center px-8 md:px-16 py-8">

      {/* Logo */}
      <div className="flex items-center gap-3 self-start mb-8">
        <img src={logo} alt="Map or Trap" className="h-16" />
        <h1 className="text-white font-extrabold text-2xl uppercase leading-tight">
          Map or
          <br />
          Trap !
        </h1>
      </div>

    {/* Carte START */}
      <div className="bg-[#FFF8F0] rounded-2xl p-6 w-full max-w-2xl mb-6">
        <p className="text-[#5C3A1E] mb-4">
          Think you know the world? Four choices. Only one is right. Don't get
          trapped !
        </p>

 </div>
);

}
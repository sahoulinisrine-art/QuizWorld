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

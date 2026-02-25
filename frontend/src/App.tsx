import { BrowserRouter, Routes, Route } from "react-router-dom";
import TitleScreen from "./components/TitleScreen";
import InstructionsScreen from "./components/InstructionsScreen";
import GameScreen from "./components/GameScreen";
import GuessScreen from "./components/GuessScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TitleScreen />} />
        <Route path="/instructions" element={<InstructionsScreen />} />
        <Route path="/game" element={<GameScreen />} />
        <Route path="/guess" element={<GuessScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
import { useNavigate } from "react-router-dom";

export default function InstructionsScreen() {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Instructions</h1>
            <button onClick={() => navigate("/game")}>Start Game</button>
        </div>
    )
}
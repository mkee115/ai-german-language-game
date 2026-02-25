import { useNavigate } from "react-router-dom";

export default function GameScreen() {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Game Screen</h1>
            <button onClick={() => navigate("/guess")}>Go to Guess Screen</button>
        </div>
    )
}
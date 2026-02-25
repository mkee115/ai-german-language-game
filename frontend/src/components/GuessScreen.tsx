import { useNavigate } from "react-router-dom";

export default function GuessScreen() {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Guess Screen</h1>
            <button onClick={() => navigate("/")}>Back to Title Screen</button>
        </div>
    )
}

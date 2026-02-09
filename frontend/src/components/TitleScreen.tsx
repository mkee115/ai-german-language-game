import familyTreeImage from '../assets/family-tree-blurred.png';

export default function TitleScreen() {
    return (
        <div style={{
            backgroundImage: `url(${familyTreeImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "100vw",
            margin: 0,
            padding: 0,
            textAlign: "center",
            fontFamily: "VT323, monospace",
        }}>
            <h1 style={{ fontSize: "80px", marginBottom: "40px", textShadow: "2px 2px 0 black, -2px -2px 0 black, 2px -2px 0 black, -2px 2px 0 black" }}>Welcome to the AI German Language Game!</h1>
            <p style={{ fontSize: "45px", marginTop: "0", marginBottom: "70px", textShadow: "2px 2px 0 black, -2px -2px 0 black, 2px -2px 0 black, -2px 2px 0 black" }}>Click "Start" to begin your language learning adventure.</p>
            <button
                style={{
                    padding: "10px 20px",
                    fontSize: "40px",
                    borderRadius: "0",
                    backgroundColor: "#405138",
                    color: "white",
                    border: "2px solid #ffffff",
                    cursor: "pointer",
                    textShadow: "2px 2px 0 black, -2px -2px 0 black, 2px -2px 0 black, -2px 2px 0 black",
                }}
                onClick={() => {
                    window.location.href = "/chat";
                }}
            >
                Start
            </button>
        </div>
    );
}
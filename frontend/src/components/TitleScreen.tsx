export default function TitleScreen() {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "100vw",
            margin: 0,
            padding: 0,
            textAlign: "center",
            fontFamily: "Arial, sans-serif"
        }}>
            <h1>Welcome to the AI German Language Game!</h1>
            <p>Click "Start" to begin your language learning adventure.</p>
            <button
                style={{
                    padding: "10px 20px",
                    fontSize: "16px",
                    borderRadius: "5px",
                    backgroundColor: "#a674a1",
                    color: "white",
                    border: "none",
                    cursor: "pointer",
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
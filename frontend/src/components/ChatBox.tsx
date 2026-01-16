import {useState} from 'react';
import {sendMessage} from '../services/api';
import type {Role} from '../services/api';

type Message = {
    sender: 'user' | 'ai';
    text: string;
}

export default function ChatBox() {
    const [npcMessages, setNpcMessages] = useState<Message[]>([]);
    const [tutorMessages, setTutorMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [role, setRole] = useState<Role>('npc_family');

    const currentMessages = role === 'npc_family' ? npcMessages : tutorMessages;
    const setCurrentMessages = role === 'npc_family' ? setNpcMessages : setTutorMessages;

    async function handleSend() {
        if (input.trim() === "") return;

        const userMessage: Message = { sender: 'user', text: input };
        setCurrentMessages((prev) => [...prev, userMessage]);
        setInput("");

        const reply = await sendMessage(input, role);
        const aiMessage: Message = { sender: 'ai', text: reply };

        setCurrentMessages((prev) => [...prev, aiMessage]);
    }

    return (
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
            <h2> Family Gathering</h2>

            <select value={role} onChange={(e) => setRole(e.target.value as Role)}>
                <option value="npc_family">Family NPC</option>
                <option value="tutor">Tutor</option>
            </select>

            <div style={{ border: "1px solid #ccc", padding: 10, minHeight: 200, maxHeight: 200, overflowY: "scroll", backgroundColor: "white", borderRadius: 10 }}>
                {currentMessages.map((msg, index) => (
                    <p key={index}
                       style={{ color: msg.sender === 'user' ? '#7d0060' : '#00414f' }}>
                        <strong>{msg.sender}:</strong> {msg.text}
                    </p>
                ))}
            </div>

            <input style={{
                verticalAlign: "top", 
                padding: 12, 
                marginTop: 8, 
                borderRadius: 10,  
                border: "1px solid #ccc" 
            }}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        handleSend();
                    }
                }}
                placeholder='Type in German'
                />

            <button style={{
                verticalAlign: "top", 
                height: 40, 
                padding: 10, 
                marginLeft: 8, 
                marginTop: 8, 
                backgroundColor: '#7d0060', 
                color: 'white', 
                border: 'none', 
                fontSize: 15, 
                borderRadius: 10 
            }}
            onClick={handleSend}>Send</button>
        </div>
    );
}
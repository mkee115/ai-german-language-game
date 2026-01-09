import {useState} from 'react';
import {sendMessage} from '../services/api';
import type {Role} from '../services/api';

type Message = {
    sender: 'user' | 'ai';
    text: string;
}

export default function ChatBox() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [role, setRole] = useState<Role>('npc_family');

    async function handleSend() {
        if (input.trim() === "") return;

        const userMessage: Message = { sender: 'user', text: input };
        setMessages((prev) => [...prev, userMessage]);
        setInput("");

        const reply = await sendMessage(input, role);
        const aiMessage: Message = { sender: 'ai', text: reply };

        setMessages((prev) => [...prev, aiMessage]);
    }

    return (
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
            <h2> Family Gathering</h2>

            <select value={role} onChange={(e) => setRole(e.target.value as Role)}>
                <option value="npc_family">Family NPC</option>
                <option value="tutor">Tutor</option>
            </select>

            <div style={{ border: "1px solid #ccc", padding: 10, minHeight: 200}}>
                {messages.map((msg, index) => (
                    <p key={index}>
                        <strong>{msg.sender}:</strong> {msg.text}
                    </p>
                ))}
            </div>

            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder='Type in German'
                />
            <button onClick={handleSend}>Send</button>
        </div>
    );
}
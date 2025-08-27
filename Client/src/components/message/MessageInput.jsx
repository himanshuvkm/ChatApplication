import { Send } from "lucide-react";
import { useState } from "react";
import useSendMessage from "../../Hooks/useSendMessage";

const MessageInput = () => {
    const [message, setMessage] = useState("");
    const { loading, sendMessage } = useSendMessage();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!message.trim()) return; // ✅ Better: check for empty/whitespace
        await sendMessage(message);
        setMessage("");
    };

    return (
        <form className="px-4 my-3" onSubmit={handleSubmit}>
            <div className="w-full relative">
                <input
                    type="text"
                    className="border text-sm rounded-lg block w-full p-2.5 pr-10 bg-gray-700 border-gray-600 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="Send a message"
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)} 
                    disabled={loading} 
                />
                <button
                    type="submit"
                    className="absolute inset-y-0 right-2 flex items-center text-white hover:text-blue-400 disabled:opacity-50"
                    disabled={loading || !message.trim()} 
                >
                    <Send size={20} />
                </button>
            </div>
        </form>
    );
};

export default MessageInput;

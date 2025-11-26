import { Send } from "lucide-react";
import { useState } from "react";
import useSendMessage from "../../Hooks/useSendMessage";

const MessageInput = () => {
    const [message, setMessage] = useState("");
    const { loading, sendMessage } = useSendMessage();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!message.trim()) return;
        await sendMessage(message);
        setMessage("");
    };

    return (
        <form className="px-5 py-4 bg-white border-t border-gray-200" onSubmit={handleSubmit}>
            <div className="w-full relative">
                <input
                    type="text"
                    className="border text-sm rounded-full block w-full pl-4 pr-12 py-3 bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none transition-all"
                    placeholder="Type a message..."
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)} 
                    disabled={loading} 
                />
                <button
                    type="submit"
                    className="absolute inset-y-0 right-2 flex items-center justify-center w-9 h-9 my-auto text-gray-400 hover:text-blue-500 disabled:opacity-40 disabled:hover:text-gray-400 transition-colors"
                    disabled={loading || !message.trim()} 
                >
                    <Send size={18} />
                </button>
            </div>
        </form>
    );
};

export default MessageInput;
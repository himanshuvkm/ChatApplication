import { toast } from "react-hot-toast";
import { useState } from "react";
import useConverstation from "../zustand/useconversation";

const useSendMessage = () => {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation } = useConverstation();

    const sendMessage = async (message) => {
        if (!selectedConversation) return;
        
        setLoading(true);
        try {
            const res = await fetch(`/api/message/send/${selectedConversation._id}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    message,
                }),
            });
            
            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }
            
            setMessages([...messages, data.data]); 
        } catch (error) {
            toast.error("Error sending message: " + error.message); 
        } finally {
            setLoading(false);
        }
    };

    return { sendMessage, loading };
};

export default useSendMessage;


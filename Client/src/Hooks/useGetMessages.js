import { useState, useEffect } from "react";
import useConverstation from "../zustand/useconversation";
import { toast } from "react-hot-toast";

const useGetMessages = () => {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation } = useConverstation();

    useEffect(() => {
        const getMessages = async () => {
            if (!selectedConversation?._id) return;
            setLoading(true);
            try {
                const res = await fetch(`/api/message/${selectedConversation._id}`);
                const data = await res.json();
                if (data.error) {
                    throw new Error(data.error);
                }
                setMessages(data.data);
            } catch (error) {
                toast.error("Error fetching messages: " + error.message);
            } finally {
                setLoading(false);
            }
        };
        getMessages();
    }, [selectedConversation?._id, setMessages]);

    return { messages, loading };
};

export default useGetMessages;

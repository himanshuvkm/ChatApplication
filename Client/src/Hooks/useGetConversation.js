import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const useGetConversations = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const getConversations = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/users");
        const data = await response.json();
        if (data.error) {
          console.error("Error fetching conversations:", data.error);
        } else {
          setConversations(data.data);
        }
      } catch (error) {
        toast.error("Error fetching conversations: " + error.message); 
      } finally {
        setLoading(false);
      }
    };
    getConversations();
  }, []);
  
  return { loading, conversations };
};

export default useGetConversations;

import { useEffect } from 'react';
import { useSocketContext } from '../context/socketContext';
import useConversation from '../zustand/useconversation';
import notification from "../assets/notification.mp3";

const useListenMessages = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useConversation();

  useEffect(() => {
    if (!socket) return; // Guard clause to prevent errors if socket is null/undefined

    const handleNewMessage = (newMessage) => {
        newMessage.shouldShake = true;
        const audio = new Audio(notification);
        audio.play();
        setMessages([...messages, newMessage]);
    };

    socket.on('newMessage', handleNewMessage);

    return () => {
      socket.off('newMessage', handleNewMessage);
    };
  }, [socket, messages, setMessages]);

  return null; // Optional: Hook doesn't need to return anything
};

export default useListenMessages;
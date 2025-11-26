import { useRef } from "react";
import useGetMessages from "../../Hooks/useGetMessages";
import MessageSkeleton from "../Skeleton/MessageSkeleton";
import Message from "./message";
import { useEffect } from "react";
import useListenMessage from "../../Hooks/useListenMessage";

const Messages = () => {
  const { messages = [], loading } = useGetMessages(); 
  useListenMessage();
  const lastImageRef = useRef()

  useEffect(() => {
    if (lastImageRef.current) {
      lastImageRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  return (
    <div className="px-5 py-4 flex-1 overflow-auto bg-gray-50">
      {loading &&
        [...Array(3)].map((_, index) => (
          <MessageSkeleton key={index} />
        ))}

      {!loading && messages.length > 0 &&
        messages.map((message, idx) => (
          <div ref={idx === messages.length - 1 ? lastImageRef : null} key={message._id}>
            <Message message={message} />
          </div>
        ))}

      {!loading && messages.length === 0 && (
        <div className="flex items-center justify-center h-full">
          <p className="text-gray-400 text-sm text-center">
            No messages yet. Start the conversation!
          </p>
        </div>
      )}
    </div>
  );
};

export default Messages;
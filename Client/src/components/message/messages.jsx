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
    <div className="px-4 flex-1 overflow-auto">
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
        <p className="text-gray-300 text-center mt-4 font-medium tracking-wide ">
  No chats yet? Spark the conversation! 🚀
</p>
      )}
    </div>
  );
};

export default Messages;

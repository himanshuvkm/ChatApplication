import { useSocketContext } from "../../context/socketContext";
import useConverstation from "../../zustand/useconversation";

const Conversation = ({ conversation, emoji, lastidx }) => {
  const { onlineUsers } = useSocketContext();
  const { selectedConversation, setSelectedConversation } = useConverstation();

  const isSelected = selectedConversation?._id === conversation._id;
  const isOnline = onlineUsers.includes(conversation._id);

  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer
				${isSelected ? "bg-sky-500" : ""}`}
        onClick={() => setSelectedConversation(conversation)}
      >
        
          <div className={`avatar ${isOnline ? "avatar-online" : "avatar-offline"}`}>
            <div className="w-12 rounded-full">
              <img src={conversation.profilePic} />
            </div>
          </div>
        

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">{conversation.fullName}</p>
            <span className="text-xl">{emoji}</span>
          </div>
        </div>
      </div>
      {!lastidx && <div className="divider my-0 py-0 h-1" />}
    </>
  );
};
export default Conversation;

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
        className={`flex gap-3 items-center px-4 py-3 cursor-pointer transition-colors ${
          isSelected ? "bg-blue-50 border-l-4 border-blue-500" : "hover:bg-gray-50"
        }`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className="relative flex-shrink-0">
          <div className="w-11 h-11 rounded-full overflow-hidden">
            <img src={conversation.profilePic} alt="" className="w-full h-full object-cover" />
          </div>
          {isOnline && (
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
          )}
        </div>

        <div className="flex flex-col flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <p className={`font-semibold text-sm truncate ${isSelected ? "text-gray-900" : "text-gray-700"}`}>
              {conversation.fullName}
            </p>
            <span className="text-base flex-shrink-0">{emoji}</span>
          </div>
        </div>
      </div>
      {!lastidx && <div className="h-px bg-gray-100 mx-4" />}
    </>
  );
};

export default Conversation;
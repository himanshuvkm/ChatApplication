import { useAuthContext } from "../../context/AuthContetx";
import useConverstation from "../../zustand/useconversation";
import useListenMessages from "../../Hooks/useListenMessage";

const Message = ({ message }) => {
    const { authUser } = useAuthContext();
    const { selectedConversation } = useConverstation();
    const fromMe = message.senderId === authUser._id;
    const chatClassName = fromMe ? "chat chat-end" : "chat chat-start";
    const profilePic = fromMe ? authUser.profilePic : selectedConversation.profilePic;
    const bubblebgcolor = fromMe ? "bg-blue-500" : "bg-gray-300";
    const time = new Date(message.updatedAt).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  })
   const shakeClass = message.shouldShake ? "shake" : "";

    return (
        <div>
            <div className={chatClassName}>
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img
                            alt=""
                            src={profilePic}
                        />
                    </div>
                </div>
                <div className="chat-header">
                   {/* <span>{fromMe ? authUser.fullName : selectedConversation.fullName}</span> */}
                </div>
                <div className={`chat-bubble ${bubblebgcolor} ${shakeClass}`}>{message.message}</div>
                <time className="text-xs opacity-50">{time}</time>
                <div className="chat-footer opacity-50">Delivered</div>
            </div>
        </div>
    );
};
export default Message;


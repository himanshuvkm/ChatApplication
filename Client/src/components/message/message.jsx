import { useAuthContext } from "../../context/AuthContetx";
import useConverstation from "../../zustand/useconversation";

const Message = ({ message }) => {
    const { authUser } = useAuthContext();
    const { selectedConversation } = useConverstation();
    const fromMe = message.senderId === authUser._id;
    const chatClassName = fromMe ? "chat chat-end" : "chat chat-start";
    const profilePic = fromMe ? authUser.profilePic : selectedConversation.profilePic;
    const bubblebgcolor = fromMe ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-900";
    const time = new Date(message.updatedAt).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
    });
    const shakeClass = message.shouldShake ? "shake" : "";

    return (
        <div className={`flex ${fromMe ? 'justify-end' : 'justify-start'} mb-4`}>
            <div className={`flex items-end gap-2 max-w-[70%] ${fromMe ? 'flex-row-reverse' : 'flex-row'}`}>
                {/* Avatar */}
                <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                    <img
                        alt=""
                        src={profilePic}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Message Content */}
                <div className={`flex flex-col ${fromMe ? 'items-end' : 'items-start'}`}>
                    {/* Name */}
                    <span className="text-xs text-gray-500 font-medium mb-1 px-3">
                        {fromMe ? authUser.fullName : selectedConversation.fullName}
                    </span>
                    
                    {/* Message Bubble */}
                    <div className={`${bubblebgcolor} ${shakeClass} px-4 py-2.5 rounded-2xl shadow-sm ${fromMe ? 'rounded-br-sm' : 'rounded-bl-sm'}`}>
                        <p className="text-sm leading-relaxed">{message.message}</p>
                    </div>
                    
                    {/* Time & Status */}
                    <div className="flex items-center gap-2 mt-1 px-3">
                        <time className="text-xs text-gray-400">{time}</time>
                        <span className="text-xs text-gray-400">·</span>
                        <span className="text-xs text-gray-400">Delivered</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Message;
import { Mails } from "lucide-react";
import MessageInput from "./MessageInput";
import Messages from "./messages";
import useConversation from "../../zustand/useconversation"
import { useEffect, useContext } from "react";
import { AuthContext } from "../../context/AuthContetx";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  useEffect(() => {
    return () => {
      setSelectedConversation(null);
    };
  }, [setSelectedConversation]);
  
  return (
    <div className="md:min-w-[450px] flex flex-col h-full">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Header */}
          <div className="bg-white border-b border-gray-200 px-5 py-3.5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 font-medium text-sm">
                {selectedConversation?.fullName?.charAt(0).toUpperCase()}
              </div>
              <div>
                <div className="text-xs text-gray-500 font-medium">To:</div>
                <div className="text-gray-900 font-semibold">{selectedConversation?.fullName}</div>
              </div>
            </div>
          </div>

          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

const NoChatSelected = () => {
  const { authUser } = useContext(AuthContext);
  return (
    <div className="flex items-center justify-center w-full h-full bg-gray-50">
      <div className="text-center flex flex-col items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
          <Mails className="w-7 h-7 text-gray-400" />
        </div>
        <div className="space-y-1">
          <p className="text-lg text-gray-900 font-medium">
            Welcome, {authUser?.fullName}
          </p>
          <p className="text-sm text-gray-500">
            Select a conversation to start messaging
          </p>
        </div>
      </div>
    </div>
  );
};

export default MessageContainer;
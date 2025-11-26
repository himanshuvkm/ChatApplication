import React from "react";
import useGetConversations from "../../Hooks/useGetConversation";
import Conversation from "./conversation";
import { getRandomEmoji } from "../../utils/emoji";

const Conversations = () => {
    const { loading, conversations } = useGetConversations();
    
    return (
        <div className='py-2 flex flex-col overflow-auto bg-white'>
            {!loading && conversations.map((conversation, index) => (
                <Conversation 
                    key={conversation._id}
                    conversation={conversation}
                    emoji={getRandomEmoji()}
                    lastidx={index === conversations.length - 1} 
                />
            ))}
            {loading && (
                <div className="flex items-center justify-center py-8">
                    <div className="w-6 h-6 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
                </div>
            )}
        </div>
    );
};

export default Conversations;
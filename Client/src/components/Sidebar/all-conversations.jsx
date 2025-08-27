import React from "react";
import useGetConversations from "../../Hooks/useGetConversation";
import Conversation from "./conversation";
import { getRandomEmoji } from "../../utils/emoji";

const Conversations = () => {
    const { loading, conversations } = useGetConversations();
    
    return (
        <div className='py-2 flex flex-col overflow-auto'>
            {!loading && conversations.map((conversation, index) => (
                <Conversation 
                    key={conversation._id}
                    conversation={conversation}
                    emoji={getRandomEmoji()}
                    lastidx={index === conversations.length - 1} 
                />
            ))}
            {loading && <span className="loading loading-spinner mx-auto"></span>}
        </div>
    );
};

export default Conversations;

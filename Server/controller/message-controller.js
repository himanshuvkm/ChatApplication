import Conversation from "../Models/conversation-model.js"
import Message from "../Models/mssg-model.js"
import { getReceiverSocketId, io } from "../Socket/socket.io.js";

export const sendMessage = async (req,res)=>{
    try {
        const {message} = req.body;
        const {id: receiverId} = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants:{ $all: [ senderId, receiverId] }
        });

        if(!conversation){
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
                messages: []
            });
        }
        const newMessage = await Message.create({
            senderId,receiverId,message
        })

        if(newMessage){
            conversation.messages.push(newMessage._id);
        }

        await Promise.all([conversation.save(), newMessage.save()])
        
        //This will run in parallel
        const receiverSocketId = getReceiverSocketId(receiverId);
        if (receiverSocketId) {
            io.to(receiverSocketId).emit("newMessage", newMessage);
        }

        res.status(201).json({ message: "Message sent successfully", data: newMessage });

    } catch (error) {
        console.log("Error in send message controller ", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

export const getMessage = async (req,res)=>{
    try {
        const{id: receiverId} = req.params;
        const senderId = req.user._id

        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] }
        }).populate("messages");

        if (!conversation) {
            return res.status(404).json({ message: "Conversation not found" });
        }

        res.status(200).json({ message: "Messages retrieved successfully", data: conversation.messages });
    } catch (error) {
        console.log("Error in get message controller ", error);
        res.status(500).json({ error: "Internal server error" });
    }
}
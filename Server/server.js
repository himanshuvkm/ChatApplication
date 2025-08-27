import express from "express";
import dotenv  from "dotenv";
import cookieParser from "cookie-parser";
import authRoute from "./Routes/auth-route.js"
import messageRoute from "./Routes/message-routes.js"
import connecttoDb from "./DB/connecttoDb.js";
import userRoute from "./Routes/user-route.js";
import {app,server} from "./Socket/socket.io.js"
dotenv.config()
// const app = express(); 


const Port = process.env.PORT

app.use(express.json())
app.use(cookieParser());

connecttoDb();
app.use('/api/auth', authRoute)
app.use('/api/message', messageRoute)
app.use('/api/users', userRoute)

app.get('/',(req,res)=>{
    res.send("Hello World")
})

server.listen(Port , ()=>{
    console.log(`Server is running on port ${Port}`);
})

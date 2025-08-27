import mongoose from "mongoose";
const connecttoDb = async () =>{
   try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MONGODB Successfully");
    
   } catch (error) {
    console.log("Error connecting to DB ",error);
   }
}
export default connecttoDb;
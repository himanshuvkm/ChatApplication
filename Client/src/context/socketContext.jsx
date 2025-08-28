import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { useAuthContext } from "./AuthContetx";
import { io } from "socket.io-client"; // Added import for io
import { useContext } from "react";

const SocketContext = createContext();

export const useSocketContext = () => {
  return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { authUser } = useAuthContext(); // Added parentheses to call useAuthContext

  useEffect(() => {
    if (authUser) {
      const newSocket = io("https://chatapplication-8385.onrender.com",{
        query: { userId: authUser._id }
      });
      setSocket(newSocket);

      newSocket.on("getOnlineUsers", (users) => {
        setOnlineUsers(users);
      });

      return () => {
        newSocket.close();
      };
    } else {
        if(socket){
            socket.close();
            setSocket(null);
        }
    }
  }, [authUser]); // Added authUser as a dependency to re-run effect when authUser changes

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>{children}</SocketContext.Provider>
  );
};

export default SocketContextProvider;

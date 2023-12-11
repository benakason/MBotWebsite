import { createContext } from "react";
import { useSocketIO, ReadyState } from 'react-use-websocket';

// Replace with your server URL
const targetIP = "ws://localhost:5050";

const SocketContext = createContext();

const SocketProvider = ({ children }) => {
  const socket = useSocketIO(targetIP);

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
};

export { SocketContext, SocketProvider };

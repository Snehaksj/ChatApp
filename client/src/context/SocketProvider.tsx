"use client";
import { error } from "console";
import React, { useCallback, useContext, useEffect } from "react";
import { io } from "socket.io-client";
interface SocketProviderProps {
  children?: React.ReactNode;
}
interface ISocketContext {
  sendMessage: (msg: string) => any;
}
const SocketContext = React.createContext<ISocketContext | null>(null);

export const useSocket = () => {
  const state = useContext(SocketContext);
  if (!state) throw new Error(`state is undefined`);
  return state;
};

export const SocketProvider: React.FC<SocketProviderProps> = ({ children }) => {
  const sendMessage: ISocketContext["sendMessage"] = useCallback(
    (msg: string) => {
      console.log("Send message", msg);
    },
    []
  );
  useEffect(() => {
    const _socket = io("http://localhost:5000");
    return () => {
      _socket.disconnect();
    };
  }, []);
  return (
    <SocketContext.Provider value={null}>{children}</SocketContext.Provider>
  );
};

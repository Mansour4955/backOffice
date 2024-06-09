import React, { useEffect, useRef, useState } from "react";
import logo from "../images/artificial-intelligence.png";
import { IoPersonCircleOutline } from "react-icons/io5";
import { chats } from "../data";
import { useParams } from "react-router-dom";
const Chat = () => {
  const { id } = useParams();
  const chat = chats.find((chat) => chat.id === parseInt(id));
  // const conversation = chat;
  const bottomRef = useRef(null);

  useEffect(() => {
    // Scroll to bottom when component mounts or updates
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="rounded-xl shadow-2xl w-full overflow-y-auto bg-white h-[75vh] max-h-[75vh]">
      {chat.messages.map((msg, index) => (
        <div
          key={index}
          className={
            "text-white text-left bg-transparent p-4 rounded max-w-[100%]"
          }
        >
          {msg.type === "user" ? (
            <p className="font-bold flex flex-col">
              <span className="flex gap-1 items-center text-blue-600">
                <IoPersonCircleOutline className="text-blue-600" size={30} /> {chat.user}
              </span>{" "}
              <span className="pl-2 flex flex-wrap text-gray-400">{msg.text}</span>
            </p>
          ) : (
            <p className="font-bold flex flex-col">
              <span className="flex gap-1 items-center text-blue-600">
                <img alt="logo" src={logo} className="w-9 h-9" />
                Azul AI
              </span>{" "}
              <span className="pl-2 flex flex-wrap text-gray-400">
              {msg.text}
              </span>
            </p>
          )}
        </div>
      ))}
      <div ref={bottomRef} />
    </div>
  );
};

export default Chat;

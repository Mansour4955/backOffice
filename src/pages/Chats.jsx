// Chats.js

import React, { useState } from "react";
import { chats } from "../data.js";
import { useNavigate } from "react-router-dom";

const Chats = () => {
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();
  const handleSeeChat = (id) => {
    navigate(`${id}`);
  };
  return (
    <div className="flex flex-col gap-5 overflow-y-auto bg-white h-[75vh] max-h-[75vh]">
      <h4
        className="cursor-pointer text-xl font-semibold text-blue-600 w-full rounded-lg shadow-2xl  hover:border-blue-500 border-[2px] border-transparent  p-4 transition duration-300 ease-in-out bg-white"
        onClick={() => setShowAll(!showAll)}
      >
        {showAll ? "See only the last 8 chats" : "See all chats"}
      </h4>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {showAll
          ? chats.map((chat) => (
              <div
                onClick={() => handleSeeChat(chat.id)}
                key={chat.id}
                className="p-4 flex flex-col gap-3 bg-white text-blue-600 rounded-lg cursor-pointer shadow-2xl hover:shadow-none hover:border-blue-500 border-[2px] border-transparent transition duration-300 ease-in-out"
              >
                <div className="flex items-center justify-between w-full">
                  <h4 className="text-xl font-semibold">{chat.title}</h4>
                  <p className="font-semibold">{chat.user}</p>
                </div>
                <div className="flex flex-col gap-4">
                  {chat.messages.slice(-2).map((message, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-5 text-black font-semibold text-lg"
                    >
                      <span className="text-sm col-span-1">
                        {message.type === "ai" ? "Azul AI" : message.type}
                      </span>
                      <p className=" col-span-4 line-clamp-1 text-base text-gray-400">
                        {message.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))
          : chats.slice(0, 8).map((chat) => (
              <div
                onClick={() => handleSeeChat(chat.id)}
                key={chat.id}
                className="p-4 flex flex-col gap-3 bg-white text-blue-600 rounded-lg cursor-pointer shadow-2xl hover:shadow-none hover:border-blue-500 border-[2px] border-transparent transition duration-300 ease-in-out"
              >
                <div className="flex items-center justify-between w-full">
                  <h4 className="text-xl font-semibold">{chat.title}</h4>
                  <p className="font-semibold">{chat.user}</p>
                </div>
                <div className="flex flex-col gap-4">
                  {chat.messages.slice(-2).map((message, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-5 text-black font-semibold text-lg"
                    >
                      <span className="text-sm col-span-1">
                        {message.type === "ai" ? "Azul AI" : message.type}
                      </span>
                      <p className=" col-span-4 line-clamp-1 text-base text-gray-400">
                        {message.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Chats;

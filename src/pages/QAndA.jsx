import React, { useState } from "react";
import { chats } from "../data.js";

const QAndA = () => {
  const [showAll, setShowAll] = useState(false);
  const [onneQ, setOneQ] = useState({});
  const [showOneQ, setShowOneQ] = useState(false);
  // Combine user questions with Azul AI answers into a single array
  const combinedMessages = chats.reduce((acc, chat) => {
    chat.messages.forEach((message, index) => {
      if (message.type === "user") {
        acc.push({
          user: chat.user, // Add the user's name
          question: message.text,
          answer: chat.messages[index + 1]?.text || "No answer yet",
        });
      }
    });
    return acc;
  }, []);
  const handleSeeChat = (msg) => {
    setOneQ(msg);
    setShowOneQ(true);
  };
  return (
    <>
      {!showOneQ ? (
        <div className="flex flex-col gap-5 overflow-y-auto bg-white h-[75vh] max-h-[75vh]">
          <h4
            className="cursor-pointer text-xl font-semibold text-blue-600 w-full rounded-lg shadow-2xl  hover:border-blue-500 border-[2px] border-transparent  p-4 transition duration-300 ease-in-out bg-white"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "See only the last 8 Q & A" : "See all Q & A"}
          </h4>

          <div className="flex flex-col gap-2">
            {showAll
              ? combinedMessages.map((msg, index) => (
                  <div
                    key={index}
                    className="p-4 flex flex-col gap-3 bg-white text-blue-600 rounded-lg cursor-pointer shadow-2xl hover:shadow-none hover:border-blue-500 border-[2px] border-transparent transition duration-300 ease-in-out"
                    onClick={() => handleSeeChat(msg.id)}
                  >
                    <div className="flex justify-between">
                      <h4 className="text-xl font-bold">Question:</h4>
                      <p className="text-lg font-semibold">{msg.user}</p>
                    </div>
                    <p className="text-lg text-gray-400 line-clamp-1">
                      {msg.question}
                    </p>
                    <h4 className="text-xl font-semibold">Answer:</h4>
                    <p className="text-base text-gray-400">{msg.answer}</p>
                  </div>
                ))
              : combinedMessages.slice(-8).map((msg, index) => (
                  <div
                    key={index}
                    className="p-4 flex flex-col gap-3 bg-white text-blue-600 rounded-lg cursor-pointer shadow-2xl hover:shadow-none hover:border-blue-500 border-[2px] border-transparent transition duration-300 ease-in-out"
                    onClick={() => handleSeeChat(msg)}
                  >
                    <div className="flex justify-between">
                      <h4 className="text-xl font-bold">Question:</h4>
                      <p className="text-lg font-semibold">{msg.user}</p>
                    </div>
                    <p className="text-lg text-gray-400 line-clamp-1">
                      {msg.question}
                    </p>
                    <h4 className="text-xl font-bold">Answer:</h4>
                    <p className="text-lg text-gray-400 line-clamp-1">
                      {msg.answer}
                    </p>
                  </div>
                ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-2 overflow-y-auto rounded-xl bg-white h-[75vh] max-h-[75vh]">
          <div className="px-4 py-10  flex flex-col gap-3 bg-white text-blue-600 rounded-lg cursor-pointer shadow-2xl ">
            <div className="flex justify-between">
              <h4 className="text-xl font-bold">Question:</h4>
              <p className="text-lg font-semibold">{onneQ.user}</p>
            </div>
            <p className="text-lg text-gray-400 ">{onneQ.question}</p>
            <h4 className="text-xl font-bold">Answer:</h4>
            <p className="text-lg text-gray-400 ">{onneQ.answer}</p>
          </div>
          <div className="w-full p-2">
            <button
              className="duration-200 text-blue-600 font-semibold text-lg px-4 shadow-2xl py-1 flex items-center justify-center rounded-xl bg-gradient-to-br hover:bg-gradient-to-tl from-white to-blue-100"
              onClick={() => setShowOneQ(false)}
            >
              Go back
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default QAndA;

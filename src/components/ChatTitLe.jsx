import React from "react";

const ChatTitLe = ({ title }) => {
  return (
    <div
      className="text-xl font-semibold text-blue-600 cursor-pointer px-2 py-1 flex items-center rounded-lg bg-gray-100 w-full"
    >
      {title} ?
    </div>
  );
};

export default ChatTitLe;

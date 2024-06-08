import React from 'react';
import ChatTitLe from '../components/ChatTitLe';
import logo from "../images/artificial-intelligence.png";

const BackOffice = () => {
  const chats = [
    { id: 1, title: "Chat 1", messages: ["Message 1", "Message 2"] },
    { id: 2, title: "Chat 2", messages: ["Message 3", "Message 4"] },
    // Add more chat objects as needed
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="py-6 px-8 bg-white shadow-md flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-10 h-10" />
          <h1 className="text-3xl font-semibold text-blue-600">Chats</h1>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Chat Cards */}
          {chats.map((chat) => (
            <div key={chat.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <ChatTitLe title={chat.title} />
                <div className="mt-4">
                  {chat.messages.map((message, index) => (
                    <div key={index} className="flex items-center mb-2">
                      <span className="text-gray-600 font-semibold mr-2">Question:</span>
                      <span>{message}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BackOffice;

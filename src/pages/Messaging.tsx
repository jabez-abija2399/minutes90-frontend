// src/pages/Messaging.tsx
import React, { useState } from "react";
import { dummyConversations } from "../data/dummy";

const Messaging = () => {
  const [selectedConvId, setSelectedConvId] = useState<number>(
    dummyConversations[0].id
  );
  const selectedConv = dummyConversations.find(
    (conv) => conv.id === selectedConvId
  )!;

  return (
    <div className="flex h-screen max-w-6xl mx-auto border rounded shadow overflow-hidden">
      {/* Sidebar: Conversations List */}
      <aside className="w-72 border-r bg-gray-50 flex flex-col">
        <h2 className="text-xl font-semibold p-5 border-b bg-white sticky top-0 z-10">
          Conversations
        </h2>
        <ul className="flex-1 overflow-y-auto">
          {dummyConversations.map((conv) => (
            <li
              key={conv.id}
              onClick={() => setSelectedConvId(conv.id)}
              className={`cursor-pointer p-4 border-b hover:bg-blue-100 transition-colors ${
                conv.id === selectedConvId
                  ? "bg-blue-200 font-semibold"
                  : "bg-transparent"
              }`}
            >
              <div className="truncate">{conv.participants.join(", ")}</div>
            </li>
          ))}
        </ul>
      </aside>

      {/* Message Window */}
      <main className="flex-1 flex flex-col bg-white">
        <header className="p-5 border-b font-semibold bg-white sticky top-0 z-10">
          Chat with {selectedConv.participants.join(", ")}
        </header>

        {/* Messages List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-100">
          {selectedConv.messages.map((msg) => {
            const isSender =
              msg.sender === selectedConv.participants[0]; // adjust based on current user

            return (
              <div
                key={msg.id}
                className={`max-w-[70%] p-4 rounded-xl shadow-md break-words
                  flex flex-col
                  ${
                    isSender
                      ? "bg-blue-600 text-white self-start rounded-bl-none"
                      : "bg-gray-300 text-gray-900 self-end rounded-br-none"
                  }
                `}
              >
                <div className="text-xs font-semibold mb-1 opacity-80">
                  {msg.sender}
                </div>
                <div className="whitespace-pre-wrap">{msg.text}</div>
                <div
                  className={`text-[10px] mt-2 opacity-70 ${
                    isSender ? "text-blue-200" : "text-gray-700"
                  } self-end`}
                >
                  {msg.timestamp}
                </div>
              </div>
            );
          })}
        </div>

        {/* Input area */}
        <form className="p-4 border-t bg-white flex items-center gap-3">
          <input
            type="text"
            placeholder="Type a message (UI only)"
            className="flex-1 p-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            disabled
            className="bg-blue-600 text-white px-4 py-2 rounded-full opacity-50 cursor-not-allowed"
          >
            Send
          </button>
        </form>
      </main>
    </div>
  );
};

export default Messaging;

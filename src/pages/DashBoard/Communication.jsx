import React, { useEffect, useRef, useState } from "react";

const Communication = () => {
  const [users] = useState([
    { id: 1, name: "John Doe" },
    { id: 2, name: "Sarah Smith" },
    { id: 3, name: "Alex Khan" },
  ]);

  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState([
    { id: 1, sender: "bot", text: "👋 Hello! Start chatting now." },
  ]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);

  // Auto scroll to bottom when new message appears
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { id: Date.now(), sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    // Simulated bot reply
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: "bot",
          text: `✅ Got your message, ${selectedUser.name}!`,
        },
      ]);
    }, 800);
  };

  const handleBack = () => {
    setSelectedUser(null);
  };

  return (
    <div className="flex h-[90vh] bg-base-200 rounded-2xl shadow-xl overflow-hidden">
      {/* User List (Left Side) */}
      <div
        className={`w-full md:w-1/3 bg-base-100 border-r border-base-300 flex flex-col transition-all duration-300 ${
          selectedUser ? "hidden md:flex" : "flex"
        }`}
      >
        <div className="p-4 bg-primary text-primary-content text-lg font-semibold text-center">
          Users
        </div>
        <ul className="flex-1 overflow-y-auto">
          {users.map((user) => (
            <li
              key={user.id}
              onClick={() => setSelectedUser(user)}
              className={`p-4 cursor-pointer border-b border-base-300 transition ${
                selectedUser?.id === user.id
                  ? "bg-primary text-primary-content"
                  : "hover:bg-base-300"
              }`}
            >
              {user.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Chat Section (Right Side) */}
      <div
        className={`flex flex-col w-full md:w-2/3 transition-all duration-300 ${
          !selectedUser ? "hidden md:flex" : "flex"
        }`}
      >
        {/* Header */}
        <div className="bg-primary text-primary-content p-4 text-lg font-semibold flex items-center justify-between">
          <span>💬 {selectedUser ? `Chat with ${selectedUser.name}` : "Chat"}</span>
          {/* Back button visible only on mobile */}
          {selectedUser && (
            <button
              onClick={handleBack}
              className="btn btn-sm btn-outline text-primary-content md:hidden"
            >
              ⬅ Back
            </button>
          )}
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`chat ${
                msg.sender === "user" ? "chat-end" : "chat-start"
              }`}
            >
              <div
                className={`chat-bubble ${
                  msg.sender === "user"
                    ? "chat-bubble-primary"
                    : "chat-bubble-secondary"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>

        {/* Input Box */}
        {selectedUser && (
          <form
            onSubmit={handleSend}
            className="p-3 bg-base-100 flex items-center gap-2 border-t border-base-300"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={`Message ${selectedUser.name}...`}
              className="input input-bordered flex-1"
            />
            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Communication;

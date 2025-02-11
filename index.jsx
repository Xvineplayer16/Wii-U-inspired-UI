import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const menuItems = [
  { id: "wii-menu", title: "Wii U Menu", icon: "💿", color: "bg-blue-300" },
  { id: "transfer", title: "Wii System Transfer", icon: "📤", color: "bg-yellow-300" },
  { id: "shop", title: "Wii Shop Channel", icon: "🛍️", color: "bg-blue-300" },
  { id: "mii-channel", title: "Mii Channel", icon: "👥", color: "bg-pink-300" },
  { id: "photo-channel", title: "Photo Channel", icon: "📸", color: "bg-green-300" },
  { id: "news-channel", title: "News Channel", icon: "📰", color: "bg-gray-300" },
  { id: "weather-channel", title: "Weather Channel", icon: "🌤️", color: "bg-blue-200" },
  { id: "internet-channel", title: "Internet Channel", icon: "🌍", color: "bg-purple-300" }
];

export default function App() {
  const [time, setTime] = useState(new Date());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    const timeout = setTimeout(() => setLoading(false), 3000); // Simulate loading time
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString("en-GB", { weekday: "short", day: "2-digit", month: "2-digit" });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-black text-white text-2xl font-bold">
        Astrid's Super Cool Wii Inspired Unblocker...
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-100 to-blue-300">
      <div className="bg-white/80 p-6 rounded-2xl shadow-2xl text-center">
        <div className="grid grid-cols-3 gap-4">
          {menuItems.map((item) => (
            <motion.div
              key={item.id}
              className={`p-6 rounded-xl shadow-md ${item.color} flex flex-col items-center cursor-pointer`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="text-4xl">{item.icon}</div>
              <p className="mt-2 text-lg font-semibold">{item.title}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-4 text-xl font-bold">
          <p>{formatTime(time)}</p>
          <p>{formatDate(time)}</p>
        </div>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition">
          Next →
        </button>
      </div>
    </div>
  );
}

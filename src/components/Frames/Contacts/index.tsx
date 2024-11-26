"use client";
import React, { useState } from "react";
import "tailwindcss/tailwind.css";

const Contacts: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div
      className="flex relative z-20 justify-center items-center w-screen h-screen bg-dark-light dark:bg-dark"
      id="contact"
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-accent-purple p-8 rounded-lg shadow-lg w-full max-w-lg border-4 border-transparent animate-border-gradient"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-primary dark:text-white">
          Contact Us
        </h2>
        <div className="mb-4">
          <label
            className="block text-primary dark:text-white mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-dark-accentGold"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-primary dark:text-white mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-dark-accentGold"
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-primary dark:text-white mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={e => setMessage(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-dark-accentGold"
            rows={4}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-primary dark:bg-dark-accentGold text-white font-bold py-2 px-4 rounded-md hover:bg-primary-dark dark:hover:bg-dark-accentPurple transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contacts;

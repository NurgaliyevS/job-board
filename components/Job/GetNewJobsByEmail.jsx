import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function GetNewJobsByEmail() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!emailRegex.test(email)) {
      setMessage("Invalid email");
      return;
    }

    try {
      const response = await axios.post("/api/subscribe", { email });

      if (response.data.success) {
        setMessage(response.data.message);
        toast.success(response.data.message);
        setEmail("");
      } else {
        setMessage(response.data.message || "An error occurred");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred");
      setMessage(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <section className="bg-white shadow-lg rounded-xl p-6">
      <div className="flex items-center gap-1">
        <img src="/send-svgrepo-com.svg" className="w-6 h-6" alt="Email icon" />
        <span className="text-lg font-bold">Get New Jobs by Email</span>
      </div>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-4">
          <input
            type="email"
            className="input input-bordered w-full"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="w-full btn btn-error">
          Subscribe
        </button>
      </form>
      {message === "Subscribed successfully" && (
        <p className="mt-2 text-sm text-center text-success">{message}</p>
      )}
      {message === "Email already subscribed" && (
        <p className="mt-2 text-sm text-center text-error">{message}</p>
      )}
      {message === "Invalid email" && (
        <p className="mt-2 text-sm text-center text-error">{message}</p>
      )}
      {message === "An error occurred" && (
        <p className="mt-2 text-sm text-center text-error">{message}</p>
      )}
    </section>
  );
}

export default GetNewJobsByEmail;

import React from "react";

function GetNewJobsByEmail(props) {
  return (
    <section className="bg-white shadow-lg rounded-xl p-6">
      <div className="flex items-center gap-1">
        <img src="/send-svgrepo-com.svg" className="w-6 h-6" />
        <span className="text-lg font-bold">Get New Jobs by Email</span>
      </div>
      <div className="my-4">
        <input
          type="email"
          className="input input-bordered w-full max-w-xs"
          placeholder="Enter your email"
        />
      </div>
      <button className="w-full flex justify-center py-2 px-4 btn btn-error">
        Subscribe
      </button>
    </section>
  );
}

export default GetNewJobsByEmail;

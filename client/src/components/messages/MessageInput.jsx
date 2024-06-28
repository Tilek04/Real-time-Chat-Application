import React from "react";
import { BiSolidSend } from "react-icons/bi";

const MessageInput = () => {
  return (
    <form className="px-4 my-3">
      <div className="w-full relative">
        <input
          type="text"
          className="border text-sm rounded-3xl block w-full p-2.5 bg-gray-700 text-white border-gray-600"
          placeholder="Message"
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3">
            <BiSolidSend className="text-white"/>
          </button>
      </div>
    </form>
  );
};

export default MessageInput;

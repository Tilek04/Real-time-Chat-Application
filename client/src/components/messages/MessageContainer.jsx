import React from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { MdMessage } from "react-icons/md";

const MessageContainer = () => {
  const noChatSelected = true;
  return (
    <div className="md:min-w-[450px] flex flex-col">
      {noChatSelected ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Header */}

          <div className="bg-slate-900 px-4 py-2 mb-2">
            <span className="label-text px-2">To:</span>
            <span className="text-white font-bold">TsicDat</span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div
        className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold 
      flex flex-col items-center gap-2">
        <p>Welcome Tilek Dzhenoshev</p>
        <p>Select a chat to start messaging</p>
        <MdMessage className=" text-3xl md:text-6xl " />
      </div>
    </div>
  );
};

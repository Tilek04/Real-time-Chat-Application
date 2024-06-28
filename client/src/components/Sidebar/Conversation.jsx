import React from "react";

const Conversation = () => {
  return (
    <>
      <div className="flex gap-2 items-center hover:bg-sky-800 rounded p-2 py-1 cursor-pointer">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img
              src="https://media.istockphoto.com/id/1300845620/pl/wektor/ikona-u%C5%BCytkownika-p%C5%82aska-izolowana-na-bia%C5%82ym-tle-symbol-u%C5%BCytkownika-ilustracja-wektorowa.jpg?s=1024x1024&w=is&k=20&c=fJVZupswUar8-_SYQukGD143Mm4XNuA5E6R4Wona0Tw="
              alt="avatar"
            />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">Tilek Dzhenishev</p>
            <span className="text-xl">🌚</span>
          </div>
        </div>
      </div>
      <div className="divider my-0 py-0 h-1" />
    </>
  );
};

export default Conversation;

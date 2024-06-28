import React from "react";

const Message = () => {
  return (
    <>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              src="https://media.istockphoto.com/id/1300845620/pl/wektor/ikona-u%C5%BCytkownika-p%C5%82aska-izolowana-na-bia%C5%82ym-tle-symbol-u%C5%BCytkownika-ilustracja-wektorowa.jpg?s=1024x1024&w=is&k=20&c=fJVZupswUar8-_SYQukGD143Mm4XNuA5E6R4Wona0Tw="
              alt="avatar"
            />
          </div>
        </div>
        <div className="chat-bubble text-white bg-blue-500">Hi i am Tilek</div>
        <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
          13:45
        </div>
      </div>
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              src="https://media.istockphoto.com/id/1300845620/pl/wektor/ikona-u%C5%BCytkownika-p%C5%82aska-izolowana-na-bia%C5%82ym-tle-symbol-u%C5%BCytkownika-ilustracja-wektorowa.jpg?s=1024x1024&w=is&k=20&c=fJVZupswUar8-_SYQukGD143Mm4XNuA5E6R4Wona0Tw="
              alt="avatar"
            />
          </div>
        </div>
        <div className="chat-bubble text-white bg-blue-500">Hi i am Tilek</div>
        <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
          13:45
        </div>
      </div>
    </>
  );
};

export default Message;

import { FunctionComponent } from "react";

const MessageInput: FunctionComponent = () => {
  return (
    <div className="w-full lg:mb-5 p-3 lg:p-5">
      <input
        className="w-full border border-gray-500 p-4 rounded"
        placeholder="Entrer message"
        type="text"
      />
    </div>
  );
};

export default MessageInput;

import { FunctionComponent } from "react";
import MessageWithUser from "../../../typings/MessageWithSender";

type Props = {
  name: string;
  hasNewMessage: boolean;
  lastMessage: MessageWithUser;
  onClick: () => void;
};

const GroupWithMessageCard: FunctionComponent<Props> = ({
  name,
  hasNewMessage,
  lastMessage,
  onClick,
}) => {
  return (
    <div
      className="px-6 py-5 border-b border-s-4 hover:bg-gray-200"
      onClick={onClick}
    >
      <h1 className="text-xl">{name}</h1>
      <p className="mt-1 text-gray-700">
        <div className="mt-3">{`${lastMessage.sender.name} ${lastMessage.sender.firstName}:`}</div>
        <strong className={`${hasNewMessage ? "font-bold" : ""}`}>
          {lastMessage.content}
        </strong>
      </p>
    </div>
  );
};

export default GroupWithMessageCard;

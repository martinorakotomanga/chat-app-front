import { FunctionComponent } from "react";
import Message from "../../../typings/Message";

type Props = {
  name: string;
  firstName: string;
  hasNewMessage: boolean;
  lastMessage: Message;
  onClick: () => void;
};

const UserWithMessageCard: FunctionComponent<Props> = ({
  name,
  firstName,
  hasNewMessage,
  lastMessage,
  onClick,
}) => {
  return (
    <div className="px-6 py-5 border-b border-s-4" onClick={onClick}>
      <h1 className="text-xl">{`${name} ${firstName}`}</h1>

      {hasNewMessage ? (
        <p className="font-bold mt-1 text-gray-700">{lastMessage.content}</p>
      ) : (
        <p className="mt-1 text-gray-700">{lastMessage.content}</p>
      )}
    </div>
  );
};

export default UserWithMessageCard;

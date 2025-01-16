import { FunctionComponent } from "react";
import MessageInput from "./chat-detail/message-input";
import MessagePanel from "./chat-detail/message-panel";
import Button from "../form/button";
import GroupWithMessages from "../../typings/GroupWithMessages";
import UserWithMessages from "../../typings/UserWithMessages";

type Props = {
  userOrGroupWithMessage: UserWithMessages | GroupWithMessages;
  onBack: () => void;
};

const ChatDetail: FunctionComponent<Props> = ({
  onBack,
  userOrGroupWithMessage,
}) => {
  return (
    <div className="w-full h-[90%] sm:h-full flex justify-between flex-col bg-white">
      <div className="p-2 lg:p-5 shadow-sm">
        <Button size="small" className="sm:hidden" onClick={onBack}>
          Retour
        </Button>

        {"firstName" in userOrGroupWithMessage ? (
          <span>
            {` ${userOrGroupWithMessage.name} ${userOrGroupWithMessage.firstName}
            `}
          </span>
        ) : (
          <span>{userOrGroupWithMessage.name}</span>
        )}
      </div>

      <div className="h-full p-5 lg:p-10 overflow-auto">
        {userOrGroupWithMessage.messages.map((message) => (
          <MessagePanel
            key={message.id}
            isSelfMessage={false}
            sender={"sender" in message ? message.sender : undefined}
          >
            {message.content}
          </MessagePanel>
        ))}
      </div>

      <MessageInput />
    </div>
  );
};

export default ChatDetail;

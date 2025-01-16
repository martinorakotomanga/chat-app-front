import { FunctionComponent, useState } from "react";
import ChatList from "../../components/chat/chat-list";
import ChatDetail from "../../components/chat/chat-detail";
import UserWithMessages from "../../typings/UserWithMessages";
import GroupWithMessages from "../../typings/GroupWithMessages";

const Chat: FunctionComponent = () => {
  const [isChatListVisible, setIsShowChatList] = useState<boolean>(true);
  const [userOrGroupWithMessage, setUserOrGroupWithMessage] = useState<
    UserWithMessages | GroupWithMessages
  >({
    id: "1",
    name: "Rakoto",
    firstName: "Martino",
    birthday: "",
    gender: "HOMME",
    phone: "",
    connected: false,
    password: "",
    messages: [
      {
        id: "a1",
        content: "Bonjour",
        from: "",
        to: "",
      },
    ],
    hasNewMessage: false,
  });

  const handleSelect = (userOrGroup: UserWithMessages | GroupWithMessages) => {
    setIsShowChatList(false);
    setUserOrGroupWithMessage(userOrGroup);
  };

  const isOnMobile = window.innerWidth <= 640;

  if (isOnMobile) {
    return isChatListVisible ? (
      <ChatList onSelect={handleSelect} />
    ) : (
      <ChatDetail
        userOrGroupWithMessage={userOrGroupWithMessage}
        onBack={() => setIsShowChatList(true)}
      />
    );
  }

  return (
    <div id="chat-container" className="h-full sm:flex">
      <ChatList onSelect={handleSelect} />
      <ChatDetail
        userOrGroupWithMessage={userOrGroupWithMessage}
        onBack={() => setIsShowChatList(true)}
      />
    </div>
  );
};

export default Chat;

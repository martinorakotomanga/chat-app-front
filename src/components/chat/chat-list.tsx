import { FunctionComponent } from "react";
import UserWithMessage from "../../typings/UserWithMessages";
import UserWithMessageCard from "./chat-list/user-with-message-card";
import GroupWithMessageCard from "./chat-list/group-with-message-card";
import GroupWithMessage from "../../typings/GroupWithMessages";
import UserWithMessages from "../../typings/UserWithMessages";
import GroupWithMessages from "../../typings/GroupWithMessages";

type Props = {
  onSelect: (
    userOrGroupWithMessage: UserWithMessage | GroupWithMessage
  ) => void;
};

const ChatList: FunctionComponent<Props> = ({ onSelect }) => {
  const UserAndGroupWithMessages: (UserWithMessages | GroupWithMessages)[] = [
    {
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
    },
    {
      id: "2",
      name: "Raelinomena",
      firstName: "baholy",
      birthday: "",
      gender: "FEMME",
      phone: "",
      connected: false,
      password: "",
      messages: [
        {
          id: "b1",
          content: "Coucou!",
          from: "",
          to: "",
        },
      ],
      hasNewMessage: false,
    },
    {
      id: "3",
      name: "Iggl3A",
      description: "iggl3 is the best",
      adminId: "",
      messages: [
        {
          id: "c3",
          content: "Bonne journée",
          from: "",
          to: "",
          sender: {
            id: "2",
            name: "Raelinomena",
            firstName: "baholy",
            birthday: "",
            gender: "FEMME",
            phone: "",
            password: "",
          },
        },
      ],
      hasNewMessage: true,
    },
  ];

  return (
    <div className="w-full sm:w-96 h-full border-e bg-white">
      {UserAndGroupWithMessages.map((userOrGroup) =>
        "firstName" in userOrGroup ? (
          <UserWithMessageCard
            key={userOrGroup.id}
            name={userOrGroup.name}
            firstName={userOrGroup.firstName}
            hasNewMessage={userOrGroup.hasNewMessage}
            lastMessage={userOrGroup.messages[userOrGroup.messages.length - 1]}
            onClick={() => onSelect(userOrGroup)}
          />
        ) : (
          <GroupWithMessageCard
            key={userOrGroup.id}
            name={userOrGroup.name}
            hasNewMessage={userOrGroup.hasNewMessage}
            lastMessage={userOrGroup.messages[userOrGroup.messages.length - 1]}
            onClick={() => onSelect(userOrGroup)}
          />
        )
      )}
    </div>
  );
};

export default ChatList;

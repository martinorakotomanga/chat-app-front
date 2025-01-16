import Group from "../models/Group";
import MessageWithSender from "./MessageWithSender";

interface GroupWithMessages extends Group {
  messages: MessageWithSender[];
  hasNewMessage: boolean;
}

export default GroupWithMessages;

import Message from "./Message";
import User from "../models/User";

interface MessageWithSender extends Message {
  sender: User;
}

export default MessageWithSender;

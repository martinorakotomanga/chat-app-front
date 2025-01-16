import Message from "./Message";
import User from "../models/User";

interface UserWithMessages extends User {
  connected: boolean;
  messages: Message[];
  hasNewMessage: boolean;
}

export default UserWithMessages;

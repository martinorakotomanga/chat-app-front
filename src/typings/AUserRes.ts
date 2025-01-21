import User from "../models/User";

type AUserRes = {
  msg: string;
  data: User;
  error: Error;
};

export default AUserRes;

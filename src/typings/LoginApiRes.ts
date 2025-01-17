type LoginApiRes =
  | {
      msg: string;
      token: string;
    }
  | {
      msg: string;
      error: Error;
    };

export default LoginApiRes;

import User from "../models/User";
import LoginApiRes from "../typings/LoginApiRes";

class UserService {
  private static port: number = 8001;

  public static async createUser(user: User): Promise<User> {
    const fetchOptions: RequestInit = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    };

    return fetch(`http://localhost:${this.port}/users`, fetchOptions)
      .then(async (response) => {
        const serverResponse = await response.json();

        if (serverResponse.error) {
          throw new Error(serverResponse.msg);
        }

        return serverResponse;
      })
      .catch((error) => this.handleError(error));
  }

  public static async login(
    phone: string,
    password: string
  ): Promise<LoginApiRes> {
    const fetchOptions: RequestInit = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        phone,
        password,
      }),
    };

    return fetch(`http://localhost:8001/login`, fetchOptions).then(
      async (response) => {
        const serverResponse = await response.json();

        if (serverResponse.error || response.status !== 200) {
          throw new Error(serverResponse.msg);
        }

        return serverResponse;
      }
    );
  }

  private static handleError(error: Error) {
    alert(`Oops! \n ${error.message}`);
    console.error(error.message);
  }
}

export default UserService;

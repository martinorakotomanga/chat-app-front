import User from "../models/User";
import AUserRes from "../typings/AUserRes";
import LoginApiRes from "../typings/LoginApiRes";

class UserService {
  private static port: number = 8001;
  private static BASE_URL: string = `http://localhost:${this.port}`;

  public static async createUser(user: User): Promise<User> {
    const requestInit: RequestInit = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    };

    return fetch(`${this.BASE_URL}/users`, requestInit)
      .then((response) => this.handleResponse(response))
      .catch((error) => this.handleError(error));
  }

  public static async login(
    phone: string,
    password: string
  ): Promise<LoginApiRes> {
    const requestInit: RequestInit = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        phone,
        password,
      }),
    };

    return fetch(`${this.BASE_URL}/login`, requestInit)
      .then((response) => this.handleResponse(response))
      .catch((error) => this.handleError(error));
  }

  public static async findUserById(
    id: string,
    authorization: string
  ): Promise<AUserRes> {
    return fetch(`${this.BASE_URL}/users/${id}`, {
      headers: { authorization },
    })
      .then((response) => this.handleResponse(response))
      .catch((error) => this.handleError(error));
  }

  public static async updateUser(
    user: User,
    authorization: string
  ): Promise<AUserRes> {
    const requestInit: RequestInit = {
      method: "PUT",
      headers: { authorization, "Content-Type": "application/json" },
      body: JSON.stringify(user),
    };

    return fetch(`${this.BASE_URL}/users/${user.id}`, requestInit)
      .then((response) => this.handleResponse(response))
      .catch((error) => this.handleError(error));
  }

  private static async handleResponse(response: Response) {
    const { ok } = response;

    if (!ok) {
      const responseBody = await response.json();
      const errorMsg = responseBody.msg;
      throw new Error(errorMsg);
    }

    return response.json();
  }

  private static handleError(error: Error) {
    alert(`Oops! \n ${error.message}`);
    console.error(error.message);
  }
}

export default UserService;

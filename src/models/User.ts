import Gender from "../typings/Gender";

class User {
  public id;
  public name;
  public firstName;
  public birthday;
  public gender: Gender;
  public phone;
  public password;

  constructor(
    id: string = "",
    name: string = "",
    firstName: string = "",
    birthday: string = "",
    gender: Gender = "HOMME",
    phone: string = "",
    password: string = ""
  ) {
    this.id = id;
    this.name = name;
    this.firstName = firstName;
    this.birthday = birthday;
    this.gender = gender;
    this.phone = phone;
    this.password = password;
  }
}

export default User;

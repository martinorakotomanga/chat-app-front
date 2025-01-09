import Field from "./Field";

class BirthdayField extends Field {
  constructor(value: string, error = undefined, isValid = undefined) {
    super(value, error, isValid);
  }

  public validateField(): void {
    super.validateField();

    if (this._isValid) {
      this.isMajor();
    }
  }

  private isMajor() {
    const actualYear = new Date().getFullYear();
    const yearOfBirth = +this._value.split("-")[0];

    const age: number = actualYear - yearOfBirth;

    if (age < 18) {
      this._error = `vous êtes encore mineur`;
      this._isValid = false;
    } else {
      this._error = "";
      this._isValid = true;
    }
  }
}

export default BirthdayField;

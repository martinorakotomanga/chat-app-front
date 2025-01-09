import Field from "./Field";

class PasswordField extends Field {
  constructor(value: string, error = undefined, isValid = undefined) {
    super(value, error, isValid);
  }

  public validateField() {
    super.validateField();

    if (this._isValid) {
      this.isValidFormat();
    }
  }

  private isValidFormat() {
    this._error = "doit contenir";

    if (!/[a-z]/.test(this._value)) {
      this._error += ", une lettre miniscule";
      this._isValid = false;
    }

    if (!/[A-Z]/.test(this._value)) {
      this._error += ", une lettre majuscule";
      this._isValid = false;
    }

    if (!/[0-9]/.test(this._value)) {
      this._error += ", un chiffre";
      this._isValid = false;
    }

    if (!/[!@#$%^&*]/.test(this._value)) {
      this._error += ", un caractère spécial";
      this._isValid = false;
    }

    this._error += ".";

    const passAllRequirement = this._isValid;
    if (passAllRequirement) {
      this._error = "";
    }
  }
}

export default PasswordField;

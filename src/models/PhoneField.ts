import Field from "./Field";

class PhoneField extends Field {
  constructor(value: string, error = undefined, isValid = undefined) {
    super(value, error, isValid);
  }

  public validateField(): void {
    super.validateField();

    if (this._isValid) {
      this.isValidFormat();
    }
  }

  public isValidFormat() {
    const PHONE_REGEX: RegExp = /^\+261\s?[0-9]{2}\s?[0-9]{3}\s?[0-9]{2}$/;

    if (!PHONE_REGEX.test(this._value.trim())) {
      this._error = `format non valide`;
      this._isValid = false;
    } else {
      this._error = "";
      this._isValid = true;
    }
  }
}

export default PhoneField;

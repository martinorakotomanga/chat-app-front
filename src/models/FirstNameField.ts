import Field from "./Field";

class FirstNameField extends Field {
  constructor(value: string, error = undefined, isValid = undefined) {
    super(value, error, isValid);
  }

  public validateField() {
    super.validateField();

    if (this._isValid) {
      this.isOnlyWords();
    }
  }

  private isOnlyWords() {
    const WORDS_REGEX: RegExp = /^[a-zA-Z ]{2,50}$/;

    if (!WORDS_REGEX.test(this._value)) {
      this._error = `composez entre 2 à 50 caractères`;
      this._isValid = false;
    } else {
      this._error = "";
      this._isValid = true;
    }
  }
}

export default FirstNameField;

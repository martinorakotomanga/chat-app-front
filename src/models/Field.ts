abstract class Field {
  protected _value: string;
  protected _error?: string;
  protected _isValid?: boolean;

  constructor(value: string, error = undefined, isValid = undefined) {
    this._value = value;
    this._error = error;
    this._isValid = isValid;
  }

  public get value(): string {
    return this._value;
  }

  public get error(): string | undefined {
    return this._error;
  }

  public get isValid(): boolean | undefined {
    return this._isValid;
  }

  public changeValue(value: string) {
    this._value = value;
    this.reinitializeValidation();
  }

  private reinitializeValidation() {
    this._error = undefined;
    this._isValid = undefined;
  }

  public validateField() {
    this.isEmpty();
  }

  private isEmpty() {
    if (!this._value) {
      this._error = `ce champ est requis !`;
      this._isValid = false;
    } else {
      this._error = "";
      this._isValid = true;
    }
  }
}

export default Field;

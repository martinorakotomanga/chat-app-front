import Gender from "./Gender";

function isKeyOfObj<T extends object>(
  key: PropertyKey,
  obj: T
): key is keyof T {
  return key in obj;
}

function isGender(value: string): value is Gender {
  return ["HOMME", "FEMME"].includes(value);
}

export { isKeyOfObj, isGender };

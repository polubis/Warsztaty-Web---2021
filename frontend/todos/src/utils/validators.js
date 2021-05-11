const isObject = (value) => typeof value === "object" && value !== null;

const isIterable = (value) => typeof value === "string" || Array.isArray(value);

const isNumber = (value) => typeof value === "number";

const isFalsy = (value) => value === undefined || value === null;

export const translate = (dictionary) => (result) => {
  const translation = Object.entries(result).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: value ? dictionary[key] : "",
    }),
    {}
  );

  return translation;
};

export const createValidator = (validator, name) => {
  Object.defineProperty(validator, "name", {
    value: name,
    configurable: true,
  });

  return validator;
};

export const required = (value) => {
  if (isIterable(value)) {
    return value.length === 0;
  }

  if (isObject(value)) {
    return Object.keys(value).length === 0;
  }

  return isFalsy(value);
};

export const min = (expectedValue) =>
  createValidator((value) => {
    if (isNumber(value)) {
      return value < expectedValue;
    }

    if (isIterable(value)) {
      return value.length < expectedValue;
    }

    if (isObject(value)) {
      return Object.keys(value).length < expectedValue;
    }

    return false;
  }, "min");

export const max = (expectedValue) =>
  createValidator((value) => {
    if (isNumber(value)) {
      return value > expectedValue;
    }

    if (isIterable(value)) {
      return value.length > expectedValue;
    }

    if (isObject(value)) {
      return Object.keys(value).length > expectedValue;
    }

    return false;
  }, "max");

export const run = (...functions) => (value) => {
  const result = functions.reduce(
    (acc, fn) => ({
      ...acc,
      [fn.name]: fn(value),
    }),
    {}
  );

  return result;
};

export const first = (translation) => {
  return Object.values(translation).find((message) => message) ?? "";
};

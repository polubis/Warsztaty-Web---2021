const isObject = (value) => typeof value === "object" && value !== null;

const isIterable = (value) => typeof value === "string" || Array.isArray(value);

const isNumber = (value) => typeof value === "number";

const isFalsy = (value) => value === undefined || value === null;

export const required = (value) => {
  if (isIterable(value)) {
    return value.length === 0;
  }

  if (isObject(value)) {
    return Object.keys(value).length === 0;
  }

  return isFalsy(value);
};

export const min = (expectedValue) => (value) => {
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
};

export const max = (expectedValue) => (value) => {
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
};

export const run = (...functions) => (value) => {
  const result = functions.map((fn) => fn(value));

  return result;
};

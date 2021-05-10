const isObject = (value) => typeof value === "object" && value !== null;

export const required = (value) => {
  if (typeof value === "string" || Array.isArray(value)) {
    return value.length === 0;
  }

  if (isObject(value)) {
    return Object.keys(value).length === 0;
  }

  return value === undefined || value === null;
};

export const min = (expectedValue) => (value) => {
  if (typeof value === "number") {
    return value < expectedValue;
  }

  if (typeof value === "string" || Array.isArray(value)) {
    return value.length < expectedValue;
  }

  if (isObject(value)) {
    return Object.keys(value).length < expectedValue;
  }

  return false;
};

export const max = (expectedValue) => (value) => {
  if (typeof value === "number") {
    return value > expectedValue;
  }

  if (typeof value === "string" || Array.isArray(value)) {
    return value.length > expectedValue;
  }

  if (isObject(value)) {
    return Object.keys(value).length > expectedValue;
  }

  return false;
};

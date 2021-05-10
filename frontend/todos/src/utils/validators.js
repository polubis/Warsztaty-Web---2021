export const required = (value) => {
  if (typeof value === "string") {
    return value === "";
  }

  if (Array.isArray(value)) {
    return value.length === 0;
  }

  return value === undefined || value === null;
};

export const mockApiCall = (data, timeout = 1000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, timeout);
  });
};

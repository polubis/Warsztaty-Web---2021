export const updateEntityById = (items, item) => {
  return items.map((currItem) => (currItem.id === item.id ? item : currItem));
};

export const filterEntitiesById = (items, id) => {
  return items.filter((item) => item.id !== id);
};

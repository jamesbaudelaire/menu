export const getRestaurant = x => {
  return {
    type: "get",
    data: x
  };
};

export const saveItem = x => {
  return {
    type: "save",
    data: x
  };
};

export const deleteSaved = x => {
  return {
    type: "delete",
    data: x
  };
};

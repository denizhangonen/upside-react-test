import * as actionTypes from "./actionTypes";

export const addIngredient = ing => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    payload: ing
  };
};

export const removeIngredient = ing => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    payload: ing
  };
};

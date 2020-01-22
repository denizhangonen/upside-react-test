import * as actionTypes from "./actionTypes";

export const addIngredient = ing => {
    console.log(ing)
  return {
    type: actionTypes.ADD_INGREDIENT,
    payload: ing
  };
};

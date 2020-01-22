import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  currentIngredients: {
    pepperoni: false,
    sausage: false,
    mushroom: false,
    olive: false,
    pepper: false
  },
  totalPrice: 5
};

const INGREDIENT_PRICES = {
  pepperoni: 1.3,
  sausage: 1.1,
  mushroom: 0.88,
  olive: 0.6,
  pepper: 0.6
};

const addIngredient = (state, action) => {
  const updatedIngs = updateObject(state.currentIngredients, {
    [action.payload]: true
  });
  return updateObject(state, {
    currentIngredients: updatedIngs,
    totalPrice: state.totalPrice + INGREDIENT_PRICES[action.payload]
  });
};

const removeIngredient = (state, action) => {
  const updatedIngs = updateObject(state.currentIngredients, {
    [action.payload]: false
  });
  return updateObject(state, {
    currentIngredients: updatedIngs,
    totalPrice: state.totalPrice - INGREDIENT_PRICES[action.payload]
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return addIngredient(state, action);
    // return {
    //   ...state,
    //   currentIngredients: {
    //     ...state.currentIngredients,
    //     [action.payload]: true
    //   },
    //   totalPrice: state.totalPrice + INGREDIENT_PRICES[action.payload]
    // };
    case actionTypes.REMOVE_INGREDIENT:
      return removeIngredient(state, action);
    // return {
    //   ...state,
    //   currentIngredients: {
    //     ...state.currentIngredients,
    //     [action.payload]: false
    //   },
    //   totalPrice: state.totalPrice - INGREDIENT_PRICES[action.payload]
    // };
    case actionTypes.RESET_ORDER:
      return {
        ...initialState
      };
    default:
      return state;
  }
};

export default reducer;

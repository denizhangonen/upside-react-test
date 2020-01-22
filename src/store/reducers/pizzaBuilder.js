import * as actionTypes from "../actions/actionTypes";

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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return {
        ...state,
        currentIngredients: {
          ...state.currentIngredients,
          [action.payload]: true
        },
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.payload]
      };
    case actionTypes.REMOVE_INGREDIENT:
      return {
        ...state,
        currentIngredients: {
          ...state.currentIngredients,
          [action.payload]: false
        },        
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.payload]
      };
    default:
      return state;
  }
};

export default reducer;

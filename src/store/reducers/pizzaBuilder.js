import * as actionTypes from "../actions/actionTypes";

const initialState = {
  currentIngredients: {
    pepperoni: false,
    sausage: false,
    mushroom: false,
    olive: false,
    pepper: false
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      console.log(state);
      console.log(action);
      return {
        ...state,
        currentIngredients: {
          ...state.currentIngredients,
          [action.payload]: true
        }
      };
    default:
      return state;
  }
};

export default reducer;

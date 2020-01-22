import * as actionTypes from "../actions/actionTypes";

const initialState = {
  loading: false,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ORDER_START:
      return {
        ...state,
        loading: true,
        error: null
      };
    case actionTypes.ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null
      };
    case actionTypes.ORDER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;

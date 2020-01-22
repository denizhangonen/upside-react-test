import * as actionTypes from "../actions/actionTypes";

const initialState = {
  loading: false,
  error: null,
  purchased: false,
  orders: []
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
        error: null,
        purchased: true
      };
    case actionTypes.ORDER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case actionTypes.FETCH_ORDERS_START:
      return {
        ...state,
        loading: true,
        error: null
      };
    case actionTypes.FETCH_ORDERS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        orders: action.payload
      };
    case actionTypes.FETCH_ORDERS_FAIL:
      return {
        ...state,
        loading: true,
        error: action.payload
      };
    case actionTypes.RESET_ORDER:
      return {
        ...initialState
      };
    default:
      return state;
  }
};

export default reducer;

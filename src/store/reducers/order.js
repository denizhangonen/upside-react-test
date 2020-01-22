import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  loading: false,
  error: null,
  purchased: false,
  orders: []
};

const orderStart = (state, action) => {
  return updateObject(state, {
    loading: true,
    error: null
  });
};

const orderSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    error: null,
    purchased: true
  });
};

const orderFail = (state, action) => {
  return updateObject(state, {
    loading: false,
    error: action.payload
  });
};

const fetchOrdersStart = (state, action) => {
  return updateObject(state, {
    loading: true,
    error: null
  });
};

const fetchOrdersSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    error: null,
    orders: action.payload
  });
};

const fetchOrdersFail = (state, action) => {
  return updateObject(state, {
    loading: true,
    error: action.payload
  });
};

const resetOrder = (state, action) => {
  return updateObject(state, {
    ...initialState
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ORDER_START:
      return orderStart(state, action);
    case actionTypes.ORDER_SUCCESS:
      return orderSuccess(state, action);
    case actionTypes.ORDER_FAIL:
      return orderFail(state, action);
    case actionTypes.FETCH_ORDERS_START:
      return fetchOrdersStart(state, action);
    case actionTypes.FETCH_ORDERS_SUCCESS:
      return fetchOrdersSuccess(state, action);
    case actionTypes.FETCH_ORDERS_FAIL:
      return fetchOrdersFail(state, action);
    case actionTypes.RESET_ORDER:
      return resetOrder(state, action);
    default:
      return state;
  }
};

export default reducer;

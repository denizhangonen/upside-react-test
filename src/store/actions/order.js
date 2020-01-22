import * as actionTypes from "./actionTypes";

import axios from "../../config/axios-orders";
import * as endPoints from "../../config/endPoints";

export const purchasePizza = data => {
  return dispatch => {
    dispatch(purchasePizzaStart());
    axios
      .post(endPoints.POST_PIZZA_ORDER, data)
      .then(response => {
        dispatch(purchasePizzaSuccess(response));
      })
      .catch(err => {
        dispatch(purchasePizzaFail(err));
      });
  };
};

const purchasePizzaStart = () => {
  return {
    type: actionTypes.ORDER_START
  };
};

const purchasePizzaSuccess = data => {
  return {
    type: actionTypes.ORDER_SUCCESS,
    payload: data
  };
};

const purchasePizzaFail = error => {
  return {
    type: actionTypes.ORDER_FAIL,
    payload: error
  };
};

export const fetchOrders = () => {
  return dispatch => {
    dispatch(fetchOrdersStart);
    axios
      .get(endPoints.GET_PIZZA_ORDERS)
      .then(response => {
        // Make a iterable array out of the response data
        const fetchedOrders = [];
        for (let key in response.data) {
          fetchedOrders.push({
            ...response.data[key],
            id: key
          });
        }
        dispatch(fetchOrdersSuccess(fetchedOrders));
      })
      .catch(err => {
        dispatch(fetchOrdersFail(err));
      });
  };
};

const fetchOrdersStart = () => {
  return {
    type: actionTypes.FETCH_ORDERS_START
  };
};

const fetchOrdersSuccess = data => {
  return {
    type: actionTypes.FETCH_ORDERS_SUCCESS,
    payload: data
  };
};

const fetchOrdersFail = error => {
  return {
    type: actionTypes.FETCH_ORDERS_FAIL,
    payload: error
  };
};

export const resetOrder = () => {
  return {
    type: actionTypes.RESET_ORDER
  }
}

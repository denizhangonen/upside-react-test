import * as actionTypes from "./actionTypes";

import axios from "../../config/axios-orders";
import * as endPoints from "../../config/endPoints";

export const purchasePizza = data => {
  return dispatch => {
    dispatch(purchasePizzaStart());
    axios
      .post(endPoints.ORDER_PIZZA, data)
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

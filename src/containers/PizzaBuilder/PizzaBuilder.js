import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Aux from "../../hoc/Aux/Aux";
import Pizza from "../../components/Pizza/Pizza";
import BuildControls from "../../components/Pizza/BuildControls/BuildControls";

import * as actions from "../../store/actions/";

class PizzaBuilder extends Component {
  state = {
    purchasing: false
  };

  componentDidMount() {
    // this.props.onInitIngredients();
  }

  updatePurchaseState(ingredients) {
    let sum = 0;
    if (ingredients) {
      sum = Object.keys(ingredients)
        .map(igKey => {
          return ingredients[igKey];
        })
        .reduce((sum, el) => {
          return sum + el;
        }, 0);
    }

    return sum > 0;
  }

  purchaseHandler = () => {
    if (this.props.isAuthenticated) {
      this.setState({ purchasing: true });
    } else {
      this.props.onSetAuthRedirectPath("/checkout");
      this.props.history.push("/auth");
    }
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    this.props.onInitPurchase();
    this.props.history.push("/checkout");
  };

  addIngredientHandler = ingredient => {
    this.props.onAddIngredient(ingredient);
  };

  removeIngredientHandler = ingredient => {
    this.props.onRemoveIngredient(ingredient);
  };

  render() {
    // add count logic so that decide which button to be active

    let addedIngs = [];

    for (const key in this.props.curIngredients) {
      if (this.props.curIngredients[key]) {
        addedIngs.push(key);
      }
    }

    return (
      <Aux>
        <Pizza ingredients={addedIngs} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          // add a disable or enable prop
          price={this.props.price}
        />
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return { curIngredients: state.pizzaBuilder.currentIngredients };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      onAddIngredient: actions.addIngredient,
      onRemoveIngredient: actions.removeIngredient
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(PizzaBuilder);

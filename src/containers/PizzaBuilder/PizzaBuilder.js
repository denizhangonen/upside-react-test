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

  addIngredientHandler = (ingredient) => {    
    this.props.onAddIngredient(ingredient);
  };

  removeIngredientHandler = () => {};

  render() {
    const sampleIngs = ["pepperoni", "sausage", "mushroom", "pepper", "olive"];
    // add count logic so that decide which button to be active
    return (
      <Aux>
        <Pizza ingredients={sampleIngs} />
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
  return {};
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { onAddIngredient: actions.addIngredient },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(PizzaBuilder);

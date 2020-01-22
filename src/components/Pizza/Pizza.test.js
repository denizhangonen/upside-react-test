import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Pizza from "./Pizza";
import PizzaIngredient from "./PizzaIngredient/PizzaIngredient";

configure({ adapter: new Adapter() });

describe("<Pizza /> component tests", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Pizza ingredients={[]} />);
  });

  it("should contain a div with the classname pizza", () => {
    expect(wrapper.find("div.pizza").exists()).toBe(true);
  });

  it("should not render any <PizzaIngredient /> component when ingredients prop is empty", () => {
    wrapper.setProps({ ingredients: [] });
    expect(wrapper.find(PizzaIngredient)).toHaveLength(0);
  });

  it("should render a <p> element when ingredients prop is empty", () => {
    wrapper.setProps({ ingredients: [] });
    expect(wrapper.find("p.add-ing-message").exists()).toBe(true);
  });

  it("should render 2 <PizzaIngredient /> components when ingredients prop has 2 elements", () => {
    const ings = ["Upside", "Technology"];
    wrapper.setProps({ ingredients: ings });
    expect(wrapper.find(PizzaIngredient)).toHaveLength(2);
  });
});

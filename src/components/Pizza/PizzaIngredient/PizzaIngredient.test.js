import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import PizzaIngredient from "./PizzaIngredient";

import Pepperoni from "./Pepperoni/Pepperoni";
import Sausage from "./Sausage/Sausage";
import Olive from "./Olive/Olive";
import Pepper from "./Pepper/Pepper";
import Mushroom from "./Mushroom/Mushroom";

configure({ adapter: new Adapter() });

describe("<PizzaIngredient /> component tests", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<PizzaIngredient type="" />);
  });

  it("should render <Pepperoni /> component when prop type equal to pepperoni", () => {
    wrapper.setProps({ type: "pepperoni" });
    expect(wrapper.find(Pepperoni)).toHaveLength(1);
  });

  it("should render <Sausage /> component when prop type equal to sausage", () => {
    wrapper.setProps({ type: "sausage" });
    expect(wrapper.find(Sausage)).toHaveLength(1);
  });

  it("should render <Olive /> component when prop type equal to olive", () => {
    wrapper.setProps({ type: "olive" });
    expect(wrapper.find(Olive)).toHaveLength(1);
  });

  it("should render <Pepper /> component when prop type equal to pepper", () => {
    wrapper.setProps({ type: "pepper" });
    expect(wrapper.find(Pepper)).toHaveLength(1);
  });

  it("should render <Mushroom /> component when prop type equal to mushroom", () => {
    wrapper.setProps({ type: "mushroom" });
    expect(wrapper.find(Mushroom)).toHaveLength(1);
  });
});

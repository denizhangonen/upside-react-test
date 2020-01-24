import React from "react";

import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import OrderSummary from "./OrderSummary";
import Aux from "../../../hoc/Auxlry/Auxlry";
import Button from "../../UI/Button/Button";

configure({ adapter: new Adapter() });

describe("<OrderSummary /> component tests", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<OrderSummary ingredients={[]} price={88} />);
  });

  it("should render a <Aux/> component", () => {
    expect(wrapper.find(Aux).exists()).toBe(true);
  });

  it("should render two <Button/> components", () => {
    expect(wrapper.find(Button)).toHaveLength(2);
  });

  it("should render a <h3> element", () => {
    expect(wrapper.find("h3").exists()).toBe(true);
  });

  it("should render a <ul> element", () => {
    expect(wrapper.find("ul").exists()).toBe(true);
  });

  it("should render two <li> elements when ingredients prop contains two elements", () => {
    wrapper.setProps({ ingredients: ["Eric", "Clapton"] });
    expect(wrapper.find("li").exists()).toBe(true);
  });
});

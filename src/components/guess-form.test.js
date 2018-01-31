import React from "react";
import { shallow, mount } from "enzyme";

import GuessForm from "./guess-form";

describe("<GuessForm />", () => {
  it("Renders without crashing", () => {
    shallow(<GuessForm />);
  });

  it("Should fire the onMakeGuess callback when the form is submitted", () => {
    const callback = jest.fn();
    const wrapper = mount(<GuessForm onMakeGuess={callback} />);
    const value = 2;
    wrapper.find('input[type="number"]').instance().value = value;
    wrapper.simulate("submit");
    expect(callback).toHaveBeenCalledWith(value.toString());
  });

  it("Should not fire onMakeGuess if the input is empty", () => {
    const callback = jest.fn();
    const wrapper = mount(<GuessForm onMakeGuess={callback} />);
    wrapper.instance().value;
    wrapper.simulate("submit");
    expect(callback).not.toHaveBeenCalled;
  });
});

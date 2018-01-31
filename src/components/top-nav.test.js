import React from "react";
import { shallow } from "enzyme";

import TopNav from "./top-nav";

describe("<TopNav />", () => {
  it("Renders without crashing", () => {
    shallow(<TopNav />);
  });

  it("Should call onRestartGame when new game is clicked", () => {
    const callback = jest.fn();
    const wrapper = shallow(<TopNav onRestartGame={callback} />);
    const newGame = wrapper.find(".new");

    newGame.simulate("click", {
      preventDefault() {}
    });
    expect(callback).toHaveBeenCalled();
  });
});

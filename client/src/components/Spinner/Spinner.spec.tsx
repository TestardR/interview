import React from "react";

import { shallow } from "enzyme";
import { findByTestAttr } from "../../test/testUtils";
import Spinner from "./Spinner";

/**
 * Factory function to create a ShallowWrapper for the Spinner component.
 * @function setup
 * @returns {ShallowWrapper}
 */

const setup = (props = {}) => {
  const setupProps = { ...props };
  return shallow(<Spinner {...setupProps} />);
};

describe("<Spinner />", () => {
  test("it should render", () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "component-spinner");
    expect(component.length).toBe(1);
  });
});

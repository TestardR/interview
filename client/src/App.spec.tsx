import React from "react";
import App from "./App";
import { shallow } from "enzyme";
import { findByTestAttr } from "./test/testUtils";

const defaultProps = {};

/**
 * Factory function to create a Wrapper for the App component.
 * @function setup
 * @returns {Wrapper}
 */

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<App {...setupProps} />);
};

describe("<App />", () => {
  test("renders and has a title", () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "component-app");
    expect(component.length).toBe(1);
  });
});

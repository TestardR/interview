import React from "react";

import { shallow } from "enzyme";
import { findByTestAttr } from "../../test/testUtils";
import Film from "./Film";

const defaultProps = {
  film: {
    title: "toto",
    persons: [
      {
        id: "789-1011",
        name: "tata",
      },
    ],
  },
};

/**
 * Factory function to create a ShallowWrapper for the Film component.
 * @function setup
 * @param {array} film - film value specific to this setup.
 * @returns {ShallowWrapper}
 */

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Film {...setupProps} />);
};

describe("if there are films", () => {
  test("it should render", () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "component-film");
    expect(component.length).toBe(1);
  });
});

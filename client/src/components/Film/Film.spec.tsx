import React from "react";

import { shallow } from "enzyme";
import { findByTestAttr } from "../../test/testUtils";
import Film from "./Film";

const defaultProps = {
  title: "foo",
  persons: [
    {
      id: "789-1011",
      name: "bar",
    },
    {
      id: "789-1011",
      name: "foo-bar",
    },
  ],
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

describe("<Film />", () => {
  test("should render", () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "component-film");
    expect(component.length).toBe(1);
  });

  test("should show the film's title", () => {
    const wrapper = setup();
    expect(wrapper.text()).toContain(defaultProps.title);
  });

  test("should show lists of actors", () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "actor-list");
    expect(component.length).toBe(defaultProps.persons.length);
  });
});

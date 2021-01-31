import React from "react";

import { shallow } from "enzyme";
import { findByTestAttr } from "../../test/testUtils";
import FilmList from "./FilmList";

const defaultProps = {
  data: {
    "123-456": {
      title: "toto",
      persons: [],
    },
    "222-456": {
      title: "toto",
      persons: [],
    },
  },
};

/**
 * Factory function to create a ShallowWrapper for the FilmList component.
 * @function setup
 * @param {array} films - films value specific to this setup.
 * @returns {ShallowWrapper}
 */

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<FilmList {...setupProps} />);
};

describe("<FilmList />", () => {
  test("should render", () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "component-film-list");
    expect(component.length).toBe(1);
  });

  test("should render a list of Film", () => {
    const films = Object.entries(defaultProps.data);
    const wrapper = setup();
    expect(wrapper.find("Film").length).toBe(films.length);
  });
});

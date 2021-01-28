import React from "react";

import { shallow } from "enzyme";
import { findByTestAttr } from "../../test/testUtils";
import FilmList from "./FilmList";

const defaultProps = {
  films: [
    {
      "123-456": {
        title: "toto",
        persons: [
          {
            id: "789-1011",
            name: "tata",
          },
        ],
      },
    },
  ],
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

describe("if there are films", () => {
  test("it should render", () => {
    const wrapper = setup({ films: [] });
    const component = findByTestAttr(wrapper, "component-film-list");
    expect(component.length).toBe(1);
  });
});

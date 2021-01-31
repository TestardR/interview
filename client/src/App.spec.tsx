import React from "react";
import App from "./App";
import { shallow } from "enzyme";
import { findByTestAttr } from "./test/testUtils";

const defaultProps = {};

const mockLoading = {
  loading: true,
  data: null,
};

const mockResult = {
  loading: false,
  data: {},
};

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
  test("renders", () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "component-app");
    expect(component.length).toBe(1);
  });

  test("shows a page title", () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "navbar-title");
    expect(component.text()).toContain("movies and actors");
  });

  test("renders a Spinner is loading is true", () => {
    jest.mock("./hooks/useFetch", () => ({
      useFetch: () => mockLoading,
    }));

    const wrapper = setup();
    expect(wrapper.find("Spinner")).toBeTruthy();
  });

  test("renders a FilmList is loading is false and data is truthy", () => {
    jest.mock("./hooks/useFetch", () => ({
      useFetch: () => mockResult,
    }));

    const wrapper = setup();
    expect(wrapper.find("FilmList")).toBeTruthy();
  });
});

import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("should have the correct movie data url", () => {
    const { baseElement } = render(<App />);

    expect(baseElement).toMatchSnapshot();
  });
});

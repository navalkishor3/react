import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page test case", () => {
  // beforeAll(() => {
  //   console.log("Before All");
  // });

  beforeEach(() => {
    render(<Contact />);
  });

  // afterEach(() => {
  //   console.log("After Each");
  // });

  // afterAll(() => {
  //   console.log("After All");
  // });

  it("should load contact us component", () => {
    // render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  it("should load submit button", () => {
    //  render(<Contact />);
    // const button = screen.getByRole("button");
    const SubmitText = screen.getByText("Submit");
    expect(SubmitText).toBeInTheDocument();
  });

  it("should load name input ", () => {
    //  render(<Contact />);
    // const button = screen.getByRole("button");
    const nameInput = screen.getByPlaceholderText("name");
    expect(nameInput).toBeInTheDocument();
  });

  it("should load two input ", () => {
    //  render(<Contact />);
    // const button = screen.getByRole("button");
    const inputs = screen.getAllByRole("textbox");
    expect(inputs.length).toBe(2);
  });
});

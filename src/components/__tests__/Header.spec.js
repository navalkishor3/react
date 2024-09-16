import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

beforeEach(() => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
});

it("Should we load login", () => {
  //   const loginButton = screen.getByRole("button");
  // const loginButton = screen.getByText("Login");
  const loginButton = screen.getByRole("button", { name: "Login" });
  //const loginButton = screen.getByRole("button");
  expect(loginButton).toBeInTheDocument();
});

it("Should we have cart item", () => {
  // render(
  //   <BrowserRouter>
  //     <Provider store={appStore}>
  //       <Header />
  //     </Provider>
  //   </BrowserRouter>
  // );

  //const cartItem = screen.getByText("Cart (0 items)");
  const cartItem = screen.getByText(/Cart/);
  expect(cartItem).toBeInTheDocument();
});

it("Should change login to logout on click", () => {
  // render(
  //   <BrowserRouter>
  //     <Provider store={appStore}>
  //       <Header />
  //     </Provider>
  //   </BrowserRouter>
  // );
  const loginButton = screen.getByRole("button", { name: "Login" });
  fireEvent.click(loginButton);
  const logoutButton = screen.getByRole("button", { name: "Logout" });
  expect(logoutButton).toBeInTheDocument();
});

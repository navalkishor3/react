import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import { act } from "react";
import MOCK_DATA from "../mocks/restMenuMock.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});

it("should load Restaurant Menu Component", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <RestaurantMenu />
      </Provider>
    )
  );

  const accordionHeader = screen.getByText("Rice & Noodles - Full (7)");

  expect(accordionHeader).toBeInTheDocument();
});

it("should open accordion with list of 7 item", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <RestaurantMenu />
      </Provider>
    )
  );

  const accordionHeader = screen.getByText("Rice & Noodles - Full (7)");
  fireEvent.click(accordionHeader);
  const foodItemsList = screen.getAllByTestId("foodItems");
  expect(foodItemsList.length).toBe(7);
});

it("should add  1 item in cart", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordionHeader = screen.getByText("Rice & Noodles - Full (7)");
  fireEvent.click(accordionHeader);
  const addButtons = screen.getAllByRole("button", { name: "Add +" });

  fireEvent.click(addButtons[0]);

  const cartItem = screen.getByText("Cart (1 items)");
  expect(cartItem).toBeInTheDocument();
});

it("should clear cart", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Cart />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordionHeader = screen.getByText("Rice & Noodles - Full (7)");
  fireEvent.click(accordionHeader);

  const clearCartButtton = screen.getByRole("button", { name: "Clear Cart" });
  fireEvent.click(clearCartButtton);

  const emptyCartMsg = screen.getByText("Please add items to cart");

  expect(emptyCartMsg).toBeInTheDocument();
});

it("should add  2 item in cart", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <Cart />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordionHeader = screen.getByText("Rice & Noodles - Full (7)");
  fireEvent.click(accordionHeader);

  const addButtons = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addButtons[0]);
  fireEvent.click(addButtons[1]);

  const cartItem = screen.getByText("Cart (2 items)");
  expect(cartItem).toBeInTheDocument();
});

it("should add  2 item in cart page", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Cart />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordionHeader = screen.getByText("Rice & Noodles - Full (7)");
  fireEvent.click(accordionHeader);

  const clearCartButtton = screen.getByRole("button", { name: "Clear Cart" });
  fireEvent.click(clearCartButtton);

  const addButtons = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addButtons[0]);
  fireEvent.click(addButtons[1]);

  const foodItemsList = screen.getAllByTestId("foodItems");

  expect(foodItemsList.length).toBe(9);
});

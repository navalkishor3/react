import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "./../mocks/restListMock.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

beforeEach(async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
});

it("Should render body component with Search", () => {
  const searchButton = screen.getByRole("button", { name: "Search" });
  expect(searchButton).toBeInTheDocument();
});

it("Should render body component with 20 items", () => {
  const restCardList = screen.getAllByTestId("restCard");
  expect(restCardList.length).toBe(20);
});

it("Should search subway", () => {
  const searchButton = screen.getByRole("button", { name: "Search" });
  const searchInput = screen.getByTestId("searchInput");
  fireEvent.change(searchInput, { target: { value: "subway" } });
  fireEvent.click(searchButton);
  const restCardList = screen.getAllByTestId("restCard");
  expect(restCardList.length).toBe(1);
});

it("Should search top rated restaurant", () => {
  const restCardListB = screen.getAllByTestId("restCard");
  expect(restCardListB.length).toBe(20);

  const topRatedButton = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });
  fireEvent.click(topRatedButton);
  const restCardList = screen.getAllByTestId("restCard");
  expect(restCardList.length).toBe(7);
});

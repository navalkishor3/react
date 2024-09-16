import { render, screen } from "@testing-library/react";
import RestaurantCard, { withPromptedLabel } from "../RestaurantCard";
import MOCK_DATA from "../mocks/restCardMock.json";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

it("should render restaurant card with prop data", () => {
  render(
    <BrowserRouter>
      <RestaurantCard resData={MOCK_DATA} />
    </BrowserRouter>
  );

  const name = screen.getByText("Subway");
  expect(name).toBeInTheDocument();
});

it("should render higher order component promoted", () => {
  const RestaurantCardPromoted = withPromptedLabel(RestaurantCard);
  render(
    <BrowserRouter>
      <RestaurantCardPromoted resData={MOCK_DATA} />
    </BrowserRouter>
  );

  const promoted = screen.getByText("Promoted");
  expect(promoted).toBeInTheDocument();
});

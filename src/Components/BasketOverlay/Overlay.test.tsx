import { render, screen, fireEvent } from "@testing-library/react";
import BasketOverlay from "./index";
import { Item } from "../ShoppingItems/types";
import {
  calculateDiscountForA,
  calculateDiscountForB,
  calculateTotalPrice,
} from "./helperFunctions";

jest.mock("./helperFunctions", () => ({
  calculateDiscountForA: jest.fn(),
  calculateDiscountForB: jest.fn(),
  calculateTotalPrice: jest.fn(),
}));

describe("BasketOverlay", () => {
  const mockClose = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    // Mock the methods we want to track
    // Mock localStorage.clear using Object.defineProperty
    Object.defineProperty(global, "localStorage", {
      value: {
        clear: jest.fn(),
      },
      writable: true,
    });

    // Mock window.location.reload using Object.defineProperty
    Object.defineProperty(window, "location", {
      value: {
        ...window.location,
        reload: jest.fn(),
      },
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("handles the 'clear cart' button", () => {
    // Arrange
    const cart: Item[] = [
      { id: "a", name: "Item A", price: 10, quantity: 2, url: "item-a.jpg" },
    ];
    const isVisible = true;

    // Mock the discount and total calculation functions
    (calculateDiscountForA as jest.Mock).mockReturnValue(20); // Mocked return value for A
    (calculateDiscountForB as jest.Mock).mockReturnValue(15); // Mocked return value for B
    (calculateTotalPrice as jest.Mock).mockReturnValue(35); // Mocked return value for total price

    // Act
    render(
      <BasketOverlay cart={cart} isVisible={isVisible} onClose={mockClose} />
    );

    // Trigger the 'Clear Cart' button click
    fireEvent.click(screen.getByText("Clear Cart"));

    // Assert
    expect(localStorage.clear).toHaveBeenCalled();
    expect(window.location.reload).toHaveBeenCalled();
  });

  it("renders empty basket message when cart is empty", () => {
    // Arrange
    const cart: Item[] = [];
    const isVisible = true;

    // Act
    render(
      <BasketOverlay cart={cart} isVisible={isVisible} onClose={mockClose} />
    );

    // Assert that the "Your basket is empty" message is displayed
    expect(screen.getByText("Your basket is empty")).toBeInTheDocument();
  });
});

import { render, screen, fireEvent } from "@testing-library/react";
import CartComponent from "./index";

// Test suite for CartComponent
describe("CartComponent", () => {
  // Scenario 1: Verifying correct item count is rendered
  it("renders the correct item count", () => {
    // Arrange
    const itemCount = 5; // Simulate the count of items
    const mockToggleOverlay = jest.fn(); // Create a mock function for toggleOverlay

    // Act
    render(
      <CartComponent itemCount={itemCount} toggleOverlay={mockToggleOverlay} />
    );

    // Assert
    // Check if the cart counter displays the correct item count
    const cartCounter = screen.getByText(itemCount.toString()); // Get by the exact count
    expect(cartCounter).toBeInTheDocument();
  });
});

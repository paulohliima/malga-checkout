import CartDesktop from "@/components/cartDesktop";
import { IItem } from "@/interfaces/transactions";
import { CartProvider } from "@/providers/cartProvider";
import { render, screen } from "@testing-library/react";

describe("Carrinho de Produtos", () => {
  beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  const products: IItem[] = [
    { name: "Notebook", quantity: 1, amount: 12000 },
    { name: "Mouse", quantity: 5, amount: 300 },
  ];

  it("renderiza os produtos na lista do carrinho", () => {
    render(
      <CartProvider>
        <CartDesktop products={products} />
      </CartProvider>
    );

    expect(screen.getByText("Notebook x1")).toBeInTheDocument();
    expect(screen.getByText("R$ 12.000,00")).toBeInTheDocument();

    expect(screen.getByText("Mouse x5")).toBeInTheDocument();
    expect(screen.getByText("R$ 300,00")).toBeInTheDocument();
  });
});

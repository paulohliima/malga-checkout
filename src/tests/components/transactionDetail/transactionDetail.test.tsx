import { render, screen } from "@testing-library/react";

import { ITransactionResponse } from "@/interfaces/transactions";
import TransactionDetailModal from "@/components/modals/transactionDetail";

describe("Detalhes da Transação - Gestão", () => {
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

  const transactionDetail: ITransactionResponse = {
    id: "1",
    status: "authorized",
    amount: 100,
    customer: {
      firstName: "João",
      lastName: "Silva",
      document: { type: "cpf", number: "12345678900" },
      address: {
        city: "São Paulo",
        street: "Rua A",
        number: "100",
        country: "Brasil",
        state: "SP",
        neighborhood: "Centro",
      },
    },
    items: [{ name: "Produto 1", quantity: 1, amount: 100 }],
    paymentMethod: {
      type: "card",
      card: {
        holderName: "João Silva",
        expirationDate: "12/2025",
        installments: 1,
      },
    },
  };

  it("renderiza os detalhes do card conforme a transação passada", () => {
    render(
      <TransactionDetailModal
        onClose={() => false}
        open={true}
        transaction={transactionDetail}
      />
    );

    expect(screen.getByText("Produto 1")).toBeInTheDocument();
    expect(screen.getByText("Quantidade: 1")).toBeInTheDocument();
    expect(screen.getByText("R$ 100,00")).toBeInTheDocument();

    expect(screen.getByText("São Paulo")).toBeInTheDocument();
    expect(screen.getByText("Rua A, 100")).toBeInTheDocument();
    expect(screen.getByText("Brasil")).toBeInTheDocument();
    expect(screen.getByText("SP")).toBeInTheDocument();
    expect(screen.getByText("Centro")).toBeInTheDocument();

    expect(screen.getByText("Pagamento com Cartão")).toBeInTheDocument();
    const joaoSilvas = screen.getAllByText("João Silva");
    expect(joaoSilvas.length).toBeGreaterThan(0);
    expect(screen.getByText("12/2025")).toBeInTheDocument();
  });
});

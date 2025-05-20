import { render, screen } from "@testing-library/react";
import CardList from "@/components/cardList";
import { ITransactionResponse } from "@/interfaces/transactions";
import { LoadingProvider } from "@/providers/loadingProvider";

// Se necessário, mock apenas o useTransactions:
jest.mock("@/providers/transactionsProvider", () => ({
  useTransactions: () => ({
    loading: false,
    transactionsValues: [],
    setTransactionsValues: jest.fn(),
    pageValues: { currentPage: 1 },
    setPageValues: jest.fn(),
  }),
}));

describe("Lista de Transações - Gestão", () => {
  const transactionsMock: ITransactionResponse[] = [
    {
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
          expirationDate: "12/26",
          installments: 1,
        },
      },
    },
  ];

  it("renderiza os cards conforme as transactions passadas", () => {
    render(
      <LoadingProvider>
        <CardList transactions={transactionsMock} />
      </LoadingProvider>
    );

    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("Autorizado")).toBeInTheDocument();
    expect(screen.getByText("Cartão de Crédito")).toBeInTheDocument();
  });
});

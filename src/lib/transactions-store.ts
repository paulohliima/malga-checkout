import { ITransactionResponse } from "../interfaces/transactions";

export const transactions: ITransactionResponse[] = [
  {
    id: "3a8f0e3b-65a3-4e9c-8f2b-42f9a8a91c99",
    status: "authorized",
    amount: 10000,
    customer: {
      firstName: "Paulo",
      lastName: "Lima",
      document: { type: "cpf", number: "12345678900" },
      address: {
        city: "Belém",
        street: "Rua X",
        number: "123",
        country: "Brasil",
        state: "PA",
        neighborhood: "Centro",
      },
    },
    items: [{ name: "Produto 1", quantity: 2, amount: 5000 }],
    paymentMethod: {
      type: "card",
      card: {
        holderName: "Paulo Lima",
        expirationDate: "12/2030",
        installments: 1,
        firstDigits: "4111",
        lastDigits: "1111",
      },
    },
  },
];

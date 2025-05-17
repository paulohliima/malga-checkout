import { ITransactionResponse } from "../interfaces/transactions";

export const transactions: ITransactionResponse[] = [
  {
    id: "1",
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
  {
    id: "2",
    status: "failed",
    amount: 7500,
    customer: {
      firstName: "Ana",
      lastName: "Silva",
      document: { type: "cpf", number: "98765432100" },
      address: {
        city: "São Paulo",
        street: "Av. Paulista",
        number: "1000",
        country: "Brasil",
        state: "SP",
        neighborhood: "Bela Vista",
      },
    },
    items: [{ name: "Curso Online", quantity: 1, amount: 7500 }],
    paymentMethod: {
      type: "pix",
      pix: {
        qrCodeUrl: "https://api.exemplo.com/qrcode/pix/123.png",
        expiresAt: "2025-12-31T23:59:59Z",
        transactionId: "PIX123456789ABCDEFG",
      },
    },
  },
  {
    id: "3",
    status: "authorized",
    amount: 15000,
    customer: {
      firstName: "Carlos",
      lastName: "Oliveira",
      document: { type: "cpf", number: "45678912300" },
      address: {
        city: "Curitiba",
        street: "Rua das Flores",
        number: "456",
        country: "Brasil",
        state: "PR",
        neighborhood: "Centro",
      },
    },
    items: [
      { name: "Notebook", quantity: 1, amount: 12000 },
      { name: "Mouse", quantity: 1, amount: 3000 },
    ],
    paymentMethod: {
      type: "ticket",
      ticket: {
        barcode: "23793381286008200004123000050804375690000010000",
        digitableLine: "23790.38128 60082.000041 23000.050804 3 75690000010000",
        url: "https://api.exemplo.com/boletos/123456.pdf",
        dueDate: "2025-11-15",
      },
    },
  },
];

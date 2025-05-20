import { ITransactionResponse } from "@/interfaces/transactions";
import { transactions } from "@/lib/transactions-store";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ITransactionResponse | { message: string }>
) {
  const { id } = req.query;

  const findTransaction = transactions.find(
    (transaction) => transaction.id === id
  );

  if (findTransaction?.paymentMethod?.card?.number) {
    const first4 = findTransaction.paymentMethod.card.number.slice(0, 4);
    const last4 = findTransaction.paymentMethod.card.number.slice(-4);

    findTransaction.paymentMethod.card.firstDigits = first4;
    findTransaction.paymentMethod.card.lastDigits = last4;
  }

  if (!findTransaction) {
    return res.status(404).json({ message: "Transação não encontrada." });
  }

  if (req.method === "GET") {
    return res.status(200).json(findTransaction);
  }

  res.setHeader("Allow", ["GET"]);
  res.status(405).json({ message: `Method ${req.method} Not Allowed` });
}

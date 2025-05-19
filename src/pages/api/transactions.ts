import type { NextApiRequest, NextApiResponse } from "next";

import {
  ITransactionRequest,
  ITransactionResponse,
  TransactionStatus,
} from "@/interfaces/transactions";
import { transactions } from "@/lib/transactions-store";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<
    ITransactionResponse[] | ITransactionResponse | { message: string }
  >
) {
  if (req.method === "GET") {
    const { page } = req.query;

    if (page !== undefined) {
      const pageNumber = parseInt(page as string, 10);
      const limit = 10;

      const startIndex = (pageNumber - 1) * limit;
      const endIndex = pageNumber * limit;

      const paginatedTransactions = transactions.slice(startIndex, endIndex);
      return res.status(200).json(paginatedTransactions);
    }

    return res.status(200).json(transactions);
  }

  if (req.method === "POST") {
    const newTransaction = req.body as ITransactionRequest;

    const lastId = Number(transactions[transactions.length - 1].id) + 1;

    const transaction = {
      id: lastId.toString(),
      status: TransactionStatus.AUTHORIZED,
      ...newTransaction,
    };

    transactions.push(transaction);

    return res.status(201).json(transaction);
  }

  res.setHeader("Allow", ["GET", "POST"]);
  res.status(405).json({ message: `Method ${req.method} Not Allowed` });
}

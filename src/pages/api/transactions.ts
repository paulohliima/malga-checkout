import type { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuidv4 } from "uuid";

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
    return res.status(200).json(transactions);
  }

  if (req.method === "POST") {
    const newTransaction = req.body as ITransactionRequest;

    const transaction = {
      id: uuidv4(),
      status: TransactionStatus.AUTHORIZED,
      ...newTransaction,
    };

    transactions.push(transaction);

    return res.status(201).json(transaction);
  }

  res.setHeader("Allow", ["GET", "POST"]);
  res.status(405).json({ message: `Method ${req.method} Not Allowed` });
}

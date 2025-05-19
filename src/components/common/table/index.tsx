import * as S from "./style";
import { ITransactionResponse } from "@/interfaces/transactions";
import {
  Box,
  Pagination,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { IoReaderOutline } from "react-icons/io5";

import { transactionsService } from "@/services/transactionsService";
import { toast } from "react-toastify";
import { useState } from "react";
import TransactionDetailModal from "@/components/modals/transactionDetail";
import useTranslate from "@/hooks/useTranslate";
import { useTransactions } from "@/providers/transactionsProvider";
import { useLoading } from "@/providers/loadingProvider";

interface ICustomTable {
  transactions: ITransactionResponse[];
}

const CustomTable = ({ transactions }: ICustomTable) => {
  const { loading } = useLoading();
  const { getStatusInfo, getPaymentMethodInfo } = useTranslate();
  const { setTransactionsValues, allTransactions, pageValues, setPageValues } =
    useTransactions();

  const [openModalDetails, setOpenModalDetails] = useState(false);

  const [transactionDetail, setTransactionDetail] =
    useState<ITransactionResponse>();

  const handleChangePage = async (
    _event: React.ChangeEvent<unknown>,
    newPage: number
  ) => {
    try {
      const response = await transactionsService.getAll({ page: newPage });
      setTransactionsValues(response);
      setPageValues(() => ({
        currentPage: newPage,
        totalPages: Math.ceil(allTransactions.length / 10),
      }));
    } catch (e) {
      console.error("Erro ao mudar de página:", e);
    }
  };

  const handleOpenDetailsTransaction = async (id?: string) => {
    try {
      if (id) {
        const data = await transactionsService.findOne(id);
        setTransactionDetail(data);
        setOpenModalDetails(true);
      }
    } catch (e: unknown) {
      if (e instanceof Error) {
        toast.error(e.message);
      } else {
        toast.error("Erro desconhecido");
      }
    }
  };

  return (
    <S.Container>
      <TableContainer
        sx={{
          overflowX: "auto",
          maxWidth: "1000px",
          minHeight: "600px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
        }}
      >
        <Table
          size={"small"}
          sx={{
            borderSpacing: "0 4px",
            borderCollapse: "separate",
          }}
        >
          <TableHead>
            <TableRow
              sx={{
                backgroundColor: "var(--color-profile-2)",
              }}
            >
              <TableCell
                align="center"
                sx={{
                  fontWeight: 600,
                  fontSize: "16px",
                  color: "var(--color-white)",
                  borderBottom: "2px solid #e0e0e0",
                  padding: "16px",
                  borderRadius: "6px 0 0 6px",
                }}
              >
                Id
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  fontWeight: 600,
                  fontSize: "16px",
                  color: "var(--color-white)",
                  borderBottom: "2px solid #e0e0e0",
                  padding: "12px",
                }}
              >
                Status
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  fontWeight: 600,
                  fontSize: "16px",
                  color: "var(--color-white)",
                  borderBottom: "2px solid #e0e0e0",
                  padding: "12px",
                  whiteSpace: "nowrap",
                }}
              >
                Método de Pagamento
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  fontWeight: 600,
                  fontSize: "16px",
                  color: "var(--color-white)",
                  borderBottom: "2px solid #e0e0e0",
                  padding: "12px",
                  borderRadius: "0 6px 6px 0",
                }}
              >
                Opções
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              transactions.map((_, i) => (
                <TableRow key={`skeleton-${i}`}>
                  <TableCell colSpan={4}>
                    <Skeleton variant="rounded" height={50} />
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <>
                {transactions.map((transaction: ITransactionResponse) => {
                  const { status, statusColor } = getStatusInfo(
                    transaction.status
                  );
                  const { label, icon } = getPaymentMethodInfo(
                    transaction.paymentMethod.type
                  );

                  return (
                    <TableRow
                      key={transaction.id}
                      sx={{
                        backgroundColor: "#fff",
                        boxShadow: "0 2px 12px rgba(0, 0, 0, 0.05)",
                        transition: "all 0.2s ease",
                        cursor: "pointer",
                        "&:hover": {
                          backgroundColor: "rgba(0, 0, 0, 0.02)",
                          transform: "scale(1.01)",
                          boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
                        },
                      }}
                    >
                      <TableCell
                        align="center"
                        sx={{
                          fontSize: "var(--font-size-20)",
                          padding: "16px",
                          borderRadius: "6px 0 0 6px",
                        }}
                      >
                        {transaction.id}
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ fontSize: "var(--font-size-20)" }}
                      >
                        <Box
                          sx={{
                            backgroundColor: statusColor,
                            color: "#fff",
                            borderRadius: "8px",
                            padding: "2px 8px",
                            display: "inline-block",
                            fontWeight: 500,
                            fontSize: "14px",
                            textTransform: "capitalize",
                          }}
                        >
                          {status}
                        </Box>
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ fontSize: "var(--font-size-20)" }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            fontFamily: "var(--lexend)",
                          }}
                        >
                          <S.IconType src={icon} alt={label} $size={38} />
                          {label}
                        </Box>
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{
                          fontSize: "var(--font-size-20)",
                          borderRadius: "0px 6px 6px 0px",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <IoReaderOutline
                            style={{
                              width: "30px",
                              height: "30px",
                              color: "var(--color-profile-3)",
                              cursor: "pointer",
                            }}
                            onClick={() =>
                              handleOpenDetailsTransaction(transaction.id)
                            }
                          />
                        </Box>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </>
            )}
          </TableBody>
        </Table>
        <S.FooterTable>
          <Pagination
            count={pageValues.totalPages}
            page={pageValues.currentPage}
            onChange={handleChangePage}
            color="primary"
            sx={{ mt: 2, display: "flex", justifyContent: "center" }}
          />
        </S.FooterTable>
      </TableContainer>
      {transactionDetail && (
        <TransactionDetailModal
          onClose={() => setOpenModalDetails(false)}
          open={openModalDetails}
          transaction={transactionDetail}
        />
      )}
    </S.Container>
  );
};

export default CustomTable;

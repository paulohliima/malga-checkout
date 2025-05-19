import * as S from "./style";
import { useState } from "react";
import { Box } from "@mui/material";
import { toast } from "react-toastify";
import { TbWindowMaximize } from "react-icons/tb";

import useTranslate from "@/hooks/useTranslate";
import LoadingText from "../../common/loadingText";
import { useLoading } from "@/providers/loadingProvider";
import { ITransactionResponse } from "@/interfaces/transactions";
import TransactionDetailModal from "../../modals/transactionDetail";
import { transactionsService } from "@/services/transactionsService";

interface ITransactionCard {
  transaction: ITransactionResponse;
}

const TransactionCard = ({ transaction }: ITransactionCard) => {
  const { loading } = useLoading();
  const { getStatusInfo, getPaymentMethodInfo } = useTranslate();
  const [openModalDetails, setOpenModalDetails] = useState(false);
  const [transactionDetail, setTransactionDetail] =
    useState<ITransactionResponse>();

  const { icon: methodIcon, label: methodLabel } = getPaymentMethodInfo(
    transaction.paymentMethod.type
  );

  const { status, statusColor } = getStatusInfo(transaction.status);

  const handleOpenDetailsTransaction = async () => {
    try {
      if (transaction.id) {
        const data = await transactionsService.findOne(transaction.id);
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
    <>
      <S.Container>
        <S.StatusDiv $bgcolor={!loading ? statusColor : "transparent"} />
        <S.Column>
          <S.Row>
            {loading ? (
              <LoadingText width="48px" height="80px" />
            ) : (
              <S.MethodIcon src={methodIcon}></S.MethodIcon>
            )}
            <S.DividerVertical />
            <S.Column>
              <S.StatusContainer>
                {loading ? (
                  <LoadingText width="40px" height="18px" />
                ) : (
                  <S.Bold>Status:</S.Bold>
                )}
                {loading ? (
                  <LoadingText width="90px" height="22px" />
                ) : (
                  <Box
                    sx={{
                      backgroundColor: statusColor,
                      color: "#fff",
                      borderRadius: "8px",
                      padding: "2px 8px",
                      fontWeight: 500,
                      textTransform: "capitalize",
                      width: "max-content",
                    }}
                  >
                    <S.StatusLabel>{status}</S.StatusLabel>
                  </Box>
                )}
              </S.StatusContainer>
              <S.MethodContainerLabel>
                {loading ? (
                  <LoadingText width="140px" height="14px" />
                ) : (
                  <S.Bold>Método de Pagamento:</S.Bold>
                )}
                {loading ? (
                  <LoadingText width="150px" height="18px" />
                ) : (
                  <S.MethodLabel>{methodLabel}</S.MethodLabel>
                )}
              </S.MethodContainerLabel>
            </S.Column>
          </S.Row>
        </S.Column>
        <S.Column>
          {loading ? (
            <LoadingText width="30px" height="30px" />
          ) : (
            <S.IdLabel>
              <S.Bold>#ID:</S.Bold> {transaction.id}
            </S.IdLabel>
          )}
          {loading ? (
            <LoadingText width="40px" height="80px" />
          ) : (
            <TbWindowMaximize
              style={{
                width: "40px",
                height: "40px",
                color: "var(--color-profile-2)",
              }}
              onClick={handleOpenDetailsTransaction}
            />
          )}
        </S.Column>
      </S.Container>

      {transactionDetail && (
        <TransactionDetailModal
          onClose={() => setOpenModalDetails(false)}
          open={openModalDetails}
          transaction={transactionDetail}
        />
      )}
    </>
  );
};

export default TransactionCard;

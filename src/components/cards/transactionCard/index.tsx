import { ITransactionResponse } from "@/interfaces/transactions";
import { TbWindowMaximize } from "react-icons/tb";

import * as S from "./style";
import LoadingText from "../../common/loadingText";
import { useLoading } from "@/providers/loadingProvider";
import { useState } from "react";
import TransactionDetailModal from "../../modals/transactionDetail";
import { transactionsService } from "@/services/transactionsService";
import { toast } from "react-toastify";
import useTranslate from "@/hooks/useTranslate";
import { Box } from "@mui/material";

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
              <LoadingText width="60px" height="100px" />
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
                  <LoadingText width="140px" height="18px" />
                ) : (
                  <S.Bold>Método de Pagamento:</S.Bold>
                )}
                {loading ? (
                  <LoadingText width="150px" height="22px" />
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
            <S.ContainerIdLabel>
              <S.IdLabel>
                <S.Bold>#ID:</S.Bold> {transaction.id}
              </S.IdLabel>
            </S.ContainerIdLabel>
          )}
          {loading ? (
            <LoadingText width="40px" height="80px" />
          ) : (
            <TbWindowMaximize
              style={{
                width: "40px",
                height: "40px",
                color: "#006f7d",
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

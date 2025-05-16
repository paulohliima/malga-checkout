import { ITransactionResponse } from "@/interfaces/transactions";
import * as S from "./style";

interface ITransactionCard {
  transaction: ITransactionResponse;
}

const getPaymentMethodInfo = (type: string) => {
  switch (type) {
    case "card":
      return {
        icon: "/assets/images/credit-card.png",
        label: "Cartão de Crédito",
      };
    case "pix":
      return {
        icon: "/assets/images/pix.svg",
        label: "Pix",
      };
    case "ticket":
      return {
        icon: "/assets/images/ticket.png",
        label: "Boleto",
      };
    default:
      return {
        icon: "",
        label: "Outro",
      };
  }
};

const getStatusInfo = (type: string) => {
  switch (type) {
    case "authorized":
      return {
        status: "Autorizado",
        statusColor: "#00c26b",
      };
    case "failed":
      return {
        status: "Fracassado",
        statusColor: "#cd2b31",
      };
    default:
      return {
        status: "Outro",
        statusColor: "blue",
      };
  }
};

const TransactionCard = ({ transaction }: ITransactionCard) => {
  const { icon: methodIcon, label: methodLabel } = getPaymentMethodInfo(
    transaction.paymentMethod.type
  );

  const { status, statusColor } = getStatusInfo(transaction.status);

  return (
    <S.Container>
      <S.StatusDiv backgroundColor={statusColor} />
      <S.Column>
        <S.Row>
          <S.MethodContainer>
            <S.MethodIcon src={methodIcon}></S.MethodIcon>
          </S.MethodContainer>
          <S.Column>
            <S.StatusLabel>{status}</S.StatusLabel>
            <S.IdLabel>Id: {transaction.id}</S.IdLabel>
          </S.Column>
        </S.Row>
      </S.Column>
      <S.Column>
        <S.MethodLabel>{methodLabel}</S.MethodLabel>
      </S.Column>
    </S.Container>
  );
};

export default TransactionCard;

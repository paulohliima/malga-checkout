/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useCart } from "@/providers/cartProvider";
import CustomButton from "../../button";
import * as S from "./style";
import useTranslate from "@/hooks/useTranslate";
import useMediaQuery from "@/hooks/useMediaQuery";

interface ISummaryForm {
  handleNext: () => void;
  handleBack: () => void;
}

const SummaryForm = ({ handleNext, handleBack }: ISummaryForm) => {
  const isMobile = useMediaQuery(1024);
  const { customer, mockupProducts, payment, totalAmount } = useCart();
  const { convertCurrency, getPaymentMethodInfo } = useTranslate();

  //@ts-ignore
  const first4 = payment?.card?.number.slice(0, 4);
  //@ts-ignore
  const last4 = payment?.card?.number.slice(-4);

  return (
    <S.Container>
      <S.Title>Resumo da Compra</S.Title>

      <S.DividerRow />

      <S.Section>
        <S.SubTitle>Cliente:</S.SubTitle>
        <S.InfoRow>
          <S.InfoLabel>Nome:</S.InfoLabel>
          <S.InfoValue>
            {customer?.firstName} {customer?.lastName}
          </S.InfoValue>
        </S.InfoRow>
        <S.InfoRow>
          <S.InfoLabel>Documento:</S.InfoLabel>
          <S.InfoValue>
            {customer?.document.type?.toUpperCase()} -{" "}
            {customer?.document.number}
          </S.InfoValue>
        </S.InfoRow>
        <S.InfoRow>
          <S.InfoLabel>Endereço:</S.InfoLabel>
          <S.InfoValue>
            {customer?.address.street}, {customer?.address.number} -{" "}
            {customer?.address.neighborhood}, {customer?.address.city} -{" "}
            {customer?.address.state}, {customer?.address.country}
          </S.InfoValue>
        </S.InfoRow>
      </S.Section>

      {isMobile && (
        <>
          <S.DividerRow />
          <S.Section>
            <S.SubTitle>Produtos:</S.SubTitle>
            <S.ItemList>
              {mockupProducts.map((item, index) => (
                <S.Item key={index}>
                  <span>
                    {item.name} x{item.quantity}
                  </span>
                  <span>{convertCurrency(item.amount)}</span>
                </S.Item>
              ))}
            </S.ItemList>
          </S.Section>
        </>
      )}

      <S.DividerRow />
      <S.Section>
        <S.SubTitle>Pagamento:</S.SubTitle>
        <S.InfoRow>
          <S.InfoLabel>Método:</S.InfoLabel>
          <S.InfoValue>{getPaymentMethodInfo(payment?.type).label}</S.InfoValue>
        </S.InfoRow>
        {payment?.type === "card" && (
          <>
            <S.InfoRow>
              <S.InfoLabel>Cartão:</S.InfoLabel>
              <S.InfoValue>
                {first4} **** **** {last4}
              </S.InfoValue>
            </S.InfoRow>
            <S.InfoRow>
              <S.InfoLabel>Parcelas:</S.InfoLabel>
              <S.InfoValue>
                {payment?.card?.installments} x{" "}
                {payment?.card?.installments &&
                  convertCurrency(totalAmount / payment?.card?.installments)}
              </S.InfoValue>
            </S.InfoRow>
          </>
        )}
      </S.Section>

      <S.DividerRow />

      {isMobile && (
        <S.Section>
          <S.InfoRow>
            <S.SubTitle>Total:</S.SubTitle>
            <S.InfoValue>{convertCurrency(totalAmount)}</S.InfoValue>
          </S.InfoRow>
        </S.Section>
      )}

      <S.FooterButtons>
        <CustomButton
          label="Finalizar Compra"
          variant="contained"
          color="var(--color-white)"
          onClick={handleNext}
        />
        <CustomButton
          label="Voltar"
          variant="text"
          color="var(--failed-1)"
          onClick={handleBack}
          sxStyle={{
            borderColor: "var(--failed-1)",
          }}
        />
      </S.FooterButtons>
    </S.Container>
  );
};

export default SummaryForm;

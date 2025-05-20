import * as S from "./style";
import useMediaQuery from "@/hooks/useMediaQuery";

import { useState } from "react";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import { MdOutlineClose } from "react-icons/md";
import {
  ICustomer,
  IItem,
  IPaymentMethod,
  ITransactionResponse,
} from "@/interfaces/transactions";

import ProductsList from "@/components/productsList";

interface ITransactionDetailModal {
  open: boolean;
  onClose: () => void;
  transaction: ITransactionResponse;
}

interface ITabProducts {
  items: IItem[];
}

interface ITabClient {
  customer: ICustomer;
  payment: IPaymentMethod;
}

const TabProducts = ({ items }: ITabProducts) => {
  const totalValue = items.reduce((sum, item) => {
    return sum + item.amount * item.quantity;
  }, 0);

  const formatCurrency = (value: number) =>
    value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
    });

  return (
    <S.Container>
      <ProductsList products={items} />
      <S.Divider />
      <S.TotalValue>Total: {formatCurrency(totalValue)}</S.TotalValue>
    </S.Container>
  );
};

const TabClientAndPayment = ({ customer, payment }: ITabClient) => {
  const { firstName, lastName, document, address } = customer;

  const renderPaymentInfo = () => {
    switch (payment.type) {
      case "card":
        return (
          <>
            <S.SectionTitle>Pagamento com Cartão</S.SectionTitle>

            <S.Row>
              <S.InfoGroup>
                <S.Label>Nome no Cartão:</S.Label>
                <S.Value>{payment.card?.holderName}</S.Value>
              </S.InfoGroup>
              <S.InfoGroup>
                <S.Label $textAlign="end">Parcelas:</S.Label>
                <S.Value $textAlign="end">
                  {payment.card?.installments}x
                </S.Value>
              </S.InfoGroup>
            </S.Row>
            <S.Row>
              <S.InfoGroup>
                <S.Label>Data de Validade:</S.Label>
                <S.Value>{payment.card?.expirationDate}</S.Value>
              </S.InfoGroup>
              {(payment.card?.firstDigits || payment.card?.lastDigits) && (
                <S.InfoGroup>
                  <S.Label $textAlign="end">Cartão:</S.Label>
                  <S.Value $textAlign="end">
                    {payment.card?.firstDigits}••••••••
                    {payment.card?.lastDigits}
                  </S.Value>
                </S.InfoGroup>
              )}
            </S.Row>
          </>
        );

      case "pix":
        return (
          <>
            <S.SectionTitle>Pagamento via Pix</S.SectionTitle>
            <S.InfoGroup>
              <S.Label>Expira em:</S.Label>
              <S.Value>{payment.pix?.expiresAt}</S.Value>
            </S.InfoGroup>
            {payment.pix?.transactionId && (
              <S.InfoGroup>
                <S.Label>ID da Transação:</S.Label>
                <S.Value>{payment.pix?.transactionId}</S.Value>
              </S.InfoGroup>
            )}
            <S.InfoGroup>
              <S.Label>QR Code:</S.Label>
              <S.Value>
                <a
                  href={payment.pix?.qrCodeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visualizar QR Code
                </a>
              </S.Value>
            </S.InfoGroup>
          </>
        );

      case "ticket":
        return (
          <>
            <S.SectionTitle>Pagamento por Boleto</S.SectionTitle>
            <S.InfoGroup>
              <S.Label>Linha Digitável:</S.Label>
              <S.Value>{payment.ticket?.digitableLine}</S.Value>
            </S.InfoGroup>
            <S.InfoGroup>
              <S.Label>Vencimento:</S.Label>
              <S.Value>{payment.ticket?.dueDate}</S.Value>
            </S.InfoGroup>
            <S.InfoGroup>
              <S.Label>Link do Boleto:</S.Label>
              <S.Value>
                <a
                  href={payment.ticket?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visualizar Boleto
                </a>
              </S.Value>
            </S.InfoGroup>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <S.ContainerTab>
      <S.SectionTitle>Resumo do Cliente</S.SectionTitle>

      <S.Row>
        <S.InfoGroup>
          <S.Label>Nome do Cliente:</S.Label>
          <S.Value>
            {firstName} {lastName}
          </S.Value>
        </S.InfoGroup>

        <S.InfoGroup>
          <S.Label $textAlign="end">Documento:</S.Label>
          <S.Value $textAlign="end">{document.type.toUpperCase()}</S.Value>
          <S.Value $textAlign="end">{document.number}</S.Value>
        </S.InfoGroup>
      </S.Row>

      <S.Divider />

      <S.SectionTitle>Endereço</S.SectionTitle>

      <S.Row>
        <S.InfoGroup>
          <S.Label>País:</S.Label>
          <S.Value>{address.country}</S.Value>
        </S.InfoGroup>

        <S.InfoGroup>
          <S.Label $textAlign="end">Estado:</S.Label>
          <S.Value>{address.state}</S.Value>
        </S.InfoGroup>
      </S.Row>
      <S.Row>
        <S.InfoGroup>
          <S.Label>Cidade:</S.Label>
          <S.Value>{address.city}</S.Value>
        </S.InfoGroup>

        <S.InfoGroup>
          <S.Label $textAlign="end">Bairro:</S.Label>
          <S.Value>{address.neighborhood}</S.Value>
        </S.InfoGroup>
      </S.Row>
      <S.InfoGroup>
        <S.Label>Rua:</S.Label>
        <S.Value>
          {address.street}, {address.number}
        </S.Value>
      </S.InfoGroup>

      <S.Divider />
      {renderPaymentInfo()}
    </S.ContainerTab>
  );
};

const TransactionDetailModal = ({
  open,
  onClose,
  transaction,
}: ITransactionDetailModal) => {
  const isMobile = useMediaQuery();
  const isLaptop = useMediaQuery(1023);
  const [value, setValue] = useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const modalBoxStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center", // <-- corrigido aqui
    width: !isLaptop ? "800px" : "100vw",
    height: !isLaptop ? "700px" : "100vh",
    maxHeight: "100vh",
    bgcolor: "var(--color-brand-5)",
    p: 3,
    mx: "auto",
    overflowY: "auto",
    color: "#000",
    boxShadow: "var(--box-shadow-1)",
    borderRadius: !isLaptop ? "8px" : "0",
    zIndex: 1400,
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      BackdropProps={{
        style: {
          display: !isLaptop ? "block" : "none",
        },
      }}
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 300,
        },
      }}
    >
      <Box
        sx={{
          display: !isLaptop ? "flex" : "block",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Fade in={open}>
          <Box sx={modalBoxStyle}>
            <S.Container>
              <S.ContainerTitle>
                <MdOutlineClose
                  onClick={onClose}
                  style={{
                    width: "26px",
                    height: "26px",
                    color: "var(--grey-1)",
                    cursor: "pointer",
                  }}
                />
              </S.ContainerTitle>

              <TabContext value={value}>
                {isMobile ? (
                  <>
                    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                      <TabList
                        onChange={handleChange}
                        aria-label="lab API tabs example"
                        sx={{
                          "& .MuiTabs-indicator": {
                            backgroundColor: "var(--color-profile-3)",
                          },
                        }}
                      >
                        <Tab
                          label="Produtos"
                          value="1"
                          sx={{
                            color: "var(--color-profile-1)",
                            "&.Mui-selected": {
                              color: "var(--color-profile-3)",
                            },
                          }}
                        />
                        <Tab
                          label="Resumo do Comprador"
                          value="2"
                          sx={{
                            color: "var(--color-profile-1)",
                            "&.Mui-selected": {
                              color: "var(--color-profile-3)",
                            },
                          }}
                        />
                      </TabList>
                    </Box>

                    <TabPanel
                      value="1"
                      style={{
                        width: "100%",
                        maxWidth: "450px",
                      }}
                    >
                      <TabProducts items={transaction.items} />
                    </TabPanel>
                    <TabPanel
                      value="2"
                      style={{
                        width: "100%",
                        maxWidth: "450px",
                      }}
                    >
                      <TabClientAndPayment
                        customer={transaction.customer}
                        payment={transaction.paymentMethod}
                      />
                    </TabPanel>
                  </>
                ) : (
                  <Box
                    sx={{
                      display: "flex",
                      gap: "32px",
                      maxWidth: "100%",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                    }}
                  >
                    <Box sx={{ width: "300px" }}>
                      <TabProducts items={transaction.items} />
                    </Box>
                    <Box
                      sx={{
                        width: "1px",
                        backgroundColor: "var(--grey-2)",
                        height: "100%",
                      }}
                    />
                    <Box sx={{ width: "300px" }}>
                      <TabClientAndPayment
                        customer={transaction.customer}
                        payment={transaction.paymentMethod}
                      />
                    </Box>
                  </Box>
                )}
              </TabContext>
            </S.Container>
          </Box>
        </Fade>
      </Box>
    </Modal>
  );
};

export default TransactionDetailModal;

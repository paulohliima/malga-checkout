const useTranslate = () => {
  const getPaymentMethodInfo = (type: string | undefined) => {
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
          status: "Bloqueado",
          statusColor: "#cd742b",
        };
      default:
        return {
          status: "Outro",
          statusColor: "blue",
        };
    }
  };

  const convertCurrency = (value: number) => {
    const valueConverted = value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
    });
    return valueConverted;
  };

  return { getPaymentMethodInfo, getStatusInfo, convertCurrency };
};

export default useTranslate;

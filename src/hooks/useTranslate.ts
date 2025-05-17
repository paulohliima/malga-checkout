const useTranslate = () => {
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

  return { getPaymentMethodInfo, getStatusInfo };
};

export default useTranslate;

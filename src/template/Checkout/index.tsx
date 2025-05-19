// import CheckoutForm from "@/components/common/forms/clientForm";
import * as S from "./styles";
import { useState } from "react";

import { useCart } from "@/providers/cartProvider";
import { useLoading } from "@/providers/loadingProvider";
import HorizontalLinearStepper from "@/components/stepper";
import ClientForm from "@/components/common/forms/clientForm";
import PaymentForm from "@/components/common/forms/paymentForm";
import SummaryForm from "@/components/common/forms/summaryForm";
import { transactionsService } from "@/services/transactionsService";
import { toast } from "react-toastify";
import CartList from "@/components/cartList";
import { useRouter } from "next/router";
import { useTransactions } from "@/providers/transactionsProvider";

const CheckoutPage: React.FC = () => {
  const router = useRouter();
  const [activeStep, setActiveStep] = useState(0);
  const { customer, mockupProducts, payment } = useCart();
  const { setAllTransactions } = useTransactions();
  const { setLoading } = useLoading();

  const handleNext = async () => {
    if (activeStep === stepComponents.length - 1) {
      return await handleFinalize();
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () =>
    setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const handleFinalize = async () => {
    try {
      if (customer && mockupProducts && payment) {
        const totalAmount = mockupProducts.reduce((total, item) => {
          return total + item.amount * item.quantity;
        }, 0);

        await transactionsService.create({
          customer: customer,
          items: mockupProducts,
          paymentMethod: payment,
          amount: totalAmount,
        });

        const data = await transactionsService.getAll();

        setAllTransactions(data);
      }

      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        router.replace("/completed");
      }, 300);
    } catch (e: unknown) {
      if (e instanceof Error) {
        toast.error(e.message);
      } else {
        toast.error("Erro desconhecido");
      }
    }
  };

  const stepComponents = [
    <ClientForm key="step1" handleNext={handleNext} />,
    <PaymentForm key="step2" handleNext={handleNext} handleBack={handleBack} />,
    <SummaryForm key="step3" handleNext={handleNext} handleBack={handleBack} />,
  ];

  return (
    <S.Container>
      <S.ContainerCheckout>
        <HorizontalLinearStepper
          stepComponents={stepComponents}
          activeStep={activeStep}
        />
        {/* {activeStep !== 0 && (
          <CustomButton
            label="Voltar"
            onClick={handlePrevStep}
            variant="text"
          />
        )} */}
        <CartList />
      </S.ContainerCheckout>
    </S.Container>
  );
};

export default CheckoutPage;

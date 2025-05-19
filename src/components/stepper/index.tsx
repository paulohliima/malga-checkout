import * as React from "react";
import Box from "@mui/material/Box";
import Step from "@mui/material/Step";
import Stepper from "@mui/material/Stepper";
import StepLabel from "@mui/material/StepLabel";
import { StepConnector, StepIconProps } from "@mui/material";

import { AnimatePresence, motion } from "framer-motion";

import { FaRegUser, FaCreditCard, FaCheckCircle } from "react-icons/fa";

import useMediaQuery from "@/hooks/useMediaQuery";

interface HorizontalLinearStepperProps {
  stepComponents: React.ReactNode[];
  activeStep: number;
}

const CustomStepIcon = (props: StepIconProps) => {
  const { icon, active, completed } = props;

  let IconComponent;

  switch (icon) {
    case 1:
      IconComponent = FaRegUser;
      break;
    case 2:
      IconComponent = FaCreditCard;
      break;
    case 3:
      IconComponent = FaCheckCircle;
      break;
    default:
      IconComponent = FaRegUser;
  }

  return (
    <span
      style={{
        color: completed
          ? "var(--color-profile-2)"
          : active
          ? "var(--color-profile-3)"
          : "var(--alert-1)",
      }}
    >
      <IconComponent size={30} />
    </span>
  );
};

const steps = ["Dados Cadastrais", "Método de Pagamento", "Resumo da Compra"];

const HorizontalLinearStepper = ({
  stepComponents,
  activeStep,
}: HorizontalLinearStepperProps) => {
  const isMobile = useMediaQuery(550);

  return (
    <Box sx={{ width: "100%", paddingTop: "20px" }}>
      <Stepper
        activeStep={activeStep}
        alternativeLabel
        connector={<StepConnector />}
      >
        {steps.map((label) => (
          <Step
            key={label}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <StepLabel
              slots={{
                stepIcon: CustomStepIcon,
              }}
              slotProps={{
                label: {
                  sx: {
                    width: isMobile ? "90px" : "160px",
                    fontFamily: "var(--lexend)",
                    color: "var(--alert-1)",
                    "&.Mui-active": {
                      color: "var(--color-profile-3)",
                    },
                    "&.Mui-completed": {
                      color: "var(--color-profile-2)",
                    },
                  },
                },
              }}
            >
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>

      <React.Fragment>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
          >
            <Box sx={{ mt: 2, mb: 2 }}>{stepComponents[activeStep]}</Box>
          </motion.div>
        </AnimatePresence>
      </React.Fragment>
    </Box>
  );
};

export default HorizontalLinearStepper;

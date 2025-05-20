import * as S from "./styles";

import { motion } from "framer-motion";
import TransactionsList from "@/components/transactionsList";

import ScrollToTopButton from "@/components/scrollToTopButton";

const DashboardPage: React.FC = () => {
  return (
    <S.Container>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <TransactionsList />
      </motion.div>
      <ScrollToTopButton />
    </S.Container>
  );
};

export default DashboardPage;

import styled from "styled-components";
import { SlRefresh } from "react-icons/sl";
import { MdOutlinePayments } from "react-icons/md";
import { Box } from "@mui/material";

export const Container = styled.div`
  border-radius: 12px;
  position: relative;
  max-width: 768px;
  background-color: transparent;
  box-shadow: none;
  color: var(--grey-1);

  @media (min-width: 768px) {
    padding-top: 80px;
    box-shadow: var(--box-shadow-1);
    min-width: 700px;
    background-color: var(--color-brand-6);
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const RowInputSearch = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const TitleBox = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: center;

  div {
    svg {
      background-color: var(--color-profile-1);
      color: white;
      border-radius: 6px;
      padding: 6px;
      font-size: 40px;
      margin-right: 12px;
    }
  }

  @media (min-width: 768px) {
    top: -10px;
    position: absolute;
  }
`;

export const Title = styled.h2`
  font-family: var(--lexend);
  font-weight: var(--font-weight-300);
  font-size: var(--font-size-28);
  color: var(--grey-2);
  margin: auto 0;

  @media (min-width: 768px) {
    font-size: var(--font-size-32);
    font-weight: var(--font-weight-200);
    padding-top: 30px;
  }
  @media (min-width: 1024px) {
    font-size: var(--font-size-36);
  }
`;

export const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: var(--grey-4);
  border-radius: 1px;
  margin: 20px 0;
`;

export const ContainerInputSearch = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerCardsInfo = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-bottom: 20px;

  @media (min-width: 560px) {
    gap: 20px;
  }
`;

export const RefreshIcon = styled(SlRefresh)<{ $loading?: boolean }>`
  width: 30px;
  height: 30px;
  color: var(--color-profile-2);
  transition: transform 0.3s ease;
  cursor: pointer;

  ${({ $loading }) =>
    $loading &&
    `
    animation: spin 1s linear infinite;
  `}

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-360deg);
    }
  }
`;

export const IconTransactions = styled(MdOutlinePayments)`
  @media (min-width: 768px) {
    position: absolute;
    top: -30px;
    left: 20px;
    width: 80px;
    height: 80px;
  }
`;

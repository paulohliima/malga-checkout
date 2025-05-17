import { SlRefresh } from "react-icons/sl";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 10px;
  align-items: center;
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  width: 100%;
  justify-content: center;

  @media (min-width: 560px) {
    flex-direction: row;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 355px;

  @media (min-width: 560px) {
    max-width: 500px;
    justify-content: space-between;
  }
`;

export const RefreshContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  cursor: pointer;
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

export const RefreshLabel = styled.h4`
  font-size: var(--font-size-18);
  color: var(--color-profile-2);
  font-family: var(--lexend);
  padding-top: 2px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

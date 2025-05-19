import { SlRefresh } from "react-icons/sl";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 10px;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  width: 100%;

  @media (min-width: 1024px) {
    box-shadow: var(--box-shadow-1);
    border-radius: 6px;
    justify-content: center;
    align-items: center;
    padding: 10px;
  }
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

  @media (min-width: 1024px) {
    padding-top: 15px;
    gap: 10px;
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

  @media (min-width: 1024px) {
    justify-content: flex-end;
  }
`;

export const RefreshContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 5px;
  cursor: pointer;

  @media (min-width: 1024px) {
    justify-content: end;
    padding-right: 20px;
    padding: 20px 0;
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

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
    flex-direction: row-reverse;
  }
`;

export const FiltersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  align-items: center;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

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

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 80px;
  background-color: var(--color-brand-5);
  min-height: 100vh;
`;

export const ContainerCheckout = styled.div`
  display: flex;
  padding: 20px 0;

  @media (min-width: 768px) {
    padding: 40px 0;
  }
`;

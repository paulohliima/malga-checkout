import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-brand-5);
  padding: 100px 10px;
  min-height: 100vh;

  @media (min-width: 768px) {
    align-items: center;
  }
`;

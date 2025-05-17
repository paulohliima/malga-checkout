import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 60px;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-top: 1px solid var(--grey-4);
  gap: 5px;
  background-color: var(--color-brand-5);
  color: var(--grey-2);
`;

export const Text = styled.h3`
  font-size: var(--font-size-12);

  @media (min-width: 500px) {
    font-size: var(--font-size-14);
  }
`;

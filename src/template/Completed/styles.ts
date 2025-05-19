import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 80px 20px 0 20px;
  background-color: var(--color-brand-5);
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    flex-direction: row-reverse;
    justify-content: space-around;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 20px;
`;

export const Row = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.p`
  font-family: var(--lexend);
  font-size: var(--font-size-18);
  font-weight: 500;
  color: var(--color-profile-2);
  line-height: 1.6;
  margin: 0;
  text-align: center;

  @media (min-width: 500px) {
    font-size: var(--font-size-24);
  }
  @media (min-width: 768px) {
    font-size: var(--font-size-20);
  }
  @media (min-width: 1300px) {
    font-size: var(--font-size-24);
  }
`;

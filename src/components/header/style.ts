import styled from "styled-components";

export const Container = styled.div<{ $isLogged: boolean; $isMobile: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  position: relative;
  background-color: var(--color-brand-5);
  width: 100%;
  box-shadow: ${(props) =>
    (props.$isLogged && !props.$isMobile) || !props.$isMobile
      ? "var(--box-shadow-2)"
      : "none"};

  @media (min-width: 768px) {
    justify-content: space-between;
    padding: 0 80px;
    box-shadow: var(--box-shadow-2);
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

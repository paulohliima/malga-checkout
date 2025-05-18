import styled from "styled-components";

export const Container = styled.div<{ $isLogged: boolean; $isMobile: boolean }>`
  display: ${(props) =>
    (props.$isLogged && !props.$isMobile) || !props.$isMobile
      ? "flex"
      : "none"};
  align-items: center;
  justify-content: center;
  height: 80px;
  position: absolute;
  top: 0;
  width: 100%;
  box-shadow: var(--box-shadow-2);

  @media (min-width: 768px) {
    justify-content: space-between;
    padding: 0 80px;
    box-shadow: var(--box-shadow-2);
  }
`;

export const Row = styled.div`
  display: flex;
  gap: 20px;
`;

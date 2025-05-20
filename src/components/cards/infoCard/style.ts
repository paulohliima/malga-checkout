import styled from "styled-components";

interface ContainerProps {
  $type?: "success" | "failed";
  $selected: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  height: 80px;
  background-color: ${({ $type }) =>
    $type === "success"
      ? "var(--sucess-1)"
      : $type === "failed"
      ? "var(--alert-1)"
      : "transparent"};
  border-radius: 12px;
  padding: 10px;
  width: 165px;
  align-items: center;
  justify-content: space-between;
  color: var(--color-white);
  box-shadow: var(--box-shadow-1);
  box-sizing: border-box;
  cursor: pointer;
  border: 2px solid
    ${(props) => (props.$selected ? "var(--color-profile-3)" : "transparent")};

  svg {
    width: 30px;
    height: 30px;
    color: var(--color-white);
    align-self: "center";
  }

  @media (min-width: 560px) {
    height: 100px;
    width: 250px;
    padding: 20px;

    svg {
      width: 50px;
      height: 50px;
    }
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  @media (min-width: 768px) {
    gap: 0;
  }
`;

export const Title = styled.h3`
  font-size: var(--font-size-16);

  @media (min-width: 560px) {
    font-size: var(--font-size-20);
  }
`;

export const Value = styled.span`
  font-size: var(--font-size-20);

  @media (min-width: 560px) {
    font-size: var(--font-size-28);
  }
`;

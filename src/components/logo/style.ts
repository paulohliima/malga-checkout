import styled from "styled-components";

interface IPropsLogo {
  fontSize: "small" | "medium";
}

export const ContainerLogo = styled.div<{ $marginBotton?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-bottom: ${(props) =>
    props.$marginBotton ? props.$marginBotton : "none"};
`;

export const Logo = styled.h2<IPropsLogo>`
  font-size: ${(props) =>
    props.fontSize === "medium"
      ? "var(--font-size-24)"
      : "var(--font-size-12)"};
  font-family: var(--pacifico);
  font-weight: 400;
  font-style: normal;
`;

export const LogoDecoration = styled.h2<IPropsLogo>`
  font-size: ${(props) =>
    props.fontSize === "medium"
      ? "var(--font-size-28)"
      : "var(--font-size-14)"};
  font-family: var(--pacifico);
  font-weight: 400;
  font-style: normal;
  color: var(--color-profile-1);
`;

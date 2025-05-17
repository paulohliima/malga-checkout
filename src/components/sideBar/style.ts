import styled, { css } from "styled-components";

interface ContainerProps {
  $isOpen: boolean;
}

interface MenuButtonProps {
  $isOpen: boolean;
}

export const MobileHeader = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 1100;
`;

export const MenuButton = styled.button<MenuButtonProps>`
  width: 32px;
  height: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;

  span {
    display: block;
    height: 4px;
    background: ${({ $isOpen }) =>
      $isOpen ? "var(--color-white)" : "var(--color-profile-3)"};
    border-radius: 2px;
    transition: all 0.3s ease;
    transform-origin: 4px 2px;
  }

  span:nth-child(1) {
    width: 100%;
    ${({ $isOpen }) =>
      $isOpen &&
      css`
        transform: rotate(45deg) translate(-3px, -2px);
      `}
  }

  span:nth-child(2) {
    width: 100%;
    ${({ $isOpen }) =>
      $isOpen &&
      css`
        opacity: 0;
        transform: translateX(20px);
      `}
  }

  span:nth-child(3) {
    width: 100%;
    ${({ $isOpen }) =>
      $isOpen &&
      css`
        transform: rotate(-45deg) translate(5px, -5px);
      `}
  }
`;

export const Overlay = styled.div<ContainerProps>`
  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1000;
`;

export const Container = styled.aside<ContainerProps>`
  position: fixed;
  top: 0;
  right: ${({ $isOpen }) => ($isOpen ? "0" : "-250px")};
  width: 250px;
  height: 100vh;
  background-color: #252525;
  color: white;
  padding: 100px 20px 20px;
  box-shadow: -4px 0 8px rgba(0, 0, 0, 0.3);
  transition: right 0.3s ease;
  z-index: 1050;
`;

export const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px 8px;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: #3a3a3a;
    }
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

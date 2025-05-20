import styled from "styled-components";

export const Container = styled.button`
  display: inline-block;
  padding: 2px 12px;
  border: 1px solid #4f4f4f;
  border-radius: 8px;
  font-size: var(--font-size-16);
  line-height: 1.75;
  cursor: pointer;
  color: var(--color-profile-1);
  position: relative;
  overflow: hidden;
  z-index: 1;
  background-color: transparent;
  transition: all 0.2s ease-in;
  border: 1px solid var(--color-profile-1);
  max-width: max-content;

  &::before,
  &::after {
    content: "";
    position: absolute;
    border-radius: 50%;
    display: block;
    z-index: -1;
    transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
  }

  &::before {
    top: 100%;
    left: 50%;
    width: 140%;
    height: 180%;
    transform: translateX(-50%) scaleY(1) scaleX(1.25);
    background-color: rgba(0, 0, 0, 0.05);
  }

  &::after {
    top: 180%;
    left: 55%;
    width: 160%;
    height: 190%;
    transform: translateX(-50%) scaleY(1) scaleX(1.45);
    background-color: var(--color-profile-1);
  }

  &:hover {
    color: #ffffff;
    border-color: var(--color-profile-1);
  }

  &:hover::before {
    top: -35%;
    transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
    background-color: var(--color-profile-1);
  }

  &:hover::after {
    top: -45%;
    transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
    background-color: var(--color-profile-1);
  }
`;

export const ContainerText = styled.p`
  color: var(--color-profile-2);
  font-size: var(--font-size-16);
  cursor: pointer;
  text-align: center;
  line-height: normal;
  height: max-content;
  transition: 0.3s all;

  &:hover {
    color: var(--color-profile-1);
  }
`;

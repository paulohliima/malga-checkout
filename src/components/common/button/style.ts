import styled from "styled-components";

export const Container = styled.button`
  display: inline-block;
  padding: 12px 24px;
  border: 1px solid #4f4f4f;
  border-radius: 4px;
  font-size: 19px;
  cursor: pointer;
  color: black;
  position: relative;
  overflow: hidden;
  z-index: 1;
  background-color: transparent;
  transition: all 0.2s ease-in;

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
    background-color: #39bda7;
  }

  &:hover {
    color: #ffffff;
    border-color: #39bda7;
  }

  &:hover::before {
    top: -35%;
    transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
    background-color: #39bda7;
  }

  &:hover::after {
    top: -45%;
    transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
    background-color: #39bda7;
  }
`;

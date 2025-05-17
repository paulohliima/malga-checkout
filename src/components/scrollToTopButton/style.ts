import styled from "styled-components";

export const Button = styled.button`
  position: fixed;
  bottom: 40px;
  right: 40px;
  width: 48px;
  height: 48px;
  background-color: var(--color-profile-2);
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 4px 8px rgb(0 0 0 / 0.2);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  z-index: 1500;

  &.show {
    opacity: 1;
    visibility: visible;
  }
`;

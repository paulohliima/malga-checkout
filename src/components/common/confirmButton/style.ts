import styled from "styled-components";

export const Button = styled.button`
  text-decoration: none;
  line-height: 1;
  border-radius: 1.5rem;
  overflow: hidden;
  position: relative;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.05);
  background-color: #fff;
  color: #121212;
  border: none;
  cursor: pointer;

  .button-decor {
    position: absolute;
    inset: 0;
    background-color: var(--clr);
    transform: translateX(-100%);
    transition: transform 0.3s;
    z-index: 0;
  }

  .button-content {
    display: flex;
    align-items: center;
    font-weight: 600;
    position: relative;
    overflow: hidden;
  }

  .button__icon {
    width: 48px;
    height: 40px;
    background-color: var(--clr);
    display: grid;
    place-items: center;
  }

  .button__text {
    display: inline-block;
    transition: color 0.2s;
    padding: 2px 1.5rem 2px;
    padding-left: 0.75rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 150px;
  }

  &:hover .button__text {
    color: #fff;
  }

  &:hover .button-decor {
    transform: translate(0);
  }
`;

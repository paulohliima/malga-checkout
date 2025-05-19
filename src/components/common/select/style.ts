import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-width: 220px;
  max-width: 345px;
  width: 100%;
  height: 55px;
  position: relative;

  .MuiPaper-root {
    position: absolute !important;
  }

  .MuiPopover-root {
    z-index: 1300 !important;
  }

  .MuiPopover-root .MuiPaper-root {
    position: absolute !important;
    /* Remova o top: 0 !important; */
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    max-height: 300px;
  }

  @media (min-width: 550px) {
    max-width: 100%;
  }
`;

export const ErrorLabel = styled.span`
  color: red;
  font-size: 0.75rem;
  display: block;
  align-self: flex-end;
  padding-top: 2px;
  padding-left: 8px;
`;

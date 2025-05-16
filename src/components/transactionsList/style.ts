import styled from "styled-components";
import { Paper, Box } from "@mui/material";

export const Container = styled(Paper)`
  padding: 60px 12px 20px 12px;
  border-radius: 12px;
  position: relative;
  max-width: 768px;
  background-color: transparent;
  box-shadow: none;

  @media (min-width: 768px) {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  }
`;

export const TitleBox = styled(Box)`
  display: flex;
  align-items: end;
  top: -10px;
  position: absolute;

  svg {
    background-color: #e91e63;
    color: white;
    border-radius: 4px;
    padding: 6px;
    font-size: 40px;
    margin-right: 12px;
  }
`;

export const TableWrapper = styled.div`
  table {
    border-collapse: separate;
    border-spacing: 0 16px;
    width: 100%;
  }

  thead {
    display: none;
  }

  tbody tr {
    display: block;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
    padding: 16px;
    margin-bottom: 12px;
  }

  td {
    display: flex;
    justify-content: space-between;
    padding: 8px 16px;
    border-bottom: 1px solid #eee;
  }

  td::before {
    content: attr(data-label);
    font-weight: 500;
    color: #666;
  }

  td:last-child {
    border-bottom: none;
  }

  @media (min-width: 768px) {
  }
`;

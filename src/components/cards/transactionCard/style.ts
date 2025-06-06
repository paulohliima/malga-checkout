import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 12px 12px 30px;
  height: 120px;
  width: 100%;
  min-width: 275px;
  box-shadow: var(--box-shadow-1);
  border-radius: 12px;
  background-color: var(--color-white);
  position: relative;
  max-width: 500px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  gap: 5px;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  height: 100%;
`;

export const StatusDiv = styled.div<{ $bgcolor: string }>`
  height: 100%;
  width: 10px;
  background-color: ${(props) => props.$bgcolor};
  position: absolute;
  left: 0;
  border-radius: 12px 0 0 12px;
`;

export const StatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

export const DividerVertical = styled.div`
  width: 1px;
  height: 100%;
  background-color: var(--grey-3);
`;

export const StatusLabel = styled.h2``;

export const IdLabel = styled.h3`
  font-size: var(--font-size-12);
  color: var(--grey-2);
`;

export const MethodContainerLabel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 5px;
`;

export const Bold = styled.span`
  font-weight: 500;
  font-size: var(--font-size-12);
`;

export const MethodIcon = styled.img`
  width: 48px;
  height: 48px;
`;

export const MethodLabel = styled.h3``;

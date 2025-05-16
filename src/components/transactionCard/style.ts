import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px 10px 20px;
  height: 90px;
  width: 100%;
  min-width: 275px;
  box-shadow: var(--box-shadow-1);
  border-radius: 12px;
  background-color: var(--color-white);
  position: relative;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
`;

export const Row = styled.div`
  display: flex;
  gap: 20px;
  height: 100%;
`;

export const StatusDiv = styled.div<{ backgroundColor: string }>`
  height: 100%;
  width: 10px;
  background-color: ${(props) => props.backgroundColor};
  position: absolute;
  left: 0;
  border-radius: 12px 0 0 12px;
`;

export const StatusLabel = styled.h2``;

export const IdLabel = styled.h3``;

export const MethodContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  width: 70px;
  border-radius: 20px;
  background-color: var(--color-brand-5);
`;

export const MethodIcon = styled.img`
  width: 48px;
  height: 48px;
`;

export const MethodLabel = styled.h3``;

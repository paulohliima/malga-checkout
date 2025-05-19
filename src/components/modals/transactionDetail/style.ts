import styled from "styled-components";

export const ContainerTab = styled.div`
  font-family: var(--lexend);
  width: 100%;
  border-radius: 12px;
  overflow-y: scroll;
`;

export const SectionTitle = styled.h3`
  font-size: var(--font-size-20);
  font-weight: var(--font-weight-300);
  text-align: center;
  margin-bottom: 20px;
  color: var(--color-profile-3);
`;

export const InfoGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const Label = styled.span`
  font-size: var(--font-size-14);
  font-weight: var(--font-weight-600);
  color: var(--grey-2);
`;

export const Value = styled.span`
  font-size: var(--font-size-14);
  color: var(--grey-2);
`;

export const TotalValue = styled.span`
  font-size: var(--font-size-24);
  color: var(--color-profile-3);
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: var(--grey-4);
  border-radius: 1px;
  margin-bottom: 20px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 100%;
  padding-bottom: 10px;
`;

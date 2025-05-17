import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-bottom: 10px;
`;

export const Title = styled.h2`
  width: max-content;
  font-family: var(--inter);
  font-size: var(--font-size-20);
  color: var(--grey-1);
`;

export const ContainerTab = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 10px;
  color: var(--grey-1);
  max-height: calc(100vh - 150px); // Ajuste conforme necessário
  overflow-y: auto;
  scroll-behavior: smooth;

  /* Scrollbar estilizada (opcional) */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--color-profile-2);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;

export const SectionTitle = styled.h3`
  font-size: 1.1rem;
  color: var(--color-profile-3);
  text-align: center;
`;

export const InfoGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Label = styled.span`
  font-weight: 500;
  font-size: 0.9rem;
  color: var(--grey-3);
`;

export const Value = styled.span`
  font-weight: 400;
  font-size: 1rem;
  color: var(--grey-1);

  a {
    color: var(--color-profile-3);
    text-decoration: underline;
  }
`;

export const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: var(--grey-4);
  border-radius: 1px;
  margin-bottom: 20px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

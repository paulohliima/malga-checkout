import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: var(--box-shadow-1);
  border-radius: 12px;
  width: 100%;
  padding: 16px 20px;
  background-color: var(--color-white);
  margin-bottom: 16px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const ProductLabel = styled.span`
  font-size: 0.875rem;
  color: var(--color-grey-2);
  font-weight: 500;
`;

export const ProductName = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-profile-3);
`;

export const ProductPrice = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-profile-1);
`;

export const ProductQuantity = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-profile-3);
`;

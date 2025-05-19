import styled from "styled-components";

export const Container = styled.div`
  font-family: var(--lexend);
  width: 100%;
  border-radius: 12px;
`;

export const Title = styled.h2`
  font-size: var(--font-size-20);
  font-weight: var(--font-weight-300);
  text-align: center;
  margin-bottom: 20px;
  color: var(--color-profile-3);
`;

export const ItemList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1rem 0;
  border-bottom: 1px solid var(--grey-6);

  &:last-child {
    border-bottom: none;
  }

  @media (min-width: 768px) {
    align-items: center;
  }
`;

export const ProductName = styled.p`
  font-size: var(--font-size-16);
  font-weight: var(--font-weight-500);
  color: var(--grey-1);
  margin: 0;
`;

export const Quantity = styled.span`
  font-size: var(--font-size-14);
  color: var(--grey-3);
`;

export const Price = styled.span`
  font-size: var(--font-size-16);
  font-weight: var(--font-weight-600);
  color: var(--color-profile-1);
  white-space: nowrap;
`;

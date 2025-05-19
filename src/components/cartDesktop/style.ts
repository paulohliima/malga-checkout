import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  box-shadow: var(--box-shadow-2);
  padding: 40px;
  justify-content: center;
  font-family: var(--lexend);
  color: var(--color-white);
  border-radius: 0px 12px 12px 0;

  background-color: var(--color-profile-2);
`;

export const Section = styled.section`
  padding-bottom: 80px;
`;

export const Title = styled.h2`
  font-size: var(--font-size-28);
  margin-bottom: 80px;
  text-align: center;
`;

export const SubTitle = styled.h3`
  font-size: var(--font-size-18);
  margin-bottom: 80px;
  text-align: center;
`;

export const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const InfoLabel = styled.span`
  font-weight: bold;
`;

export const InfoValue = styled.span`
  font-size: var(--font-size-24);
`;

export const ItemList = styled.ul`
  list-style: none;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid #eee;
`;

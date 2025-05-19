import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--grey-3);
  box-shadow: "var(--box-shadow-3)";
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const Section = styled.section`
  margin-bottom: 2rem;
`;

export const SubTitle = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #555;
`;

export const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

export const InfoLabel = styled.span`
  font-weight: bold;
`;

export const InfoValue = styled.span`
  text-align: right;
`;

export const ItemList = styled.ul`
  list-style: none;
  padding: 0;

  @media (min-width: 768px) {
    padding-top: 60px;
  }
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 0.3rem 0;
  border-bottom: 1px solid #eee;
`;

export const ToggleCart = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  border-radius: 50%;
  bottom: 20px;
  right: 20px;
  box-shadow: var(--box-shadow-1);
  width: 60px;
  height: 60px;
  background-color: var(--color-profile-2);
`;

export const ToggleCartClose = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  border-radius: 50%;
  top: 20px;
  right: 20px;
  box-shadow: var(--box-shadow-1);
  width: 40px;
  height: 40px;
  background-color: var(--color-white);
  z-index: 1201;
`;

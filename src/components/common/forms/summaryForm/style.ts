import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const FooterButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: auto;
  padding-top: 10px;

  @media (min-width: 560px) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }

  button {
    width: 345px;

    @media (min-width: 560px) {
      width: 200px;
    }
  }
`;

export const Title = styled.h1`
  font-size: var(--font-size-28);
  margin-bottom: 20px;
  text-align: center;
  color: var(--grey-2);
`;

export const Section = styled.section`
  margin-bottom: 40px;
`;

export const SubTitle = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 40px;
  color: #555;
`;

export const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const InfoLabel = styled.span`
  font-weight: bold;
`;

export const InfoValue = styled.span`
  text-align: right;
  max-width: 200px;
`;

export const ItemList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 0.3rem 0;
  border-bottom: 1px solid #eee;
`;

export const DividerRow = styled.div`
  width: 100%;
  border-bottom: 1px solid var(--grey-4);
  margin-bottom: 40px;
`;

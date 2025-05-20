import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 80px 20px 0 20px;
  background-color: var(--color-brand-5);
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row-reverse;
    justify-content: space-around;
  }
`;

export const ContainerText = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: max-content;
  padding: 30px 0;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;

  @media (min-width: 768px) {
    max-width: 500px;
  }
  @media (min-width: 1300px) {
    max-width: 600px;
  }
`;

export const ColumnText = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: start;
  padding-bottom: 60px;
  max-width: 400px;

  @media (min-width: 500px) {
    max-width: 480px;
  }
  @media (min-width: 768px) {
    max-width: 400px;
  }
  @media (min-width: 1300px) {
    max-width: 500px;
  }
`;

export const Row = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  align-items: center;
  justify-content: center;

  @media (min-width: 500px) {
    justify-content: start;
  }
`;

export const ImageLanding = styled.img`
  width: 100%;
  min-width: 350px;
  max-width: 400px;
  padding-top: 20px;

  @media (min-width: 500px) {
    padding: 0;
  }
  @media (min-width: 768px) {
    max-width: 500px;
  }
  @media (min-width: 1300px) {
    max-width: 600px;
  }
`;

export const Text = styled.p`
  font-family: var(--lexend);
  font-size: var(--font-size-18);
  font-weight: 500;
  color: var(--color-profile-2);
  line-height: 1.6;
  margin: 0;
  text-align: start;

  @media (min-width: 500px) {
    font-size: var(--font-size-24);
  }
  @media (min-width: 768px) {
    font-size: var(--font-size-20);
  }
  @media (min-width: 1300px) {
    font-size: var(--font-size-24);
  }
`;

export const TypeWritter = styled.div`
  display: flex;
  gap: 2px;
  justify-content: space-between;

  .Typewriter {
    width: 130px;

    @media (min-width: 500px) {
      width: 200px;
    }
    @media (min-width: 768px) {
      width: 150px;
    }
    @media (min-width: 1300px) {
      width: 200px;
    }
  }

  .Typewriter__wrapper {
    font-weight: bold;
    text-transform: uppercase;
    font-size: var(--font-size-18);
    font-family: var(--lexend-exa);
    font-weight: bold;
    color: var(--color-profile-2);
    line-height: 1.6;
    margin: 0;
    text-align: center;

    @media (min-width: 500px) {
      font-size: var(--font-size-28);
    }
    @media (min-width: 768px) {
      font-size: var(--font-size-20);
    }
    @media (min-width: 1300px) {
      font-size: var(--font-size-28);
    }
  }
`;

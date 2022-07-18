import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  height: calc(100vh - 203px);
  background: #FAFAFA;
  display: grid;
  grid-template-columns: 1fr repeat(12, minmax(auto, 60px)) 1fr;
  grid-gap: 40px;

  @media only screen and (max-width: 700px) {
    grid-gap: 20px;
  }

  @media only screen and (max-width: 500px) {
    grid-template-columns: 10px repeat(6, 1fr) 10px;
    grid-gap: 10px;
  }
`;

export const Box = styled.div`
  position: inherit;
  top: -25px;
  grid-column: 2 / span 12;
  display: grid;
  grid-template-columns: repeat(12, minmax(auto, 60px));
  grid-gap: 40px;

  @media only screen and (max-width: 500px) {
    grid-column: 2 / span 6;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 20px;
  }
`;

interface CardProps {
  schedule?: boolean;
}

export const Card = styled.div<CardProps>`
  padding: 25px;
  height: 200px;
  grid-column-end: span 6;
  display: flex;
  flex-direction: column;
  background: ${({ schedule }) => schedule ? '#F1F1F1' : '#fff'};
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.06);
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  justify-content: center;
  align-items: center;

  &:hover {
    transform: translateY(-7px);
  }

  @media only screen and (max-width: 1000px) {
    grid-column-end: span 6;
  }

  @media only screen and (max-width: 700px) {
    grid-column-end: span 12;
  }

  @media only screen and (max-width: 500px) {
    grid-column-end: span 6;
  }
`;

export const BoxImage = styled.div`
  width: 90px;
  height: 90px;
  background: #FFD836;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextSchedule = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 21px;
  line-height: 25px;
  margin-top: 10px;
`;

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

interface CardProps {
  schedule?: boolean;
}

export const Border = styled.div<CardProps>`
  padding: 25px;
  height: 200px;
  grid-column-end: span 6;
  background: #fff;
  box-shadow: 5px 0px 16px rgb(0 0 0 / 29%);
  border-radius: 2px;
  position: absolute;
  top: -29px;
`;

export const Input = styled.div``;

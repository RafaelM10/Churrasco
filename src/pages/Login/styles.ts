import styled from 'styled-components';

export const Container = styled.div`
  height: calc(100vh - 203px);
  background: #FFD836;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 282px;
  margin-top: 20px;
`;

interface PropsInputLabel {
  mt?: boolean;
}

export const InputLabel = styled.label<PropsInputLabel>`
  font-style: normal;
  font-weight: 700;
  font-size: 21px;
  line-height: 25px;
  color: rgba(0, 0, 0, 0.8);
  margin-top: 36px;
  ${({ mt }) => mt && 'margin-top: 36px;'}
`;

interface PropsInput {
  error?: boolean;
  mb?: boolean;
}

export const InputText = styled.input<PropsInput>`
  width: 282px;
  height: 50px;
  background: #FFFFFF;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.06);
  border-radius: 2px;
  border: ${({ error }) => error ? '1px solid red' : 'none'};
  box-sizing: border-box;
  padding: 14px 20px;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  font-style: italic;
  color: rgba(0, 0, 0, 0.8);
  margin-top: 16px;
  ${({ mb }) => mb && 'margin-bottom: 36px;'}
`;

export const Button = styled.button`
  width: 282px;
  height: 50px;
  background: #000000;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.06);
  border-radius: 18px;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: #fff;
  margin-top: 74px;
  cursor: pointer;
`;

interface PropsError {
  mb?: boolean;
}

export const ErrorText = styled.small<PropsError>`
  color: red;
  ${({ mb }) => mb && 'margin-bottom: 36px;'}
`;

export const ContainerInput = styled.div`
  margin-top: 36px;
`;

export const ErrorLogin = styled.h3`
  color: red;
  margin: 20px 0;
`;

import styled from 'styled-components';

interface PropsModal {
  open?: boolean;
}

export const ModalContainer = styled.div<PropsModal>`
  display: ${({ open }) => open ? 'block' : 'none'};
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
`;

export const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 15% auto;
  border: 1px solid #888;
  width: 100%;
  border-radius: 4px;
  display: flex;
  flex-direction: column;

  input {
    padding: 2px 1.5rem;
    height: 4rem;
    margin: 30px 11px;

    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;

    background: #e7e9ee;
    font-size: 1rem;

    &::placeholder {
      color: #888;
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button {
    max-width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: #e7e9ee;
    margin: 9px 11px;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    font-size: 1rem;
    font-weight: 600;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const ModalClose = styled.span`
  color: #aaa;
  text-align: right;
  font-size: 28px;
  font-weight: bold;

  &:hover, &:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`;

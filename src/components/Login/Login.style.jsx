import styled from 'styled-components';

export const SubmitBtn = styled.button`
  background-color: #0b0e3a;
  border: 0;
  width: 26rem;
  height: 2rem;
  border-radius: 0.8rem;
  margin-top: 2rem;
  color: #fff;
  &:disabled {
    background-color: #c2c2c2;
  }
`;
export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 4rem;
`;

export const InputLabel = styled.label`
  font-size: 1rem;
`;

export const LoginInput = styled.input`
  width: 20rem;
  height: 2rem;
  border-radius: 10px;
  border: 2px solid #c2c2c2;

  margin-left: ${(props) => (props.name === 'email' ? '1rem' : '2.1rem')};
  &:focus {
    outline: none;
    border-color: #0b0e3a;
  }
`;

export const EmailCheck = styled.p`
  color: rgba(255, 0, 0, 0.8);
  font-size: 15px;
`;
export const Wrap = styled.div`
  margin: 5rem;
  display: flex;
  flex-direction: column;
`;
export const LoginForm = styled.form`
  flex-direction: column;
  display: flex;
`;

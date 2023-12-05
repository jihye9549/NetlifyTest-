import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function LoginControl() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLoginClick = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  return (
    <LoginWrap>
      <Link to="/login">
        <LoginBtn type="button" onClick={handleLoginClick}>
          {isLoggedIn ? '로그인' : '로그아웃'}
        </LoginBtn>
      </Link>
      <Greeting>{isLoggedIn ? '환영합니다' : '로그인 해주세요!!!'}</Greeting>
    </LoginWrap>
  );
}

const LoginBtn = styled.button`
  margin-left: 2.3rem;
  border-radius: 3rem;
  border: 0;
  width: 4.5rem;
  height: 1.8rem;
  background-color: #ffffff;
`;

const LoginWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

const Greeting = styled.p`
  color: #fff;
  margin-left: 2.3rem;
`;
export default LoginControl;

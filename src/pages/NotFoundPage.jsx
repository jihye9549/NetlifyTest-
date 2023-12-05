import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export default function NotFoundPage() {
  const navigate = useNavigate();

  const handleHomePage = () => {
    navigate('/');
  };

  return (
    <NotFoundWrap>
      <NotFoundTitle>해당 페이지를 찾지 못했습니다</NotFoundTitle>
      <NotFoundP color="black">
        주소가 잘못되었거나 더 이상 제공되지 않는 페이지입니다.
      </NotFoundP>
      <NotFoundP color="red" onClick={handleHomePage}>
        메인 페이지로 이동
      </NotFoundP>
    </NotFoundWrap>
  );
}

const NotFoundWrap = styled.div`
  margin: 10rem;
`;
const NotFoundTitle = styled.h1`
  font-size: 3rem;
  margin: 0 0 3rem 1rem;
`;

const NotFoundP = styled.p`
  font-size: 2rem;
  margin: 1rem;
  color: ${(props) => props.color};
  &:hover {
    cursor: pointer;
  }
`;

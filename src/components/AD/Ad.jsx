import React from 'react';
import styled from 'styled-components';
import AdImg from '../../assets/ad.svg';

function Ad({ show }) {
  if (!show) {
    return null;
  }
  return <ADImg />;
}

const ADImg = styled.img.attrs({
  src: AdImg,
  alt: '광고이미지',
})`
  width: 100vw;
`;

export default Ad;

import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LoginControl from './LoginControl';

export default function Header() {
  return (
    <HeaderWrap>
      <Link to="/">
        <Logo />
      </Link>
      <StyledLink to="/movie">영화</StyledLink>
      <StyledLink to="/tv">TV프로그램</StyledLink>
      <StyledLink to="/person">인물</StyledLink>
      <LoginControl />
    </HeaderWrap>
  );
}

const Logo = styled.img.attrs({
  src: 'https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg',
  alt: '로고',
})`
  margin-left: 200px;
  height: 20px;
`;
const HeaderWrap = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  flex-direction: row;
  background-color: #0b0e3a;
`;

const StyledLink = styled(Link)`
  color: white;
  margin-left: 2.3rem;
  font-size: 18px;
  text-decoration-line: none;
`;

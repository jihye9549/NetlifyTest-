import { useNavigate } from 'react-router-dom';
import * as S from './Movie.style';

function Movie({ poster, title, vote, overview }) {
  const navigate = useNavigate();

  const onClickPoster = () => {
    navigate(`/movie/${title}`, { state: { poster, title, vote, overview } });
  };

  return (
    <div>
      <S.PosterContainer onClick={onClickPoster}>
        <S.PosterImg src={poster} alt={title} />
        <S.TitleWrap>
          <S.PosterTitle>{title}</S.PosterTitle>
          <S.Vote>{vote}</S.Vote>
        </S.TitleWrap>
        <S.OverviewContainer>
          <S.OverviewTitle>{title}</S.OverviewTitle>
          <S.Overview>{overview}</S.Overview>
        </S.OverviewContainer>
      </S.PosterContainer>
    </div>
  );
}

export default Movie;

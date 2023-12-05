import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import * as S from './Movie.style';

function MovieDetail() {
  const title = useParams();

  const { state } = useLocation();

  console.log(title);
  console.log(state);

  return (
    <>
      <S.PosterImg src={state.poster} alt={title.title} />
      <h1>{title.title}</h1>
    </>
  );
}

export default MovieDetail;

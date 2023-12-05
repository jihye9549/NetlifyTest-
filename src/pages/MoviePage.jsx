import styled from 'styled-components';
import Movie from '../components/Movie/Movie';
import { movies } from '../data/movieDummy';

function MoviePage() {
  return (
    <AppContainer>
      {movies.results.map((item) => (
        <Movie
          key={item.id}
          poster={item.backdrop_path}
          title={item.title}
          vote={item.vote_average}
          overview={item.overview}
        />
      ))}
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(8, 130px);
  grid-gap: 1rem;
  margin-top: 1rem;
`;
export default MoviePage;

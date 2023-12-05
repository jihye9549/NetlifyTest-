// import styled from 'styled-components';
import TV from '../components/TV/TV';
import { tv } from '../data/tvDummy';

export default function TVPage() {
  const BASE_URL = 'https://image.tmdb.org/t/p/w1280/';
  return (
    <div>
      {tv.results.map((item) => (
        <TV
          key={item.id}
          poster={BASE_URL + item.backdrop_path}
          title={item.name}
          date={item.first_air_date}
          vote={item.vote_average}
        />
      ))}
    </div>
  );
}

// import * as S from './TV.style';

function TV({ poster, title, date, vote }) {
  return (
    <div>
      <img src={poster} alt={title} />
      <h1>{title}</h1>
      <p>{date}</p>
      <h3>{vote}</h3>
    </div>
  );
}

export default TV;

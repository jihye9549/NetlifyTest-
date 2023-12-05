import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage';
import Movie from './pages/MoviePage';
import TV from './pages/TVPage';
import Celebirity from './pages/CelebirityPage';
import Header from './components/common/Header/Header';
import MovieDetail from './components/Movie/MovieDetail';
import NotFound from './pages/NotFoundPage';
import Login from './pages/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tv" element={<TV />} />
        <Route path="/person" element={<Celebirity />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/movie/:title" element={<MovieDetail />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

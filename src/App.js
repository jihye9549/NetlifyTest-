import { BrowserRouter, Route, Routes } from 'react-router-dom';
// eslint-disable-next-line import/no-named-as-default
import Home from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

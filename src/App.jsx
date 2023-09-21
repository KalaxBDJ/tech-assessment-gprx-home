import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Home } from './components/Home'; // Assuming you have a Home component
import { Posts } from './components/Posts'; // Assuming you have a Posts component
import { NotFound } from './components/NotFound'; // Assuming you have a NotFound component
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <nav className='navbar__global'>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

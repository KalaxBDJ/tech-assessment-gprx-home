import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { Home } from './components/Home'; // Assuming you have a Home component
import { Posts } from './components/Posts'; // Assuming you have a Posts component
import { NotFound } from './components/NotFound'; // Assuming you have a NotFound component
import './App.css';
import { PostProvider } from './PostContext';


function App() {

  return (
    <PostProvider>
      <BrowserRouter>
        <nav className='navbar__global'>
          <ul>
            <li>
              <NavLink to="/" activeclassname="active">Home</NavLink>
            </li>
            <li>
              <NavLink to="/posts" activeclassname="active">Posts</NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </PostProvider>
  );
}

export default App;

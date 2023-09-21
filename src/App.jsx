// import React from 'react';
import { BrowserRouter, Route, Routes, } from "react-router-dom";

//Import Components
import { Home } from "./components/Home";
import { NotFound } from "./components/NotFound";
import { Posts } from "./components/Posts";

//Imports App CSS
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

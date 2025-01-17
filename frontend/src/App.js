import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Test3D from './test/test3D.js';
// import RenderPage from './test/renderPage.js';
import MyScene from './test/myScene.js';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<RenderPage />} /> */}
        <Route path="/" element={<Test3D />} />
        <Route path="/scene" element={<MyScene />} />
      </Routes>
    </Router>
  );
}

export default App;

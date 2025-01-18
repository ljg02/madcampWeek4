import './App.css';
import { Route, Routes } from 'react-router-dom';
import Search from './Search';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;

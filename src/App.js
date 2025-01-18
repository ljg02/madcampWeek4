
import { Route, Routes } from 'react-router-dom';
import Search from './SearchTap';
import Map from './MapTap';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/search" element={<Search />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </div>
  );
}

export default App;

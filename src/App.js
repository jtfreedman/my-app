import { Routes, Route } from 'react-router-dom';

import AllWatchesPage from './pages/AllWatches';
import NewWatchPage from './pages/NewWatch';
import Favorites from './pages/Favorites';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/welcome'element={<AllWatchesPage />} />

        <Route path='/new-watch'element={<NewWatchPage />} />

        <Route path='/favorites'element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;

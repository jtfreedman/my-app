import { Routes, Route } from 'react-router-dom';

import AllWatchesPage from './pages/AllWatches';
import NewWatchPage from './pages/NewWatch';
import Favorites from './pages/Favorites';
import Layout from './components/layout/Layout';

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path='/welcome' element={<AllWatchesPage />} />

          <Route path='/new-watch' element={<NewWatchPage />} />

          <Route path='/favorites' element={<Favorites />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;

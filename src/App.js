import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AllWatchesPage from './pages/AllWatches';
import NewWatchPage from './pages/NewWatch';
import Favorites from './pages/Favorites';
import Layout from './components/layout/Layout';

function App() {
  return (
    <div>
        <Routes>
          <Route path='/' element={<HomePage />} />

          <Route path='/all-watches' element={<Layout><AllWatchesPage /></Layout>} />

          <Route path='/new-watch' element={<Layout><NewWatchPage /></Layout>} />

          <Route path='/favorites' element={<Layout><Favorites /></Layout>} />
        </Routes>
    </div>
  );
}

export default App;
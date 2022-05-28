import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AllWatchesPage from './pages/AllWatches';
import NewWatchPage from './pages/NewWatch';
import Favorites from './pages/Favorites';
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';

import Layout from './components/layout/Layout';

function App() {
  function onLogin(enteredLoginData) {
    const loginData = {
      ...enteredLoginData
    };

    console.log(loginData)
  }
  return (
    <div>
        <Routes>
          <Route path='/' element={<HomePage />} />

          <Route path='/all-watches' element={<Layout><AllWatchesPage /></Layout>} />

          <Route path='/new-watch' element={<Layout><NewWatchPage /></Layout>} />

          <Route path='/favorites' element={<Layout><Favorites /></Layout>} />

          <Route path='/login' element={<Layout><Login onLogin={onLogin}/></Layout>} />

          <Route path='/signup' element={<Layout><CreateAccount /></Layout>} />
        </Routes>
    </div>
  );
}

export default App;
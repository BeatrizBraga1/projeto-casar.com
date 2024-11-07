import User from './pages/User';
import NotFound from './pages/NotFound';
import SearchUser from './pages/SearchUser';
import Favorites from './pages/Favorites';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarMobile from './components/NavbarMobile';


const App: React.FC = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SearchUser />} />
          <Route path="/user" element={<User />} />
          <Route path="/notfound" element={<NotFound />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
        <NavbarMobile />
      </Router>
    </>
  );
};


export default App;
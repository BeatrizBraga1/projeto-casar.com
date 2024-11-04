import User from './pages/User';
import NotFound from './pages/NotFound';
import SearchUser from './pages/SearchUser';
import Favorites from './pages/Favorites';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const App: React.FC = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<SearchUser />} />
          <Route path="/user" element={<User />} />
          <Route path="/notfound" element={<NotFound />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Router>
    </>
  );
};


export default App;

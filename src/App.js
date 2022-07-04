import NavBar from './Components/Layout/NavBar';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Home from './Components/Pages/Home';
import AddUsers from './Components/Users/AddUsers';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import NoPage from './Components/Pages/NoPage';
import EditUser from './Components/Users/EditUser';
import UserView from './Components/Users/UserView';

function App() {
  return (
    <Router>
        <div className='App'>
      
          <NavBar />
            <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/about" element={ <About /> } />
            <Route path="/contact" element={ <Contact /> } />
            <Route path="/user/add" element={ <AddUsers /> } />
            <Route path="/user/edit/:id" element={ <EditUser /> } />
            <Route path="/user/:id" element = { <UserView />}  />
            <Route path="/*" element={ <NoPage />} />
            </Routes>
        </div>
    </Router>
  );
}

export default App;

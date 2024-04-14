import './App.css';
import Header from  './components/header/header';
import Signin from './components/registration/Signin';
import Signup from './components/registration/Signup';
import{ BrowserRouter as Router,Route,Routes} from 'react-router-dom';


import'./styles/main.scss';
import Home from './pages/home/Home';
import TaskManager from './pages/taskmanagement/TaskManager';
import Dashboard from './pages/dashboard/Dashboard';

function App() {
  return( 
  <div>
  <Router>
     <Header/>
    <Routes>
    <Route path='/'  element={<Home />}/>
      <Route path='/signin'   element={<Signin />}/>
      <Route path='/signup' element={<Signup />} />
      <Route path='/taskmanager' element={<TaskManager />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
  </Router>
  </div>
  );
};

export default App;

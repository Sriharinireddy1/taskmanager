import './home.scss';


import { useSelector } from 'react-redux';
import { Link} from 'react-router-dom';



const Home = () => {

  const { auth } = useSelector((state) => ({...state}));
  const { currentUser }=auth;
  return <div className ='home'>
      <div className ='home__container'>
        <h3>Organize it all</h3>
        <p>With TaskManager</p>
       
      {currentUser && currentUser.token ? (
       <Link to = '/dashboard' className = 'button'>
        Get Started
       </Link>
      ) : (
        <Link to = '/signin' className='button'>
          Get Started
        </Link>


)}
      </div>
    </div>


  
};

export default Home;
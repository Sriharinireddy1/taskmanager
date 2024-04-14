import Sidebar from "../../components/sidebar/Sidebar";
import { Link } from 'react-router-dom';
import './dashboard.scss';

const Dashboard = () => {
  return (
    <div>
      <div className="dashboard">
     
        <div className="dashboard__left">
          <Sidebar/>

        </div>
        <div className="dashboard__right">
          <div className="dashboard__rightContent">
        <h2>Task Status Dashboard</h2>
         <div className="taskcount">
         <div className="todo box"> todo </div>
          <div className="doing box">doing</div>
          <div className="done box">done</div>
         </div>
          <div className="createButton">
            <Link to ='/taskmanager' className ='buttton'>Create Task </Link >

          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
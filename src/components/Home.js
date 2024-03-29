import React from 'react';
import { toast } from 'react-toastify';
import { useUserAuth } from '../context/UserAuthContext';
import './Home.css';
import {useNavigate } from 'react-router-dom';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
//import { Outlet } from 'react-router-dom';


const Home = () => {

  let {user,logOut} = useUserAuth();
  const navigate = useNavigate();
  
      const handleSubmit = () => {
     navigate('/companies');
  }

   const handleSubmitFeed = () => {
    navigate('/newsfeed');
 }

 const handleSubmitRes = () => {
  navigate('/resources');
}

const handleSubmitStu = () => {
  navigate('/students');
}

const handleSubmitTic = () => {
  navigate('/tickets');
}

const handleSubmitTandP = () => {
  navigate('/TandP');
}
 

  const handleLogOut = async(e) => {
    e.preventDefault();
    try 
     {
        await logOut();
        localStorage.clear();
        toast.success("Logged Out Successfully!", {
         position: "top-right",
         autoClose: 3000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: "colored",
         });
        
     }

     catch(err) 
     {
        console.log(err.message);
        toast.error("Not Logged Out!", {
         position: "top-right",
         autoClose: 3000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: "colored",
         });
     }
  }

  const name=localStorage.getItem("name");
  const email=localStorage.getItem("email");
  const rl=localStorage.getItem("rollno");


  return (
    <div className='container main'>
        <div className='shd shadow rounded-3 mt-4'>
            
                <FontAwesomeIcon icon={faUser} className='text-dark p-2' size='4x' />
                  <div className="details">
                    <p>{user.displayName} </p>
                    <p>{user.email}</p>
                    <p>{name}</p>
                    <p>{email}</p>
                    <p>{rl}</p>
                  </div>
        </div>
        
         
          <div class="list-group q">
            <div className='rounded m-1 shadow-sm lis '>
            <button type="submit" className="list-group-item list-group-item-action border-0 zoom list-group-item-primary" aria-current="true" onClick={handleSubmit} >
              Companies
            </button>
            </div>  
            <div className='rounded m-1 shadow-sm lis'> 
              <button type="button" className="list-group-item list-group-item-action border-0 zoom list-group-item-primary" aria-current="true" onClick={handleSubmitFeed}>NewsFeed</button> 
            </div>
            <div className='rounded m-1 shadow-sm lis'>
                <button type="button" className="list-group-item list-group-item-action border-0 zoom list-group-item-primary" onClick={handleSubmitRes}>Resources</button> 
            </div>
            <div className='rounded m-1 shadow-sm lis'> 
              <button type="button" className="list-group-item list-group-item-action border-0 zoom list-group-item-primary" onClick={handleSubmitTandP}>T&P Cordinators</button>
            </div>
            <div className='rounded m-1 shadow-sm lis'>
              <button type="button" className="list-group-item list-group-item-action border-0 zoom list-group-item-primary" onClick={handleSubmitStu}>Students</button> 
            </div>
            <div className='rounded m-1 shadow-sm lis'>
              <button type="button" className="list-group-item list-group-item-action border-0 zoom list-group-item-primary" onClick={handleSubmitTic}>Tickets</button> 
            </div>
            <div className='rounded m-1 shadow-sm lis'>
              <button type="button" className="list-group-item list-group-item-action border-0 zoom list-group-item-primary" onClick={handleLogOut}>logOut</button> 
            </div>
          </div>
          {/* <Outlet />         */}
       </div>
  );
};

export default Home;
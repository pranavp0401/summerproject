import React from 'react'
import { useNavigate } from 'react-router-dom';
import {useState,useEffect} from 'react';
import PlaceDataService from '../Admin/PlaceAllOperations';
import './CssFiles/OnCamp.css';



function Companies() {
 
  const [searchTerm,setSearchTerm] = useState("");
  const navigate = useNavigate();


  const [books, setBooks] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const data = await PlaceDataService.getAllUsers();
    console.log(data.docs);
    setBooks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };


const handleToggle = async(e) => {
  try {
    navigate('/oncampus');
  } catch (error) {
    console.log(error);
  }
  
} 


  return (
    <div>      
        <section>
          <div className='container cont'>
              <h2 className='had'>Off Campus</h2>  <h3 className='had1'><button onClick={handleToggle} className='butn'>Go To OnCampus Page</button></h3>

              <div className="searchInput">
                <input id="searchInput" type="text"  placeholder="Search here..." onChange={(event) => {setSearchTerm(event.target.value);}} />
              </div>

              <div className='cards'>
              {
                  books.filter((val) => {
                    if(searchTerm === ""){
                      return val;
                    }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                      return val;
                    }
                  }).map((val) =>(
                      <div key={val.id} className='card crd'>
                        <h3>{val.title}</h3>
                        <p className="role">{val.role}</p>
                        <a href={val.lli}>Link...</a>
                      </div>
                  ))
              } 
              </div>              
          </div>
        </section>
    </div>
  )
}

export default Companies;
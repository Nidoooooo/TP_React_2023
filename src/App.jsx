import './App.css';
import Gallery from './Components/Gallery';
import Search from './Components/Search';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [getPics,setPics] = useState([]);
  const [searchedTerm,search] = useState(getPics);
  const [getShowSearch,setShowSearch] = useState(false);
  const [getShowID,setShowID]=useState(true);

  const getData = () => {
      axios
      .get("https://picsum.photos/v2/list?limit=10")
      .then((response) => {
        setPics(response.data);
        console.log(response.data);
      })
      .catch((error) => {console.log(error.message)});
    }
  
  useEffect(()=>{
    getData();
  },[]);
  useEffect(()=>{
    search(getPics)
  },[getPics]);
  
  const handleChange = (event) =>{
    let filtered = getPics.filter(item => {
      return item.author.includes(event.target.value);
    });
    search(filtered);
    }

  
  const handleShowID = (event) =>{setShowID(!getShowID);}
  const handleShowSearchChange = (event) =>{setShowSearch(!getShowSearch);};

  
  return (
    <div>
      <label htmlFor='searchBar'>Display search bar : </label>
      <input type="checkbox" name="searchBar" onChange={handleShowSearchChange}></input>
      <label htmlFor='searchBar'>Hide ID : </label>
      <input type="checkbox" name="searchBar" onChange={handleShowID}></input>
      {getShowSearch?<Search onSearch={handleChange}/>:null}
      <Gallery param={searchedTerm} showID={getShowID}/>
    </div>
  );
}

export default App
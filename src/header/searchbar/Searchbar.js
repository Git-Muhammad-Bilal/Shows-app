import React, { useState, useEffect } from 'react';
import AutoComplete from '../searchbar/AutoComplete';
import { fetchSearchedShows } from '../../fetchData/fetchdata'
import { Link, useParams } from 'react-router-dom';
import { isCancel } from 'axios';
function SearchBar() {

  const [val, setVal] = useState('');
  const [debounceVal , setDebounceVal] = useState(val);
  const [result, setResult] = useState([]);
  let { id } = useParams();


  //second way to make delayed requet wtih DEBOUNCED  VALUE____________________________
// __________________________________________________
useEffect(()=>{
  let timerId = setInterval(() => {
       setDebounceVal(val)
  }, 1000);
    return ()=>{
      clearInterval(timerId)
    }
}, [val])

useEffect(()=>{
  let fetchRes = async () => {
    let fd = await fetchSearchedShows(val)
    setResult(fd)
    
  }
    if (val) {
      
      fetchRes()    
    }
}, [debounceVal])
  
//1st way to make delayed requet____________________________
// __________________________________________________ 
 // useEffect(() => {
    
  //   let fetchRes = async () => {
  //     let fd = await fetchSearchedShows(val)
  //     setResult(fd)
      
  //   }
  //   console.log('middle')

  //   let timeId = setInterval(() => {
  //     if (val) {
  //       fetchRes();
  //     }
    
  //   }, 1000);
   
  //   return () => {
  //     clearInterval(timeId)
  //     console.log('clear', timeId);
  //   }
  // }, [val])

  
  let clearState = ()=>{
    setVal('')
  }
   

  let searchShows = result.filter((s) => {
    if (s.name.toLowerCase().includes(val.toLowerCase())) {
      return true
    } {
      return false
    }
  })
  return (

    <div className="search-bar">
      <input type="text"
        className='search-input'
        placeholder='SearchBar'
        value={val}
        onChange={(e) => { setVal(e.target.value) }}
      />

      {val || result.lenght ?
        <AutoComplete 
        searchShows={searchShows} id={id}
        clearState = {clearState}
        ></AutoComplete> : null}
    </div>
  );
}

export default SearchBar;
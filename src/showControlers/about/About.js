import React, {useState ,useEffect} from "react";
import Ratting from "./Ratting";
import {useParams} from 'react-router-dom'
import { fetchData } from "../../fetchData/fetchdata";

function About(){
   const [show,setShow] = useState('')
    
    let {id} = useParams()
    
    useEffect(() => {
       const fshw = async () => {
          const data = await fetchData(parseFloat(id))
           setShow(data)
          
         }
       fshw()
       
   }, [id])

   return(
        <div className="about-container">
        <div className="about-titel">
           <p>About</p>
        </div>
        <div className="about-img-show-name-cont">
           <div className="about-img">
              <img src={show && show?.image?.medium} alt="failed" />
           </div>
           <div className="about-show-title-cont">
              <p>{show?.name}</p>
              <span>{show?.runtime}</span>
           </div>
        </div>
          <Ratting rating={show?.rating} 
            />
          <div className="about">
            <p>

           {show?.summary?.slice(0, 336).toString()}
            </p>
        </div>
        <div className="about-extra-detail">
           <p><strong>Premier:</strong>{show?.premiered}</p>
           <p><strong>Web channel:</strong>{show?.webChannel}</p>
           <p><strong>Schdule:</strong>{show?.schedule?.day}({show?.schedule?.time}-minutes)</p>
           <p><strong>Genres:</strong>{show?.genres}</p>
           <p><strong>Language:</strong>{show?.language}</p>
        </div>
     </div>
    );
}


export default About
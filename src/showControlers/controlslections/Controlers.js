import React from "react";
import { Link, useParams } from 'react-router-dom';


function Controlers() {
    let btnNames = ['overview', 'cast', 'seasons', 'reviews', 'similershows']
    let {id} = useParams()
  
    let buttons = btnNames.map((name, index) => {
     return(
     <Link key={index} to={`${'/show'}/${name}/${id}`}>
        <button key={index}> {name}</button>
     </Link>);
    })
    return (
        <div className="controlers-cont">
            {buttons}
        </div>
    );
}

export default Controlers;
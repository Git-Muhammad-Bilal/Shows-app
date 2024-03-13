import React, { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import { fetchData } from "../fetchData/fetchdata";

// import './allshows.css'

function Allshows(state) {
    
    const [shows, setShows] = useState([])
let {id} = useParams();
console.log(id);
    useEffect(() => {
        const fd = async () => {
            const data = await fetchData()
            console.log(data.slice(0, 20),'data');
             setShows(data.slice(0, 20))
        }
        fd()

    }, [])

    let renderShows = shows?.map((show, index) => {
        return <ShowItem show={show} index={index} />
    })

    return (

        <>
            {shows.length ?
                <div className="all-shows">
                    <div className="all-shows-heading">
                        <h1>All shows </h1>
                    </div>
                    <div className="all-shows-cont">
                        {renderShows}

                    </div>
                </div> :
                <h1>Loading...</h1>
            }
        </>
    );
}



export default Allshows

const ShowItem = ({ show: { genres, id, image, name, averageRuntime }, index }) => {

    return (
        <div className="all-shows-card-cont" key={name} >
            <div className="all-shows-card-img-cont" >
                <Link to={`${"/show/overview"}${"/" + id}`}><img src={image.medium} alt="not-found" /></Link>
            </div>
            <div className="all-shows-card-info-cont">
                <span className="show-card-title">{name} </span>
                <p>{averageRuntime} </p>
                <p>{genres}</p>
            </div>
        </div>
    )
}
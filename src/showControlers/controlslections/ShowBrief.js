import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom'
import {fetchData} from '../../fetchData/fetchdata'
function ShowBrief() {

    const [show, setShow] = useState('');

    let { id } = useParams()

    useEffect(() => {
      const fd = async () => {
          const data = await fetchData(parseFloat(id))
          setShow(data);
          
       }
       fd()
    }, [id])
    
   
    return (
        <div className="show-brief">
            <div className="brief-container">

                <div className="show-brief-img">
                    <img src={show?.image?.medium} alt="failed"/>
                </div>
                <div className="brief-show-name-cont">
                    <div className="brif-show-name">
                        <p>{show?.name}</p>
                    </div>
                    <div className="brif-show-detail">
                        <p>{`${show?.premiered}, ${show?.genres}, ${show?.runtime}`}</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ShowBrief;
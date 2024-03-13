import React, { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';


function AutoComplete({ searchShows, clearState}) {
    const [isActive, setIsActive] = useState('flex');
    useEffect(() => {
        window.addEventListener('click', (e) => {
            if (!e.target.className.includes("sear")) {
                setIsActive('none')
            } else {
                setIsActive('flex')
            }
        })

    }, [isActive])

    let renderShws = searchShows?.map(({ name, premiered, genres, image, id }, index) => {
        return (
            <Link to={`${"/show/overview"}${"/" + id}`} key={index}>
                <div className="search-show-cont" key={index}>
                    <div className="sear-show-img-cont">
                        <img src={image?.medium} alt="falied" />
                    </div>
                    <div className="sear-show-detl-cont">
                        <div className="sear-sh-name-cont">
                            <p>{name}</p>
                        </div>
                        <div className="sear-sh-dat-time-gen-cont">
                            <span>{`${premiered} ${genres}`}</span>
                        </div>
                    </div>

                </div>
            </Link>
        );
    })
    return (
        <React.Fragment>

            <div className="sear-auto-comp-cont" 
            style={{ display: isActive }}
            onClick={()=>{clearState()}}
            >
                {renderShws}
            </div>
        </React.Fragment>
    );
}

export default AutoComplete
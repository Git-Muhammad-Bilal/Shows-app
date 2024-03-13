import React from 'react';



function MainCast({ cast }) {

    return (
        < div className="overview-main-cast" >
            {cast.map((c, index) => {

         return (<div className="overview-cast-img" key={index}>
                        <img src={c?.character?.image?.medium} alt="faild" />
                        <div className="actor-name">
                            <p>{c.person.name}</p>
                        </div>
                        <div className="character-name">
                            <p>{c.character.name}</p>
                        </div>
                    </div>
                );
            })
            }
        </div >

    );
}

export default MainCast;
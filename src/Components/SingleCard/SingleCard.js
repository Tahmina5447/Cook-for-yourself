import React from 'react';

const SingleCard = ({singleInfo,handleAddBtn}) => {
    const {img,name,id,time}=singleInfo;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img src={img} alt="cook" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-red-800">{name}</h2>
                    <p className='w-3/5'>Time: {time} min</p>
                    
                    <div className="card-actions">
                        <button onClick={()=>handleAddBtn(singleInfo)} className="btn bg-sky-200 border-0 text-black">Add To List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;
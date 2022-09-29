import React from 'react';
import { useEffect, useState } from 'react';
import { info } from 'autoprefixer';
import SingleCard from '../SingleCard/SingleCard';


const AllCards = ({handleAddBtn}) => {
    const[info,setInfo]=useState([]);
  useEffect(()=>{
    fetch('data.json')
    .then(res=>res.json())
    .then(data=>setInfo(data));
  },[])

    return (
        <div className='grid grid-cols-3 gap-6 px-8'>
            {
                info.map(singleInfo=><SingleCard  handleAddBtn={handleAddBtn} singleInfo={singleInfo}></SingleCard>)
            }
        </div>
    );
};

export default AllCards;
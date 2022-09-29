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
      
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 px-8 mb-4 '>
            {
                info.map(singleInfo=><SingleCard  handleAddBtn={handleAddBtn} singleInfo={singleInfo}></SingleCard>)
            }
        </div>  
      
       
    );
};

export default AllCards;
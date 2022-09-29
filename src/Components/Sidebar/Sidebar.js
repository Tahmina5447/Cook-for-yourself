import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const Sidebar = ({cart}) => {
    const[brkTime,setBrkTime]=useState(0);

    let time=0;
    for(const info of cart){
        time=parseInt(time)+parseInt(info.time);
    }

    const handleToast=()=>{
        toast("Successful");
    }

    const handleBreakTime=(brkTime)=>{
        setBrkTime(brkTime);
    }

    return (
        <div className='text-center bg-red-200 rounded-xl'>
            <div>
                <div className='flex place-content-center pt-6 pb-2'>
                    <img className='h-12 w-12 rounded-xl' src="https://i.pinimg.com/736x/8f/f0/54/8ff0547c332e98430746437780625a02.jpg" alt="" />
                    <p className='mt-3 ml-3 font-bold'>Tahmina Khatun</p>
                </div>
                <p className='font-bold pb-3'>I am learning Web Development</p>
                <hr />
                
                <div>
                    <h3 className='font-bold mt-8 mb-4'>Add A Break</h3>
                    <div className='bg-sky-200 py-2 w-3/5 mx-auto rounded-xl'>
                        <button onClick={()=>handleBreakTime('5')} className=" mr-2 btn bg-white text-black border-0 btn-circle">5m</button>
                        <button onClick={()=>handleBreakTime('10')} className=" mr-2 btn  bg-white text-black border-0 btn-circle">10m</button>
                        <button onClick={()=>handleBreakTime('15')} className="btn mr-2  bg-white text-black border-0 btn-circle">15m</button>
                        <button onClick={()=>handleBreakTime('20')} className="btn mr-2 bg-white text-black border-0 btn-circle">20m</button>
                        <button onClick={()=>handleBreakTime('25')} className="btn  bg-white text-black border-0 btn-circle">25m</button>
                    </div>
                </div>
                <div>
                    <h3 className='font-bold text-xl mt-8 mb-3'>Cook Details</h3>
                    <p className='font-bold'>Cook Time: {time} min</p>
                    <p className='font-bold'>Break Time: {brkTime} min</p>
                </div>
                <div>
                    <button onClick={handleToast} className='btn bg-sky-200 border-0 text-black font-bold my-6'>Activity Complited</button>
                    <ToastContainer />
                </div>

            </div>
        </div>
    );
};

export default Sidebar;
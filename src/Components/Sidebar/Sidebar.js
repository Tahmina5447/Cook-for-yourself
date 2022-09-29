import React from 'react';

const Sidebar = ({cart}) => {


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
                    <h3>Add A Break</h3>
                    <div className='bg-sky-200 py-2 w-3/5 mx-auto rounded-xl'>
                        <button className=" mr-2 btn bg-white text-black border-0 btn-circle">5m</button>
                        <button className=" mr-2 btn  bg-white text-black border-0 btn-circle">10m</button>
                        <button className="btn mr-2  bg-white text-black border-0 btn-circle">15m</button>
                        <button className="btn mr-2 bg-white text-black border-0 btn-circle">20m</button>
                        <button className="btn  bg-white text-black border-0 btn-circle">25m</button>
                    </div>
                </div>
                <div>
                    <h3>Cook Details</h3>
                    <p>Cook Time:  min</p>
                    <p>Break Time</p>
                </div>
                <div>
                    <button className='btn bg-sky-200 border-0 text-black font-bold my-6'>Activity Complited</button>
                </div>

            </div>
        </div>
    );
};

export default Sidebar;
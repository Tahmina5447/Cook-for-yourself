import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import AllCards from './Components/AllCards/AllCards';
import Questions from './Components/Questions/Questions';
import Sidebar from './Components/Sidebar/Sidebar';
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const[cart,setCart]=useState([]);
  
  const handleAddBtn=(singleInfo)=>{
    // console.log(singleInfo)
    const newCart=[...cart,singleInfo];
    setCart(newCart);
    
  }
  
  return (
    <div className='px-10'>
      <h1 className='text-4xl text-red-700 font-bold text-center py-10'> <FontAwesomeIcon className='mr-4' icon={faCoffee} />Cook For Yourself</h1>
      <div className='flex'>
        <div className='w-3/5 text-center '>
          <AllCards handleAddBtn={handleAddBtn}></AllCards>
          
        </div>
        <div className='w-2/5 text-center'>
          <Sidebar cart={cart}></Sidebar>
          
        </div>
      </div>
      <div className='bg-sky-200 rounded-xl'>
        <Questions></Questions>
      </div>
      
    </div>
  );
}

export default App;

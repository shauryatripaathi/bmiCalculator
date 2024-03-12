import { useState } from 'react';
import './style.css';

function Features(){
    const[weight,setWeight] = useState('');
    const[height,setHeight] = useState('')


    const handleOnChange =(e)=>{
        setWeight(e.target.value)
    }
    return(
        <div className='features'>
            <div className='weightClass'>
                <input type='text' placeholder='Enter weight in kg' value={weight} onChange={handleOnChange}/> 
            </div>
            <div className='heightClass'>
            <input type='text' placeholder='Enter height in cm' value={height} onChange={handleOnChange}/> 

            </div>
        </div>
    )
}

export default Features;

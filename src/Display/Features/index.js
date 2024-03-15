import { useState } from 'react';
import './style.css';

function Features(props){
    const[weight,setWeight] = useState('');
    const[height,setHeight] = useState('')
    const[bmiVal,setBmiVal] = useState(0)

    const handleOnWeight =(e)=>{
        setWeight(e.target.value)
    }

    const handleOnHeight =(e)=>{
        setHeight(e.target.value)
    }
    const handleOnClick = ()=>{
        if(weight==='' || height ===''){
            alert('enter value')
        }
        else{
            let h = height/100
            let bmi = weight/(h*h);
            setBmiVal(bmi)
            if(bmi<25 && bmi>18){
                 alert('normal weight')
            }
            else if(bmi>25){
                alert('overweight')
            }
            else if(bmi<18){
                alert('underweight')
            }
        }
    }

    return(
        <div className='features'>
            <div className='displayScreen'>{bmiVal}</div>
            <div className='weightClass'>
                <input type='text' placeholder='Enter weight in kg' value={weight} onChange={handleOnWeight}/> 
            </div>
            <div className='heightClass'>
            <input type='text' placeholder='Enter height in cm' value={height} onChange={handleOnHeight}/> 
            </div>
            <div>
                <div onClick={handleOnClick} className='btnSubmit'>Submit</div>
            </div>
        </div>
    )
}

export default Features;

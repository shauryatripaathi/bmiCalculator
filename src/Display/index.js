import Features from './Features';
import './style.css';

function Display(){
    return(
        <div>
        <div className='navBar'>BMI Calculator</div>
        <div className='root'>
            <div className='container'>
                <Features />
            </div>
        </div>
        </div>
    )
}
export default Display;
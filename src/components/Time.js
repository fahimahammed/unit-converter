// time converter
import React, { useState } from 'react';
import Navbar from './Navbar';

const Time = () => {
    const [buttonDefValue1, setButtonDifValue1] = useState('Second');  // manage input type
    const [buttonDefValue2, setButtonDifValue2] = useState('Minute'); // mange output type
    const [value, setValue] = useState();
    

    // convert value 
    const converter = (input) =>{
        // for input second
        if(buttonDefValue1 === 'Second'){
            if(buttonDefValue2 === 'Second'){
                const result = input * 1;
                setValue(result);
            }else if(buttonDefValue2 === 'Minute'){
                const result = input/60;
                setValue(result);
            }else if(buttonDefValue2 === 'Hour'){
                const result = input / 3600;
                setValue(result);
            }
        }
        // for input minute
        else if(buttonDefValue1 === 'Minute'){
            if(buttonDefValue2 === 'Second'){
                const result = input * 60;
                setValue(result);
            }else if(buttonDefValue2 === 'Minute'){
                const result = input*1;
                setValue(result);
            }else if(buttonDefValue2 === 'Hour'){
                const result = input / 60;
                setValue(result);
            }
        }
        // for input hour
        else if(buttonDefValue1 === 'Hour'){
            if(buttonDefValue2 === 'Second'){
                const result = input * 3600;
                setValue(result);
            }else if(buttonDefValue2 === 'Minute'){
                const result = input * 60;
                setValue(result);
            }else if(buttonDefValue2 === 'Hour'){
                const result = input  * 1;
                setValue(result);
            }
        }
        
    }

    
    console.log(value);
    return (
        <section className='container'>
            <Navbar/>
            <h4 className='mb-3 mt-3'>Time</h4>
            
            <div className='row '>
                <div className='col-md-6 border p-3'>
                    <h5 className='bg-success text-white p-2'>{buttonDefValue1}</h5>
                    <form >
                        <input onChange={e => converter(e.target.value)}  className='form-control' type='number' defaultValue='0'/>
                    </form>
                    <ul>
                        <li className='button-style' onClick={() => setButtonDifValue1("Second")}>Second</li>
                        <li className='button-style' onClick={() => setButtonDifValue1("Minute")}>Minute</li>
                        <li className='button-style' onClick={() => setButtonDifValue1("Hour")}>Hour</li>
                        
                    </ul>
                </div>
                <div className='col-md-6 border p-3'>
                    <h5 className='bg-success text-white p-2'>{buttonDefValue2}</h5>
                    <input className='form-control' type='number' value={value}/>
                    <ul>
                        <li className='button-style' onClick={() => setButtonDifValue2("Second")}>Second</li>
                        <li className='button-style' onClick={() => setButtonDifValue2("Minute")}>Minute</li>
                        <li className='button-style' onClick={() => setButtonDifValue2("Hour")}>Hour</li>
                        
                    </ul>
                </div>

            </div>
            
        </section>
    );
};

export default Time;
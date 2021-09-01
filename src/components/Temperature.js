// temperature converter
import React, { useState } from 'react';
import Navbar from './Navbar';

const Temperature = () => {
    const [buttonDefValue1, setButtonDifValue1] = useState('Celsius');  // manage input type
    const [buttonDefValue2, setButtonDifValue2] = useState('Fahrenheit'); // mange output type
    const [value, setValue] = useState();
    

    // convert value 
    const converter = (input) =>{
        // for input celsius
        if(buttonDefValue1 === 'Celsius'){
            if(buttonDefValue2 === 'Celsius'){
                const result = input * 1;
                setValue(result);
            }else if(buttonDefValue2 === 'Kelvin'){
                const result = input + 273.15;
                setValue(result);
            }else if(buttonDefValue2 === 'Fahrenheit'){
                const result = (1.8 * input) + 32;
                setValue(result);
            }
        }
        //for input kelvin
        else if(buttonDefValue1 === 'Kelvin'){
            if(buttonDefValue2 === 'Celsius'){
                const result = input - 273.15;
                setValue(result);
            }else if(buttonDefValue2 === 'Kelvin'){
                const result = input * 1;
                setValue(result);
            }else if(buttonDefValue2 === 'Fahrenheit'){
                const result = (input - 273.15) * 1.8 + 32;
                setValue(result);
            }
        }
        // for input fahrenheit
        else if(buttonDefValue1 === 'Fahrenheit'){
            if(buttonDefValue2 === 'Celsius'){
                const result = 0.56 * (input-32) ;
                setValue(result);
            }else if(buttonDefValue2 === 'Kelvin'){
                const result = (input + 459.67) * 0.56;
                setValue(result);
            }else if(buttonDefValue2 === 'Fahrenheit'){
                const result = input * 1;
                setValue(result);
            }
        }
        
    }

    
    console.log(value);
    return (
        <section className='container'>
            <Navbar/>
            <h4 className='mb-3 mt-3'>Temperature</h4>
            
            <div className='row '>
                <div className='col-md-6 border p-3'>
                    <h5 className='bg-success text-white p-2'>{buttonDefValue1}</h5>
                    <form >
                        <input onChange={e => converter(e.target.value)}  className='form-control' type='number' defaultValue='0'/>
                    </form>
                    <ul>
                        <li className='button-style' onClick={() => setButtonDifValue1("Celsius")}>Celsius</li>
                        <li className='button-style' onClick={() => setButtonDifValue1("Kelvin")}>Kelvin</li>
                        <li className='button-style' onClick={() => setButtonDifValue1("Fahrenheit")}>Fahrenheit</li>
                    </ul>
                </div>
                <div className='col-md-6 border p-3'>
                    <h5 className='bg-success text-white p-2'>{buttonDefValue2}</h5>
                    <input className='form-control' type='number' value={value}/>
                    <ul>
                        <li className='button-style' onClick={() => setButtonDifValue2("Celsius")}>Celsius</li>
                        <li className='button-style' onClick={() => setButtonDifValue2("Kelvin")}>Kelvin</li>
                        <li className='button-style' onClick={() => setButtonDifValue2("Fahrenheit")}>Fahrenheit</li>
                    </ul>
                </div>

            </div>
            
        </section>
    );
};

export default Temperature;
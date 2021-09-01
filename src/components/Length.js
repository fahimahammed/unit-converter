// length converter
import React, { useState } from 'react';
import Navbar from './Navbar';

const Length = () => {
    const [buttonDefValue1, setButtonDifValue1] = useState('Meter');  // manage input type
    const [buttonDefValue2, setButtonDifValue2] = useState('Kilometer'); // mange output type
    const [value, setValue] = useState();
    

    // convert value 
    const converter = (input) =>{
        // for input meter
        if(buttonDefValue1 === 'Meter'){
            if(buttonDefValue2 === 'Meter'){
                const result = input * 1;
                setValue(result);
            }else if(buttonDefValue2 === 'Kilometer'){
                const result = input/100;
                setValue(result);
            }else if(buttonDefValue2 === 'Centimeter'){
                const result = input * 100;
                setValue(result);
            }else if(buttonDefValue2 === 'Milimeter'){
                const result = input * 1000;
                setValue(result);
            }
        }
        // for input kilometer
        else if(buttonDefValue1 === 'Kilometer'){
            if(buttonDefValue2 === 'Meter'){
                const result = input * 1000;
                setValue(result);
            }else if(buttonDefValue2 === 'Kilometer'){
                const result = input*1;
                setValue(result);
            }else if(buttonDefValue2 === 'Centimeter'){
                const result = input * 100000;
                setValue(result);
            }else if(buttonDefValue2 === 'Milimeter'){
                const result = input * 1000000;
                setValue(result);
            }
        }
        // for input centimeter
        else if(buttonDefValue1 === 'Centimeter'){
            if(buttonDefValue2 === 'Meter'){
                const result = input * 0.01;
                setValue(result);
            }else if(buttonDefValue2 === 'Kilometer'){
                const result = input*0.00001;
                setValue(result);
            }else if(buttonDefValue2 === 'Centimeter'){
                const result = input * 1;
                setValue(result);
            }else if(buttonDefValue2 === 'Milimeter'){
                const result = input * 10;
                setValue(result);
            }

            // for input milimeter
            else if(buttonDefValue1 === 'Milimeter'){
                if(buttonDefValue2 === 'Meter'){
                    const result = input * 0.001;
                    setValue(result);
                }else if(buttonDefValue2 === 'Kilometer'){
                    const result = input*0.000001;
                    setValue(result);
                }else if(buttonDefValue2 === 'Centimeter'){
                    const result = input * 0.1;
                    setValue(result);
                }else if(buttonDefValue2 === 'Milimeter'){
                    const result = input * 1;
                    setValue(result);
                }
            }
        }
        
    }

    
    console.log(value);
    return (
        <section className='container'>
            <Navbar/>
            <h4 className='mb-3 mt-3'>Length</h4>
            
            <div className='row '>
                <div className='col-md-6 border p-3'>
                    <h5 className='bg-success text-white p-2'>{buttonDefValue1}</h5>
                    <form >
                        <input onChange={e => converter(e.target.value)}  className='form-control' type='number' defaultValue='0'/>
                    </form>
                    <ul>
                        <li className='button-style' onClick={() => setButtonDifValue1("Meter")}>Meter</li>
                        <li className='button-style' onClick={() => setButtonDifValue1("Kilometer")}>Kilometer</li>
                        <li className='button-style' onClick={() => setButtonDifValue1("Centimeter")}>Centimeter</li>
                        <li className='button-style' onClick={() => setButtonDifValue1("Milimeter")}>Milimeter</li>
                    </ul>
                </div>
                <div className='col-md-6 border p-3'>
                    <h5 className='bg-success text-white p-2'>{buttonDefValue2}</h5>
                    <input className='form-control' type='number' value={value}/>
                    <ul>
                        <li className='button-style' onClick={() => setButtonDifValue2("Meter")}>Meter</li>
                        <li className='button-style' onClick={() => setButtonDifValue2("Kilometer")}>Kilometer</li>
                        <li className='button-style' onClick={() => setButtonDifValue2("Centimeter")}>Centimeter</li>
                        <li className='button-style' onClick={() => setButtonDifValue2("Milimeter")}>Milimeter</li>
                    </ul>
                </div>

            </div>

        </section>
    );
};

export default Length;
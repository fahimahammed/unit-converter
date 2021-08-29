import React, { useState } from 'react';

const UnitConverter = () => {
    const [buttonDefValue1, setButtonDifValue1] = useState('Meter');
    const [buttonDefValue2, setButtonDifValue2] = useState('Kilometer');
    const [value, setValue] = useState();
    
    const converter = (input) =>{
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
        
    }

    
    console.log(value);
    return (
        <section className='container'>
            <h4>Length</h4>
            
            <div className='row'>
                <div className='col-md-6'>
                    <h5>{buttonDefValue1}</h5>
                    <form >
                        <input onChange={e=> converter(e.target.value)}  className='form-control' type='number' defaultValue='0'/>
                    </form>
                    <ul>
                        <li onClick={() => setButtonDifValue1("Meter")}>Meter</li>
                        <li onClick={() => setButtonDifValue1("Kilometer")}>Kilometer</li>
                        <li onClick={() => setButtonDifValue1("Centimeter")}>Centimeter</li>
                        <li onClick={() => setButtonDifValue1("Milimeter")}>Milimeter</li>
                    </ul>
                </div>
                <div className='col-md-6'>
                    <h5>{buttonDefValue2}</h5>
                    <input className='form-control' type='number' value={value}/>
                    <ul>
                        <li onClick={() => setButtonDifValue2("Meter")}>Meter</li>
                        <li onClick={() => setButtonDifValue2("Kilometer")}>Kilometer</li>
                        <li onClick={() => setButtonDifValue2("Centimeter")}>Centimeter</li>
                        <li onClick={() => setButtonDifValue2("Milimeter")}>Milimeter</li>
                    </ul>
                </div>

            </div>
            
        </section>
    );
};

export default UnitConverter;
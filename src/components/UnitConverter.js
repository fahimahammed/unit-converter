import React, { useState } from 'react';

const UnitConverter = () => {
    const [buttonDefValue1, setButtonDifValue1] = useState('Meter');
    const [buttonDefValue2, setButtonDifValue2] = useState('Kilometer');
    const [inputValue, setInputValue] = useState(null);
    const [outputValue, setOutputValue] = useState('');
    console.log(inputValue);
    let km = 0;
    if(buttonDefValue1 === 'Meter'){
        km = inputValue * 100;
        // setOutputValue(km);
        
    }
    else if(buttonDefValue1 === 'Kilometer'){
        console.log("km")
    }
    return (
        <section className='container'>
            <h4>Length</h4>
            
            <div className='row'>
                <div className='col-md-6'>
                    <h5>{buttonDefValue1}</h5>
                    <form >
                        <input onChange={e=> setInputValue(e.target.value)}  className='form-control' type='number'/>
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
                    <input className='form-control' type='number' value={km}/>
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
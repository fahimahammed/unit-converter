import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <section className='text-center'>
            <div class="btn-group" role="group" aria-label="Basic example">
                <Link to='/length'><button type="button" class="btn btn-success  nav-btn">Length</button></Link>
                <Link to='/temp'><button type="button" class="btn btn-success nav-btn">Temperature</button></Link>
                <Link to='/time'><button type="button" class="btn btn-success nav-btn">Time</button></Link>
            </div>
        </section>
    );
};

export default Navbar;
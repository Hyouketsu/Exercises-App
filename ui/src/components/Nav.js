import React from 'react';
import { Link } from 'react-router-dom';

function Navigation(){
    return(
        <>
            <nav>
                <Link to="/">Home Page</Link>
                <Link to="../add">Create</Link>
            </nav>
        </>
    );
}
export default Navigation;
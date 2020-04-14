import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div>
           <NavLink to="/signin">signin</NavLink>
           <NavLink to="/signup">signup</NavLink>
      </div>
    );
}
 
export default Navigation;
import React from "react";
import logo from '../imagenes/freecodecamp-logo.png';

function Logo (){
  return(

    <div className='contendor-logo'>
      <img 
        src= { logo } 
        className = 'logo'
        alt = 'logo de la aplicación' 
      />
    </div>
  );
}

export { Logo };
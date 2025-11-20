import React from 'react';
import {Mail} from "lucide-react";

import "../styles/components/CustomButton.css"

const CustomButton = ({children}) => {
 return (

     <button type="submit" className="custom-btn">
         <Mail size={16}/>
         {children}
     </button>
 );
};

export default CustomButton;
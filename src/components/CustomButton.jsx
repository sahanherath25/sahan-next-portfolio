import React from 'react';
import {Mail} from "lucide-react";

import "../styles/components/CustomButton.css"

const CustomButton = ({children}) => {
 return (

     <button type="submit" className="custom-btn mt-4  lg:mt-9 text-gray-900 hover:bg-gray-100 px-8 py-2 text-lg rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl">
         <Mail size={16}/>
         {children}
     </button>
 );
};

export default CustomButton;
import React, { useState } from 'react'
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';

import "./Dropdown.css"

const  Dropdown = (props) => {

  const [choice , setChoice] = useState("")

  const handleMCQ = (e)=>{
   const value=e.target.value;
   //console.log(value);
   switch(value){
     case 1: 
        {
        setChoice("radio"); 
        props.onSelect(choice) ;  
        break; 
        }
    case 2: 
      {
      setChoice("checkbox");    
      props.onSelect(choice) ;   
      break;     
      }
          
    case 3:
        {
        setChoice("hidden"); 
        props.onSelect(choice) ; 
        break;  
        }  
        
    default :
    {
      setChoice("MCQ");    
      props.onClick(choice) ;  
      break;      
      }


}
}
  //console.log(choice);

  return(
    <>
  <label class="dropdown">

  <div class="dd-button">
    Dropdown
  </div>

  <input type="checkbox" class="dd-input" id="test"/>

  <ul class="dd-menu">
    <li onClick={handleMCQ} value="1" ><RadioButtonCheckedIcon />Multiplechoice</li>
    <li onClick={handleMCQ} value="2"><CheckBoxIcon />checkboxes</li>
    <li onClick={handleMCQ} value="3"><ArrowDropDownCircleIcon /> Dropdowns</li>
    {/* <li class="divider"></li>
    <li>
      <a href="http://rane.io">Link to Rane.io</a>
    </li> */}
  </ul>
  
</label>
</>
    )
       }
   

  export default Dropdown
import { useState } from "react";
import { customStyles } from "./locations";

import Select from 'react-select';
import { toGetAllData } from "../data/data";
const Academic= ({background,setAllData,allData}) => {

 
     const options =background.map((i)=>({
         value:i,
         label:i
 
     }))
     
 
   const [selectedOptions, setSelectedOptions] = useState([]);
 
   const handleChange = (selected) => {
     setSelectedOptions(selected);

     
     let academicBackgrounds=selected.map((i)=>i.value);
    

    function addUniqueObject(arr, obj) {
      const exists = arr.some(item => item.id === obj.id);
      if (!exists) {
          arr.push(obj);
      }
  }
  
      let finalData=[];
          for(const applicant of toGetAllData)
          {
            
            if(academicBackgrounds.some((i)=>applicant.education.toLowerCase().includes(i.toLowerCase())) )
            {
  
              addUniqueObject(finalData,applicant);
            }
          }
          setAllData(finalData);


  

  
    
   };
 
   return (
     <div className='options'>
       <Select styles={customStyles}
         options={options} 
         isMulti 
         value={selectedOptions} 
         onChange={handleChange} 
         placeholder="Eg. Btech" 
         noOptionsMessage={() => 'No options available'}
       />
     </div>
   );
 };
 
 export default Academic;
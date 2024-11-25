import { useState } from "react";
import { customStyles } from "./locations";

import Select from 'react-select';
import { toGetAllData } from "../data/data";
const Graduation= ({year,setAllData,allData}) => {
    

 
     const options =year.map((i)=>({
         value:i,
         label:i
 
     }))
     
 
   const [selectedOptions, setSelectedOptions] = useState([]);
 
   const handleChange = (selected) => {
     setSelectedOptions(selected);
    
     const years=  selected.map((i)=>i.value);

     function addUniqueObject(arr, obj) {
      const exists = arr.some(item => item.id === obj.id);
      if (!exists) {
          arr.push(obj);
      }
  }
  
  
     let finalData=[];
     for(const applicant of toGetAllData)
     {
        
       const checkGraduationYear=years.some((i)=>{
                            if(applicant.graduationYear.includes(i) ) return true;
                            else if(i.includes("2021") ) 
                                {
                                    if (applicant.graduationYear.slice(-4)<=2021) return true;
                                }
                                return false;
                           
                        });
      

    
       if(checkGraduationYear)
       {
  
         addUniqueObject(finalData,applicant);
       }
     }
     
     setAllData(finalData
     )
    


  
   };
 
   return (
     <div className='options'>
       <Select styles={customStyles}
         options={options} 
         isMulti 
         value={selectedOptions} 
         onChange={handleChange} 
         placeholder="Eg. 2024" 
         noOptionsMessage={() => 'No options available'}
       />
     </div>
   );
 };
 
 export default Graduation;
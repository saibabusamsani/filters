import { useState } from "react";
import { customStyles } from "./locations";

import Select from 'react-select';
import { toGetAllData } from "../data/data";
const Skill= ({skill,setAllData,allData}) => {

 
     const options =skill.map((i)=>({
         value:i,
         label:i
 
     }))
     
 
   const [selectedOptions, setSelectedOptions] = useState([]);
 
   const handleChange = (selected) => {
     setSelectedOptions(selected);


   const skills=  selected.map((i)=>i.value);

   function addUniqueObject(arr, obj) {
    const exists = arr.some(item => item.id === obj.id);
    if (!exists) {
        arr.push(obj);
    }
}


   let finalData=[];
   for(const applicant of toGetAllData)
   {
    //     skills          applicant.skills
     // [java,spring] = [javascript,java]
    let applicantSkills=applicant.skills.map(i=>i.toLowerCase());
     if(skills.some((i)=>applicantSkills.includes(i.toLowerCase())))
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
         placeholder="Eg. Java" 
         noOptionsMessage={() => 'No options available'}
       />
     </div>
   );
 };
 
 export default Skill;
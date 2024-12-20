
import "./block3.css"

import Percentage from "./percentage";

import Location from "./locations";
import Skill from "./skill";
import Academic from "./academic";
import Graduation from "./graduation";


import { options, toGetAllData } from "../data/data";
import Experience from "./experience";




const  Block3=({setAllData,allData,setFilterData,filterData})=>
{

    const genderHandle=(i)=>{
        let finalData=[];

    
        for(const applicant of toGetAllData)
        {
            if(applicant.Gender.toLowerCase().includes(i.toLowerCase())) finalData.push(applicant)
           
        }
        setAllData(finalData
        )
    }
  
    // <Question msg="Applicants whose current location/hometown is same as job location"/>
    // <Question msg="Applicants whose posses atleast one of the mentioned skills"/>
    // <Question msg={"Applicants who hold preffered language"}/>
    // <Question msg={"Applicants last course/degree graduation year"}/>
    // <Question msg={"Applicants whose minimum score throughout these academic history"}/>
    // <Question msg={"Applicants whose minimum experience"}/>
    return(
        <div className="block33">
        <div className="block3">
            <h4>Filters</h4>
            <div>
                <label style={{fontWeight:"600"}}>Applicants' locations </label><br></br>
                <Location location={options.location}  setAllData={setAllData} allData={allData}/>
        

            </div>
            <div>
                <label style={{fontWeight:"600"}}>Skills </label><br></br>
                <Skill skill={options.skill} setAllData={setAllData} allData={allData}/>
            </div>
            <div>
                <label style={{fontWeight:"600"}}>Acdemic background </label>
               <Academic background={options.background} setAllData={setAllData} allData={allData}/>
            </div>
            <div>
                <label style={{fontWeight:"600"}}>Graduation year </label>
                <Graduation year={options.year} setAllData={setAllData} allData={allData}/>
            </div>
            <div>
                <label style={{fontWeight:"600"}}>Gender </label>
                <div className="checkbox">
                            <label><input type="checkbox" name="gender" value="M" onChange={(i)=>{genderHandle(i.target.value)}} /> Male </label> 
                            <label><input type="checkbox" name="gender" value="F"onChange={(i)=>{genderHandle(i.target.value)}}/> Female </label> 
                            <label><input type="checkbox" name="gender" value="other"/> Other </label> 
                </div>
            </div>
            <div>
                <label style={{fontWeight:"600"}}>Academic perfomance </label>
                <Percentage></Percentage>
            </div>
            <div>
                <label style={{fontWeight:"600"}}>Experience</label>
                <Experience/>
            </div>
           

          

            

        </div>
        <div className="b3btn">
                <button className="btn1"  onClick={()=>setFilterData(toGetAllData)} >Clear</button>
                <button className="btn2" onClick={()=>{

                    
                    setFilterData(allData);
                }}>Show results</button>
            </div>
        </div>
    )
}
export default Block3;
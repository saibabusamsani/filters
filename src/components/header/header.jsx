import { useState } from "react";
import "./header.css";
import {  IoMdSearch } from "react-icons/io";
import { toGetAllData } from "../data/data";
function Header({setFilterData})
{
    const [name,setName]=useState("");
    let data=toGetAllData;
    const handle=(i)=>{
        setName(i.target.value);
        setFilterData( data.filter((i)=>i.name.toLowerCase().includes(name.toLowerCase())));
            
    
        
    }

    return(
        <div className="head">
            <h3 className="h3">Applications for Digital Marketing internship</h3>
            <div className="searchBar">
            <IoMdSearch className="IomdSearch"/>
            <input type="text" placeholder="enter name" className="inp"  value={name} onChange={(handle)} onClick={()=>setName("")}></input>
            </div>
        </div>
    )

}
export default Header;
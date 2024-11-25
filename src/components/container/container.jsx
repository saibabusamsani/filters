import {  useState } from "react";

import Block1 from "../block1/block1";
import Block2 from "../block2/block2";
import Block3 from "../block3/block3";
import Header from "../header/header";

import "./container.css"
import { toGetAllData } from "../data/data";

function Container()
{



    const[allData,setAllData]=useState([]);
    const[filterData,setFilterData]=useState(toGetAllData);


    return(
       <div className="container">
            <Header setFilterData={setFilterData}></Header>
            <div className="body">
                <Block1 ></Block1>
                <Block2 allData={filterData} ></Block2>
                <Block3  setAllData={setAllData} allData ={allData} setFilterData={setFilterData} filterData={filterData}
            ></Block3>
            </div>
       </div>
    )
}
export default Container;
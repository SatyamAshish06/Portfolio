import React,{useState} from "react";
import experience from "./experience";
function Experience(){
    const[Val,setVal]=useState(0);

    return(<div className="experience-component" id="experience-component">
        <div className="component-title">
            <h1>Experience</h1>
        </div>
        <div className="experience-content">
            <div className="experience-title">
                {experience.map((items,index)=><div className="experience-title-box" onClick={()=>setVal(index)}>{items.name}</div>)}
                
            </div>
            <div className="experience-description">
                <h1 >{experience[Val].name}</h1>
                <h3 >Designation: {experience[Val].designation}</h3>
                <h4 >Period: {experience[Val].start_date} to {experience[Val].end_date===""? "present":experience[Val].end_date}</h4>
                
                <p >{experience[Val].description}</p>

            </div>
        </div>
    </div>);
}
export default Experience;
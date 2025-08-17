import React,{useState} from "react";
import technical from "./skills";
import certification from "./certifications";
function Skills(){
    
    const [skill,setSkill]=useState("technical");

    return(<div className="skill-component" id="skill-component">
        <div className="component-title">
            <h1>Skills</h1>
        </div>
        <div className="skill-component-box">
            <div className="skill-box-title">
                <span onClick={()=>setSkill("technical")} style={{fontSize:skill==="technical"?"30px":null,fontWeight:skill==="technical"?"bold":null}}>Technical Skills</span>
                <span onClick={()=>setSkill("certification")} style={{fontSize:skill==="certification"?"30px":null,fontWeight:skill==="certification"?"bold":null}}>Certifications</span>
            </div>
            {skill==="technical" && <div className="skill-technical-box">
                {technical.map((items,index)=>
                <div className="technical-box">
                    <div className="technical-box-title" key={index}>{items.title}</div>
                    <div className="technical-box-content">
                        {items.skills.map((content)=><div className="technical-skills">{content}</div>)}
                    </div>
                </div>
                )}
            </div>}

            {skill==="certification" && <div className="skill-certification-box"><ul>
                {certification.map((items,index)=><li><div className="certification-box">
                    <div className="certificate-title">{items.title} <span>view</span></div>
                    
                    <div className="certificate-description">{items.description} </div>
                    {/* <div className="view-certificate">view </div> */}
                </div></li>)}</ul>
            </div>}
            </div>
        

    </div>);
}
export default Skills;
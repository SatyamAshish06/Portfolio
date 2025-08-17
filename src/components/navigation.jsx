import React,{useState} from "react";
import resume from "../static/Satyam_Ashish_Software_Developer.pdf";
import { useNavigate } from "react-router-dom";
function Navigation(){
    const[view,setView]=useState(false);
    const navigate=useNavigate();
    return (<div className="navigation">
        <div className="navigation-title">
            <h1 onClick={()=>navigate("/")}>My Resume</h1>
        </div>
        
        <div className="navigation-components">
        <div className="navigation-buttons"><a href={resume}>Resume</a></div>
            <div className="navigation-buttons"><a href="#profile-box">Profile</a></div>
            <div className="navigation-buttons"><a href="#experience-component">Experience</a></div>
            <div className="navigation-buttons"><a href="#education-component">Education</a></div>
            <div className="navigation-buttons"><a href="#project-component">Projects</a></div>
            <div className="navigation-buttons"><a href="#skill-component">Skills</a></div>
            <div className="navigation-buttons">Links</div>
            <div className="navigation-buttons"><a href="#contact-component">Contact</a></div>
        </div>
        <div className="click" onClick={()=>setView(!view)}>Menu</div>
        {view===true && <div className="navigation-components-verical">
        <div className="navigation-buttons-vertical">Resume</div>
            <div className="navigation-buttons-vertical"><a href="#profile-box">Profile</a></div>
            <div className="navigation-buttons-vertical"><a href="#experience-component">Experience</a></div>
            <div className="navigation-buttons-vertical"><a href="#education-component">Education</a></div>
            <div className="navigation-buttons-vertical"><a href="#project-component">Projects</a></div>
            <div className="navigation-buttons-vertical"><a href="#skill-component">Skills</a></div>
            <div className="navigation-buttons-vertical">Links</div>
            <div className="navigation-buttons-vertical"><a href="#contact-component">Contact</a></div>
        </div>}

    </div>);
}
export default Navigation;
import React from "react";
import Navigation from "../components/navigation";
import "./resume.css"
import Profile from "../components/profile";
import Experience from "../components/experience.jsx";
import Education from "../components/education.jsx";
import Skills from "../components/skills.jsx";
import Project from "../components/projects.jsx";
import Contact from "../components/address.jsx";
function Home(){
const arr=[Profile,Experience,Education,Project,Skills,Contact];

    return(<div className="resume-page"> 
        <div className="navigation-bar">
            <Navigation/>
        </div>
        <div className="page-components">
            {arr.map((Component,index)=><div className="component-box" key={index}><Component/></div>)}
            {/* <div className="component-box">
                <Profile/>
            </div> */}
            
        </div>
        
    </div>);
}
export default Home;
import React from "react";
import project from "./project";
function Project(){
    return(<div className="project-component" id="project-component">
        <div className="component-title">
            <h1>Projects</h1>
        </div>
        <div className="project-content">
            {project.map((items)=><div className="project-content-box">
            <div className="project-title"><h2>{items.title}</h2></div>
            <div className="project-description">{items.description}</div>
        </div>)}
        
        </div>

    </div>);
}
export default Project;
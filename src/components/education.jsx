import React from "react";
import education from "./education";
function Education(){
    return(<div className="education-component" id="education-component">
        <div className="component-title">
            <h1>Education</h1>
        </div>
        <div className="education-table">
            <table>
            <tr><th>Degree</th>
            <th>Intitute Name</th>
            <th>Academic Year</th>
            <th>%tage / CGPA</th></tr>
            {education.map((items)=><tr><td>{items.degree}</td><td>{items.institute}</td><td>{items.Year}</td><td>{items.score}</td></tr>)}
            
            </table>
        </div>

    </div>);
}
export default Education;
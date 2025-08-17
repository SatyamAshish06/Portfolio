import React from "react";
import logo from "../static/satyamAshish.png";
function Profile(){
    return(<div className="profile-box" id="profile-box">
        <div className="profile-box-left">
            <img src={logo} alt="profile-image"/>

            <div className="profile-content">
                <span>Name: Satyam Ashish</span>
                <span>Degree: B.E</span>
                <span>Age: 23 years</span>
                <span draggable="true">Email: satyamashish399@gmail.com</span>
            </div>
        </div>
        <div className="profile-box-right">
            <h3>Final-year B.E. student in Computer and Communication Engineering at N.M.A.M. Institute of Technology with a solid academic foundation and practical experience in software development. Demonstrates strong problem-solving abilities, a commitment to learning, and a collaborative approach to project work. Eager to contribute to real-world solutions and grow within a forward-thinking organization.</h3>

        </div>
    </div>);
}
export default Profile;
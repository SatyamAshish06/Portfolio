import React,{useState} from "react";
function Contact(){

    const[val,setVal]=useState({name:"",mail:"",text:""});
    return(<div className="contact-component" id="contact-component">
        <div className="component-title">
        <h1>Contacts</h1>
        </div>
        <div className="contact-box">
            <div className="details">
                <div className="detail-title">Contact Details</div>
                <div className="details-content">
                    <div><b>D.O.B:</b> 06 July,2003</div>
                    <div draggable="true"><b>Phone:</b> 7296981870</div>
                    <div draggable="true"><b>Mail:</b> satyamashish399@gmail.com</div>
                    <div draggable="true"><b>Address:</b> Anand nagar, attardah, anand marg road, Muzaffarpur, Bihar, 842002</div>
                </div>
            </div>
            <div className="mail">
                <div className="mail-title">Mail</div>
                <div className="mail-form">
                    <div className="mail-box">
                        <input type="text" placeholder="Enter your name" value={val.name} onChange={(e)=>{setVal({...val,name:e.target.value})}} className="mail-content"/>
                        <input type="email" placeholder="Enter your email" value={val.mail} onChange={(e)=>{setVal({...val,mail:e.target.value})}} className="mail-content"/>
                        <textarea type="text" placeholder="Write your message " value={val.text} onChange={(e)=>{setVal({...val,text:e.target.value})}} className="mail-textarea"/>
                        <div className="send">Send</div>
                    </div>
                </div>
            </div>
        </div>

    </div>);
}
export default Contact;
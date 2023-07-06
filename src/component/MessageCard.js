import React, { useState } from "react";
import { useSelector } from "react-redux";

let MessageCard = () => {

   

    
    let [message,setMessage]=useState('Hello');
    let greet=()=>{
          setMessage('Good morning')
    }

    let sayGoodEvening=(value)=>{
        setMessage(value)
    }

    let greetPerson=(value,name)=>{
        setMessage(value +" "+name)
    }
    return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <h2>{message} </h2>
                                <button className="btn btn-success m-1" onClick={greet} type="button" >greet</button>
                                <button className="btn btn-warning m-1" onClick={()=>setMessage('Good afternon')} type="button" >Afternon</button>
                                <button className="btn btn-primary m-1" onClick={sayGoodEvening.bind(this,'good evening')} type="button" >Good Evening</button>
                                <button className="btn btn-info m-1" onClick={greetPerson.bind(this,'hell','musab')} type="button" >greeting Person</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default MessageCard;
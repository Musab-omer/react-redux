import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {goodAfternoon, goodEvening, greet, greetPerson} from '../redux/messageCard/messageCard.actions'
import { messageFeatureKey } from "../redux/messageCard/messageCard.reducer";

let MessageCard = () => {
    //trigger an action to updates/modifies store
    let dispatch=useDispatch()
    //get data from REDUX store
    let messageCardInfo=useSelector((state)=>{
        return state[messageFeatureKey]
    });

    let greet1=()=>{
        dispatch(greet())
    }
    
    let sayGoodAfternoon=()=>{
        dispatch(goodAfternoon())
    }
    let sayGoodEvening=()=>{
        dispatch(goodEvening())
    }

    let sayGreetPerson=()=>{
        dispatch(greetPerson())
    }
    return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <h2>{messageCardInfo.message} </h2>
                                <button className="btn btn-success m-1" onClick={greet1} type="button" >greet</button>
                                <button className="btn btn-warning m-1" onClick={sayGoodAfternoon} type="button" >Afternon</button>
                                <button className="btn btn-primary m-1" onClick={sayGoodEvening} type="button" >Good Evening</button>
                                <button className="btn btn-info m-1" onClick={sayGreetPerson} type="button" >greeting Person</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default MessageCard;
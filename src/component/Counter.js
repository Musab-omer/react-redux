import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterFeatureKey } from "../redux/counter/counter.reducer";
import * as counterAction from '../redux/counter/counter.actions';


let Counter = () => {
    //get data from REDUX store
    let counterInfo=useSelector((state)=>{
        return state[counterFeatureKey]
    });

    //dispatch an action 
    let dispatch=useDispatch();
    let incCounter=()=>{
        dispatch(counterAction.incrementCounter())
    }

    let decCounter=()=>{
        dispatch(counterAction.decrementCounter())
    }
    return (
        <React.Fragment>
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header bg-warning">
                                <p className="h4">Counter</p>
                            </div>
                            <div className="card-body">
                                <p className="h2">{counterInfo.counter}</p>
                                <button className="btn btn-success m-1" onClick={incCounter} >Increment</button>
                                <button className="btn btn-warning m-1" onClick={decCounter} >Decrment</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default Counter;
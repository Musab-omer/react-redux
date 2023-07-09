import React, { useState } from "react";
import imgEat from "../assets/img/sudan.jpg";
import imgCoding from "../assets/img/desert_4.jpg";
import imgsleep from "../assets/img/desert_2.jpg";
import { useDispatch, useSelector } from "react-redux";
import {hobiesFeatureKey} from '../redux/hobies/hobbySelector.reducer'
import * as hobbySelectorAction from '../redux/hobies/hobbySelector.actions'

let Hobies = () => {
    //get data from Redux store
    let hobiesInfo=useSelector((state)=>{
        return state[hobiesFeatureKey]
    })
    let {hobies}=hobiesInfo;
    
    let dispatch=useDispatch();
    
    return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header bg-success text-white">
                                <p className="h4">Hobies App</p>
                            </div>
                            <div className="card-body bg-light">
                                <div className="row">
                                    <div className="col-md-3">
                                        <form>                                            
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="eating" name="eating"
                                                        onChange={e=>{dispatch(hobbySelectorAction.eatingCheck(e.target.checked))}}
                                                    />
                                                    <label className="form-check-label" for="eating">Eating</label>
                                                </div>
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="coding" name="coding"
                                                        onChange={e=>{dispatch(hobbySelectorAction.codingCheck(e.target.checked))}}
                                                    />
                                                    <label className="form-check-label" for="coding">Coding</label>
                                                </div>
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="sleeping" name="sleeping"
                                                        onChange={e=>{dispatch(hobbySelectorAction.sleepingCheck(e.target.checked))}}
                                                    />
                                                    <label className="form-check-label" for="sleeping">Sleeping</label>
                                                </div>                                          
                                        </form>
                                    </div>
                                    <div className="col d-flex">

                                        {
                                            hobies.eating ?
                                                <React.Fragment>
                                                    <div className="card shadow animated jello" id="eating-card">

                                                        <div className="card-header">
                                                            <img src={imgEat} className="img-fluid" />
                                                        </div>
                                                        <div className="card-body">
                                                            <p>Est amet fugiat consectetur pariatur aliquip id eiusmod exercitation laborum velit enim ex do ut. Deserunt amet et aliqua voluptate nulla incididunt sint. Reprehenderit occaecat do quis ipsum quis elit veniam do. Quis qui Lorem sunt adipisicing cillum sint amet voluptate quis aliquip. Cupidatat aliquip dolor sit ad mollit aliqua do. Labore amet et nulla ipsum et ut est in. Pariatur dolor ad ullamco consectetur consequat ut ex officia.</p>
                                                        </div>
                                                    </div>
                                                </React.Fragment> : null
                                        }

                                        {
                                            hobies.coding ?
                                                <React.Fragment>
                                                    <div className="card shadow animated jello" id="code-card">
                                                        <div className="card-header">
                                                            <img src={imgCoding} className="img-fluid" />
                                                        </div>
                                                        <div className="card-body">
                                                            <p>Est amet fugiat consectetur pariatur aliquip id eiusmod exercitation laborum velit enim ex do ut. Deserunt amet et aliqua voluptate nulla incididunt sint. Reprehenderit occaecat do quis ipsum quis elit veniam do. Quis qui Lorem sunt adipisicing cillum sint amet voluptate quis aliquip. Cupidatat aliquip dolor sit ad mollit aliqua do. Labore amet et nulla ipsum et ut est in. Pariatur dolor ad ullamco consectetur consequat ut ex officia.</p>
                                                        </div>
                                                    </div>
                                                </React.Fragment> : null
                                        }


                                        {
                                            hobies.sleeping ?
                                                <React.Fragment>
                                                    <div className="card shadow animated jello" id="sleep-card">
                                                        <div className="card-header">
                                                            <img src={imgsleep} className="img-fluid" />
                                                        </div>
                                                        <div className="card-body">
                                                            <p>Est amet fugiat consectetur pariatur aliquip id eiusmod exercitation laborum velit enim ex do ut. Deserunt amet et aliqua voluptate nulla incididunt sint. Reprehenderit occaecat do quis ipsum quis elit veniam do. Quis qui Lorem sunt adipisicing cillum sint amet voluptate quis aliquip. Cupidatat aliquip dolor sit ad mollit aliqua do. Labore amet et nulla ipsum et ut est in. Pariatur dolor ad ullamco consectetur consequat ut ex officia.</p>
                                                        </div>
                                                    </div>
                                                </React.Fragment> : null

                                        }
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default Hobies;
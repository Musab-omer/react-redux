import React, { useState } from "react";
import pizzaImg from '../assets/img/Pizza_Hut_adds_cheese.jpg';
import { useDispatch, useSelector } from "react-redux";
import { buyPizza } from "../redux/pizzahut/pizzahut.actions";
let PizzaHut = () => {

    let dispatch=useDispatch();
    //get the data from REDUX Store
    let pizzaInfo=useSelector((state)=>{
        return state['pizza'];
    })
    
    let clickBuyPizza=()=>{
        //dispatch an action to update the state
        dispatch(buyPizza());
    }
   
    return (
        <React.Fragment>
            <section className="p-3">
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <p className="h2 text-danger fw-bold">PizzaHut</p>
                            <p className="lead">Exercitation eu ipsum quis ullamco fugiat cillum voluptate elit incididunt occaecat reprehenderit officia sit aliquip. Id magna fugiat adipisicing deserunt quis nulla commodo. Nulla nostrud proident exercitation qui minim aliquip nulla irure. Minim non cupidatat deserunt ea adipisicing irure consequat ea eu nostrud nulla. Incididunt ipsum ex excepteur laboris ad aute enim reprehenderit exercitation tempor cupidatat.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <img src={pizzaImg} className="img-fluid img-thumbnail" alt="" />
                        </div>
                        <div className="col-md-6">
                            <p className="h2 text-danger">Checkin Pizza</p>
                            <p className="h4"> Available 
                                {/* <span className="fw-bold">{pizza.count}</span> */}
                                <span className="fw-bold"> {pizzaInfo.count}</span>
                            </p>
                         <button type="button" onClick={clickBuyPizza} className="btn btn-success btn-sm">buy pizza</button>
                           
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
export default PizzaHut
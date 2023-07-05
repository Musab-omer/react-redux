import React, { useState } from "react";
import pizza from '../assets/img/Pizza_Hut_adds_cheese.jpg';
let PizzaHut = () => {
    let[count,setCount]=useState(50)
    return (
        <React.Fragment>
            <section p-3>
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
                            <img src={pizza} className="img-fluid img-thumbnail" alt=""/>
                        </div>
                        <div className="col-md-6">
                            <p className="h2 text-danger">Checkin Pizza</p>
                            <p className="h4">
                                <span className="fw-bold">{count}</span>
                            </p>
                            <button type="button" onClick={e=>setCount(count-1>0?count-1:1)} className="btn btn-success btn-sm">buy pizza</button>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
export default PizzaHut
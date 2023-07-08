import React, { useState } from "react";

let CarSelector=()=>{
    let [Car, setCar]=useState('car')

    let selectCar=(e)=>{
        setCar(e.target.value)
    }
    return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="card shadow-lg">
                            <div className="card-header bg-secondary text-white">
                                <p className="h3">Car Selector</p>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-8">
                                        <form>
                                            <div className="mb-1">
                                                <select className="form-select" aria-label="car slect example"
                                                value={Car}
                                                onChange={selectCar}>
                                                    <option selected>Select Car</option>
                                                    <option value="BMW">BMW</option>
                                                    <option value="Adui">Adui</option>
                                                    <option value="KIA Seltos">KIA Seltos</option>
                                                    <option value="NEXA Baleno">NEXA Baleno</option>
                                                </select>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-md-4">
                                        <h2>{Car}</h2>
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
export default CarSelector;
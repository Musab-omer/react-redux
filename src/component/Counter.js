import React, { useState } from "react";


let Counter = () => {

    let [counter, setCounter] = useState(0)
    let counterInq = () => {
        setCounter(
            counter + 1
        )
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
                                <p className="h2">{counter}</p>

                                <button className="btn btn-success m-1" onClick={counterInq}>Increment</button>
                                <button className="btn btn-warning m-1" onClick={() => { setCounter(counter + 1) }}>Increment</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default Counter;
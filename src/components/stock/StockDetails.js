import React from "react";
import { useSelector } from "react-redux";
import { Link,useParams } from "react-router-dom";
import {stocksFeatureKey} from '../../redux/stock/stock.reducer'


let StockDetails=()=>{
let {id}=useParams();
let stocksInfo=useSelector((state)=>{
    return state[stocksFeatureKey]
})

let stock=stocksInfo.stocks.find(stock=>stock.id==id)

    return(
        <React.Fragment>
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header bg-warning text-center text-uppercase">
                                <p className="h4">{stock.name}</p>
                            </div>
                            <div className="card-body">
                                {/* <pre>{JSON.stringify(stock)}</pre> */}
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><span className="fw-bold">Industory :</span> {stock.industry}</li>
                                    <li className="list-group-item"><span className="fw-bold">Market :</span> {stock.market}</li>
                                    <li className="list-group-item"><span className="fw-bold">Sector :</span> {stock.sector}</li>
                                    <li className="list-group-item"><span className="fw-bold">Symbol :</span> {stock.symbol}</li>
                                </ul>
                            </div>
                            <div className="card-footer">
                                <Link to="/stocks/list" className="btn btn-dark btn-sm">Back</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default StockDetails;
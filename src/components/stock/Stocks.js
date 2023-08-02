import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { stocksFeatureKey } from '../../redux/stock/stock.reducer'
import { useEffect } from "react";
import * as stacksActions from '../../redux/stock/stock.action'
import spinnerImg from '../../assets/DzUd.gif'
import {useNavigate} from 'react-router-dom';
let Stacks = () => {
    let stacksInfo = useSelector((state) => {
        return state[stocksFeatureKey]
    })
    let { loading, stocks, errorMessage } = stacksInfo

    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(stacksActions.featchStacks())
    }, [])
    let navigate=useNavigate();
    let selectedStock=(stockId)=>{
        navigate(`/stocks/${stockId}`)
    }
    return (
        <React.Fragment>
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <h1>Stocks</h1>
                        <p className="text-justify lead">Sint eu commodo anim ut labore. Ut eiusmod exercitation laborum eiusmod in adipisicing ex ullamco nostrud consectetur ex pariatur dolore ut. Voluptate culpa duis qui sunt adipisicing id excepteur. Sint ipsum sit pariatur nulla.</p>
                        {
                                errorMessage !== "" ?
                                    <React.Fragment>
                                        {
                                            errorMessage.code === "ERR_BAD_REQUEST" ?
                                                <div className="alert alert-danger alert-dismissible fade show" role="alert">
                                                    <strong>{errorMessage.message}</strong> Contact Your Admin
                                                    {/* <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
                                                </div> :
                                                <div className="alert alert-danger alert-dismissible fade show" role="alert">
                                                    <strong>{errorMessage.message}</strong>
                                                    {/* <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
                                                </div>
                                        }
                                    </React.Fragment> : null
                            }
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <table id="example" className="table table-hover table-striped table-responsive-sm table-secondary text-center">
                            <thead className="table-dark text-dark text-uppercase">
                                <tr>
                                    <th>SNO</th>
                                    <th>Name</th>
                                    <th>Industry</th>
                                    <th>Market</th>
                                    <th>Sector</th>
                                    <th>Symbol</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    loading ?
                                        <tr>
                                            <td colSpan="6"><img src={spinnerImg} className="w-25 d-block m-auto" alt="" /></td>
                                        </tr> :
                                        stocks.length > 0 ?
                                            <React.Fragment>
                                                {
                                                    stocks.map(stock => {
                                                        return (
                                                            
                                                                <tr style={{cursor:"pointer"}} key={stock.id} onClick={selectedStock.bind(this,stock.id)}>
                                                                <td>{stock.id}</td>
                                                                <td>{stock.name}</td>
                                                                <td>{stock.industry}</td>
                                                                <td>{stock.market}</td>
                                                                <td>{stock.sector}</td>
                                                                <td>{stock.symbol}</td>
                                                            </tr>
                                                           
                                                        );
                                                    })
                                                }
                                            </React.Fragment> : null
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Stacks
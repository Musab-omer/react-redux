import React, { useState } from "react";
import imgEat from "../assets/img/sudan.jpg";
import imgCoding from "../assets/img/desert_4.jpg";
import imgsleep from "../assets/img/desert_2.jpg";


let HobiesRadio = () => {
    let [Hobby, setHobby] = useState(null);
    let selectHobby = (e) => {
        setHobby(e.target.value)
    }
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
                                                    <input type="radio" className="form-check-input" id="eating" value="eating" name="hobies"
                                                        onChange={selectHobby}
                                                    />
                                                    <label className="form-check-label" for="eating">Eating</label>
                                                </div>

                                          
                                                    <div className="form-check">
                                                        <input type="radio" className="form-check-input" id="coding" value="coding" name="hobies"
                                                            onChange={selectHobby}
                                                        />
                                                        <label className="form-check-label" for="coding">Coding</label>
                                                    </div>
                                             
                                                
                                                    <div className="form-check">
                                                        <input type="radio" className="form-check-input" id="sleeping" value="sleeping" name="hobies"
                                                            onChange={selectHobby}
                                                        />
                                                        <label className="form-check-label" for="sleeping">Sleeping</label>
                                                    </div>
                                               
                                        </form>
                                    </div>
                                    <div className="col-md-4 d-flex">

                                        {
                                            Hobby === "eating" ?
                                                <React.Fragment>
                                                    <div className="card shadow animated jello" id="eating-card">

                                                        <div className="card-header">
                                                            <img src={imgEat} className="img-fluid" />
                                                        </div>
                                                        <div className="card-body">
                                                            <p>Est amet fugiat consectetur pariatur aliquip id eiusmod exercitation laborum velit enim ex do ut. Deserunt amet et aliqua voluptate nulla incididunt sint. Reprehenderit occaecat do quis ipsum quis elit veniam do. Quis qui Lorem sunt adipisicing cillum sint amet voluptate quis aliquip. Cupidatat aliquip dolor sit ad mollit aliqua do. Labore amet et nulla ipsum et ut est in. Pariatur dolor ad ullamco consectetur consequat ut ex officia.</p>
                                                        </div>
                                                    </div>
                                                </React.Fragment> :
                                                null

                                        }

                                        {
                                            Hobby === "coding" ?
                                                <React.Fragment>
                                                    <div className="card shadow animated jello" id="code-card">
                                                        <div className="card-header">
                                                            <img src={imgCoding} className="img-fluid" />
                                                        </div>
                                                        <div className="card-body">
                                                            <p>Est amet fugiat consectetur pariatur aliquip id eiusmod exercitation laborum velit enim ex do ut. Deserunt amet et aliqua voluptate nulla incididunt sint. Reprehenderit occaecat do quis ipsum quis elit veniam do. Quis qui Lorem sunt adipisicing cillum sint amet voluptate quis aliquip. Cupidatat aliquip dolor sit ad mollit aliqua do. Labore amet et nulla ipsum et ut est in. Pariatur dolor ad ullamco consectetur consequat ut ex officia.</p>
                                                        </div>
                                                    </div>
                                                </React.Fragment> :
                                                null

                                        }


                                        {
                                            Hobby === "sleeping" ?
                                                <React.Fragment>
                                                    <div className="card shadow animated jello" id="sleep-card">
                                                        <div className="card-header">
                                                            <img src={imgsleep} className="img-fluid" />
                                                        </div>
                                                        <div className="card-body">
                                                            <p>Est amet fugiat consectetur pariatur aliquip id eiusmod exercitation laborum velit enim ex do ut. Deserunt amet et aliqua voluptate nulla incididunt sint. Reprehenderit occaecat do quis ipsum quis elit veniam do. Quis qui Lorem sunt adipisicing cillum sint amet voluptate quis aliquip. Cupidatat aliquip dolor sit ad mollit aliqua do. Labore amet et nulla ipsum et ut est in. Pariatur dolor ad ullamco consectetur consequat ut ex officia.</p>
                                                        </div>
                                                    </div>
                                                </React.Fragment> :
                                                null

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
export default HobiesRadio

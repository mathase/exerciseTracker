import React, { Component } from 'react'

class ExerciseTracker extends Component {
    state = {  }
    render() { 
        return (  
        <div>
            <div className="landing">
                <div className="shadow container card mt-5 pb-5">
                    <div className="row">
                    <div className="col-md-4">
                    </div>
                    <div className="col-md-8">
                        <div className="container mb-2">
                            <h2 className="mt-5 mb-2">Sign Up For Free.</h2>
                            <span className="">Find balance in your mind.</span>
                        </div>
                        <div className="container mt-5">
                            <div className="row">
                                 <div className="col-md-6">
                                     <div className="form-group">
                                       <label for="">Username</label>
                                       <input type="text"
                                           className="form-control form-control-sm" name="" id="" aria-describedby="helpId" placeholder="Enter your username"/>
                                     </div>
                                 </div>
                                 <div className="col-md-6">
                                     <div className="form-group">
                                       <label for="">Full Name</label>
                                       <input type="text"
                                           className="form-control form-control-sm" name="" id="" aria-describedby="helpId" placeholder="Enter your full name"/>
                                     </div>
                                 </div>
                                 <div className="col-md-6">
                                     <div className="form-group">
                                       <label for="">Email Address</label>
                                       <input type="text"
                                           className="form-control form-control-sm" name="" id="" aria-describedby="helpId" placeholder="Enter your email address"/>
                                     </div>
                                 </div>
                                 <div className="col-md-6">
                                     <div className="form-group">
                                       <label for="">Password</label>
                                       <input type="text"
                                           className="form-control form-control-sm" name="" id="" aria-describedby="helpId" placeholder="Enter your password"/>
                                     </div>
                                 </div>
                                 <div className="col-md-12 mt-3">
                                     <div class="form-check">
                                       <label class="form-check-label">
                                         <input type="checkbox" class="form-check-input" name="" id="" value="checkedValue" />
                                         I accept to the <a href="#top">terms and conditions</a> and i agree to the <a href="#top">privacy policy</a> 
                                       </label>
                                     </div>
                                 </div>
                                 <div className="col-md-12 mt-4">
                                 <button className="btn btn-primary">SIGN UP</button>

                                 </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
         </div> )
    }
}
 
export default ExerciseTracker;
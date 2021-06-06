import React, { Component, useState } from "react";

export const LoginHooks = () => {

    const [email, setEmail] = useState("karthick@tcs.com");
    const [password, setPassword] = useState();
    const [errorMsg, setErrorMsg] = useState();
    // useEffect( () => {
        

    // },[email,password])


    return (
        <div>
            <h3>Sign In</h3>
            <span style={{'color':'red'}}>{errorMsg}</span>
            <div className="form-group">
                <label>User Name</label>
                <input type="email" name ="email" className="form-control" onChange={(event)=>setEmail(event.target.value)} placeholder="Enter email" value={email}/>
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" name ="password" className="form-control" onChange={(event)=>setPassword(event.target.value)} placeholder="Enter password"value={password} />
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div>
            <button type="submit" className="btn btn-primary btn-block" >Submit</button>
            <p className="forgot-password text-right">
                Forgot <a href="#">password?</a>
            </p>
        </div>
    );

}
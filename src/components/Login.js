import React, { Component } from "react";

export default class Login extends Component {

    constructor(props){
        super(props)
        this.state={
            email:'',
            password:'',
        }
    }

    updateForm = (event) =>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    submitForm = () =>{        
        if(this.state.email === '') {
            this.setState({
                errorMsg:"Please enter the user name"
            })
        } else if(this.state.password === '') {
            this.setState({
                errorMsg:"Please enter the password"
            })
        } else {
            this.props.history.push({
                pathname : '/home',
                state :{userName : this.state.email}
                });
            //this.props.history.push('/home');
        }        
    }

    render() {
        return (
            <div>
                <h3>Sign In</h3>
                <span style={{'color':'red'}}>{this.state.errorMsg}</span>
                <div className="form-group">
                    <label>User Name</label>
                    <input type="email" name ="email" className="form-control" onChange={this.updateForm} placeholder="Enter email" value={this.state.email}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name ="password" className="form-control" onChange={this.updateForm} placeholder="Enter password"value={this.state.password} />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary btn-block" onClick={this.submitForm}>Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </div>
        );
    }
}
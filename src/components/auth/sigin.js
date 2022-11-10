import React, { Component } from 'react'

export default class SignIn extends Component {

    state = {
        email:"",
        password:"",
    }
    handleChange=(e)=>{
       this.setState({
        [e.target.id]:e.target.value
       })
    }
    handleSumit=(e)=>{
       e.preventDefault()
        console.log(this.state)
    }
    render() {
        return (
            <div className="container">
                <form  className="white" onSubmit={this.handleSumit}>
                <h5 className="grey-text text-darken-3"> signin</h5>
                        <div className="input-field">
                            <label htmlFor='email'>Email</label>
                            <input type="email" id="email" onChange={this.handleChange}></input>

                        </div>
                        <div className="input-field">
                            <label htmlFor='password'>Password</label>
                            <input type="password" id="password" onChange={this.handleChange}></input>

                        </div>
                        <div className="input-field">
                        <button className="btn pink">Login</button>
                        </div>
                    
                </form>
            </div>
        )
    }
}

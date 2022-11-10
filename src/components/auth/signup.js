import React, { Component } from 'react'

export default class SignUp extends Component {

    state = {
        email: "",
        password: "",
        firstname: "",
        lastname: ""
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSumit = (e) => {
        e.preventDefault()
        console.log(this.state)
    }
    render() {
        return (
            <div className="container">
                <form className="white" onSubmit={this.handleSumit}>
                <h5 className="grey-text text-darken-3"> signup</h5>
                        <div className="input-field">
                            <label htmlFor='email'>Email</label>
                            <input type="email" id="email" onChange={this.handleChange}></input>

                        </div>
                        <div className="input-field">
                            <label htmlFor='password'>Password</label>
                            <input type="password" id="password" onChange={this.handleChange}></input>

                        </div>
                        <div className="input-field">
                            <label htmlFor='firstname'>Firstname</label>
                            <input type="text" id="firstname" onChange={this.handleChange}></input>

                        </div>
                        <div className="input-field">
                            <label htmlFor='lastname'>lastName</label>
                            <input type="text" id="lastname" onChange={this.handleChange}></input>

                        </div>
                        <div className="input-field">
                            <button className="btn pink">SignUp</button>
                        </div>
                    
                </form>
            </div>
        )
    }
}
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authAction'


 class SignIn extends Component {

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
       this.props.signIn(this.state)
        
    }
    
    render() {
        const {authError}=this.props
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
                <div className='red-text center'>
                {
                    authError?<p>{authError}</p>:null
                }</div>
            </div>
        )
    }
}
const mapStatetoprops=(state)=>{
    return{
        authError:state.auth.authError
    }
}
const mapDispatchToprops=(dispatch)=>{
    return{
        signIn:(creds)=>dispatch(signIn(creds))
    }
}
export default connect(mapStatetoprops,mapDispatchToprops)(SignIn)

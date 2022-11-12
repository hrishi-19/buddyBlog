import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { signIn } from '../../store/actions/authAction'



 const SignIn =(props)=> {
    const navigate=useNavigate()
    const[state,setState]=useState({
        email:"",
        password:"",
    })
   
    const handleChange=(e)=>{
       setState({
       ...state, [e.target.id]:e.target.value
       })
    }
    const handleSumit=(e)=>{
        e.preventDefault()
        props.signIn(state)
        
    }
    
   
        const {authError,auth}=props
        if(auth.uid)return navigate('/')
        return (
            <div className="container">
                <form  className="white" onSubmit={handleSumit}>
                <h5 className="grey-text text-darken-3"> signin</h5>
                        <div className="input-field">
                            <label htmlFor='email'>Email</label>
                            <input type="email" id="email" onChange={handleChange}></input>

                        </div>
                        <div className="input-field">
                            <label htmlFor='password'>Password</label>
                            <input type="password" id="password" onChange={handleChange}></input>

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
const mapStatetoprops=(state)=>{
    return{
        authError:state.auth.authError,
        auth:state.firebase.auth
    }
}
const mapDispatchToprops=(dispatch)=>{
    return{
        signIn:(creds)=>dispatch(signIn(creds))
    }
}
export default connect(mapStatetoprops,mapDispatchToprops)(SignIn)

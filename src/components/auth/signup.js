import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { signUp } from '../../store/actions/authAction'

const SignUp=(props)=> {
    const navigate=useNavigate()
    const[state,setState]=useState({
        email: "",
        password: "",
        firstname: "",
        lastname: ""
    })
     const handleChange = (e) => {
        setState({
           ...state, [e.target.id]: e.target.value
        })
    }
    const handleSumit = (e) => {
        e.preventDefault()
        props.signUp(state)
    }
    const{auth,authError}=props
    if(auth.uid)return navigate('/')
   
        return (
            <div className="container">
                <form className="white" onSubmit={handleSumit}>
                <h5 className="grey-text text-darken-3"> signup</h5>
                        <div className="input-field">
                            <label htmlFor='email'>Email</label>
                            <input type="email" id="email" onChange={handleChange}></input>

                        </div>
                        <div className="input-field">
                            <label htmlFor='password'>Password</label>
                            <input type="password" id="password" onChange={handleChange}></input>

                        </div>
                        <div className="input-field">
                            <label htmlFor='firstname'>Firstname</label>
                            <input type="text" id="firstname" onChange={handleChange}></input>

                        </div>
                        <div className="input-field">
                            <label htmlFor='lastname'>lastName</label>
                            <input type="text" id="lastname" onChange={handleChange}></input>

                        </div>
                        <div className="input-field">
                            <button className="btn pink">SignUp</button>
                        </div>
                    
                </form>
                {authError?<p>{authError}</p>:null}
            </div>
        )
    
}
const mapStateToProps=(state)=>{
    return{
        auth:state.firebase.auth
    }
}
const mapDispatchToProps=(dispatch)=>{
    return(
        {
            signUp:(newUser)=>dispatch(signUp(newUser))
        }
    )

}
export default connect(mapStateToProps,mapDispatchToProps)(SignUp)
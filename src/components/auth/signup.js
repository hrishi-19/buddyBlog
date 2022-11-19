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
            <section>
            <div className="container px-6 py-12 h-full">
                <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                    <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                            className="w-full"
                            alt="Phone image"
                        />
                    </div>
                    <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
                        <form onSubmit={handleSumit}>

                            <div className="mb-6">
                                <input
                                    type="email"
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="Email address"
                                    id='email'
                                    onChange={handleChange}
                                />
                            </div>


                            <div className="mb-6">
                                <input
                                    type="password"
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="Password"
                                    id="password"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-6">
                            <input
                                type="text"
                                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                placeholder="First Name"
                                id="firstname"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-6">
                        <input
                            type="text"
                            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="Last Name"
                            id="lastname"
                            onChange={handleChange}
                        />
                    </div>
                            <button
                                type="submit"
                                className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="light"
                            >
                                Sign Up
                            </button>


                        </form>
                    </div>
                </div>
            </div>
        </section>
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
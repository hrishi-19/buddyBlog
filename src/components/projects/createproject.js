import React, { useState } from 'react'
import { createProject } from '../../store/actions/projectActions'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
 const  CreateProject=(props)=> {
    const navigate=useNavigate()
    const[state,setState]=useState({
        title: "",
        content:""
    })
    const {auth}=props.auth

   const handleChange = (e) => {
        setState({...state, [e.target.id]: e.target.value })
    }
    const handleSumit = (e) => {
        e.preventDefault()
        console.log(state)
        props.createProject(state)
        navigate('/')
    }

       

        return (
            <div className="w-full flex justify-center py-10">
                <form className="w-3/4" onSubmit={handleSumit}>
                   
                       
                           
                            <div className="mb-6">
                                    <input
                                        type="text"
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 "
                                        placeholder="Title"
                                        id='title'
                                        onChange={handleChange}
                                    />
                                </div>
                        
                                <div className="mb-6">
                                <textarea 
                                    type="text"
                                    className="form-control block w-full h-96 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 outline-0"
                                    placeholder="Content"
                                    id='content'
                                    onChange={handleChange}
                                />
                            </div>
                       
                        <div className="input-field">
                            <button className="btn pink">Submit</button>
                        </div>
                   
                </form>
            </div>
        )
    
}
const mapStateToprops=(state)=>{
    return{
     auth:state.firebase.auth
    }
 }
const mapDispathToProps=(dispatch)=>{
    return{
        createProject:(project)=>dispatch(createProject(project))
    }
}
export default connect(mapStateToprops,mapDispathToProps)(CreateProject)
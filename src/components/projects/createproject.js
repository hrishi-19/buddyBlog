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
    }
    
        if(!auth.uid)return navigate('/signin')
        return (
            <div className="container">
                <form className="white" onSubmit={handleSumit}>
                    <h5 className="grey-text text-darken-3"> create project</h5>
                        <div className="input-field">
                            <label htmlFor='title'>Title</label>
                            <input type="text" id="title" onChange={handleChange}></input>

                        </div>
                        <div className="input-field">
                            <label htmlFor='content'>Content</label>
                            <textarea className="materialize-textarea" id="content" onChange={handleChange}></textarea>

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
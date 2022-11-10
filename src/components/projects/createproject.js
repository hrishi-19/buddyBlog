import React, { Component } from 'react'

export default class CreateProject extends Component {

    state = {
        title: "",
        content:""
        
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
                    <h5 className="grey-text text-darken-3"> create project</h5>
                        <div className="input-field">
                            <label htmlFor='title'>Title</label>
                            <input type="text" id="title" onChange={this.handleChange}></input>

                        </div>
                        <div className="input-field">
                            <label htmlFor='content'>Content</label>
                            <textarea className="materialize-textarea" id="content" onChange={this.handleChange}></textarea>

                        </div>
                       
                        <div className="input-field">
                            <button className="btn pink">Submit</button>
                        </div>
                   
                </form>
            </div>
        )
    }
}
import React, { Component } from 'react'

class AddTodo extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    state = {
        content: ''
    }

    handleChange(e) {
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.addTodo(this.state)
        // console.log(this.state.content)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add new product</label>
                    <input type="text" onChange={this.handleChange}/>
                </form>
            </div>
        )
    }
}

export default AddTodo
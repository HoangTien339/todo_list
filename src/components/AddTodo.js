import React from 'react'
import {
    addTodo,
    updateAddTodo,
    addLog,
    submitTodo } from './../actions'
import _ from 'lodash'
import { connect } from 'react-redux'
import { uniqueId } from '../utils'

class AddTodo extends React.Component {
    constructor(props) {
        super(props)

        this.handleAddTodo = this.handleAddTodo.bind(this)
        this.handleUpdateAddTodo = this.handleUpdateAddTodo.bind(this)
    }

    handleUpdateAddTodo(event) {
        const payload = {
            value: event && event.target ? event.target.value : ''
        }

        this.props.dispatch(updateAddTodo(payload))
    }

    handleAddTodo(event) {
        event.preventDefault();
        const payload = {
            id: uniqueId(),
            todo: this.props.addTodo.value,
            complete: false
        }

        this.props.dispatch(submitTodo(payload))
        this.handleUpdateAddTodo()
    }

    render() {
        return (
            <div className="col-md-4 float-right pl-2">
                <form
                    className="form-group row"
                    onSubmit={this.handleAddTodo}
                    >
                    <label className="col-md-2 col-form-label">Add Todo</label>
                    <input
                        onChange={this.handleUpdateAddTodo}
                        className="form-control col-md-5"
                        value={this.props.addTodo.value}
                        />
                    <button className="btn btn-primary ml-2">Add</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    addTodo: state.addTodo
})

export default connect(mapStateToProps)(AddTodo)

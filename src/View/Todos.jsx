import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const Todos = ({todos, deleteTodo}) => {
    const TodoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="collection-item" key={todo.id}>
                    <span onClick={() => deleteTodo(todo.id)}>{todo.content}</span>
                </div>
            )
        })
    ) : (
        <p className="center">"You don't have any todo, huuuuuuu !!!!"</p>
    )
    return (
        <div className="todos collection">
            {TodoList}
        </div>

    )
}

export default Todos;

import React, { useState } from 'react'
import { Todo } from './Todo'
import { TodoForm } from './TodoForm'

export const TodoList = () => {
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        // /^\s*$/ test if a string is empty or 
        // contains only white spaces
        // /^ start at the beginning of the string
        // \s* matches any white space character
        // $ the end
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return
        }

        const newTodos = [todo, ...todos]
        setTodos(newTodos)
    }

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)

        setTodos(removeArr)
    }

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setTodos(updatedTodos)
    }

    return (
        <div>
            <h1>What's the plan for today?</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo
                todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
            />
        </div>
    )
}

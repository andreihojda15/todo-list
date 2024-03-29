import React, { useState, useEffect, useRef } from 'react'

export const TodoForm = (props) => {
    const [input, setInput] = useState(props.edit ? props.edit.value : '')

    const inputRef = useRef(null)

    useEffect(() => {
        // keep input focused even after refreshing page
        inputRef.current.focus()
    })

    const handleChange = e => {
        setInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()

        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: input,
        })

        setInput('')
    }

    return (
        <form
            className='todo-form'
            onSubmit={handleSubmit}
        >
            {props.edit ?
                (<>
                    <input
                        type='text'
                        placeholder='Update'
                        value={input}
                        name='text'
                        className='todo-input edit'
                        onChange={handleChange}
                        ref={inputRef}
                    />
                    <button className='todo-button edit'>Confirm edit</button>
                </>) :
                (<>
                    <input
                        type='text'
                        placeholder='Add a todo'
                        value={input}
                        name='text'
                        className='todo-input'
                        onChange={handleChange}
                        ref={inputRef}
                    />
                    <button className='todo-button'>Add to-do</button>
                </>)
            }

        </form>
    )
}

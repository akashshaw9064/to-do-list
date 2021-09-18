import React from 'react'
import TodoItem from './TodoItem'


export default function Todos(props) {
    return (
        <div className=" container mx-5 my-5">
            <h2>ToDo List</h2>
            {props.todos.length===0?"No Todo(s) to display":
                props.todos.map((todo)=>{
                    return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>    
                })}
        </div>
    )
}

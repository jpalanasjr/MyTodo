
import React from "react"
import { emitter } from "../Notification"

const Todo=({todo, removeTodo,handleChange})=>{
    const handleCheckboxChange=()=>{
        if(todo.done)
        return null;
        handleChange(todo.id)
        emitter.emit("NOTIFICATION",`"${todo.title}" is completed!`)
    }
    return (<div>
            <input type="checkbox" style={{margin:"0 10px"}} checked={todo.done} onChange={()=>handleCheckboxChange()}/>
            <span style={todo.done?{textDecoration:"line-through"}:null}>{todo.title}</span>
            <span style={{position: "fixed", right:20,
             padding: "0 10px",
              cursor:"pointer", 
              fontWeight: "600"}}
              onClick={()=>{removeTodo(todo.id)
                emitter.emit("NOTIFICATION",`"${todo.title}" is removed successfully`)
              }}>
                x</span>
            <hr />
           
        </div>)
}

export default Todo
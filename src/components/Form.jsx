import React, { useContext, useEffect, useState } from 'react'
import TodoContext from '../Contex/TodoContext'

const Form = () => {
    const {addTodo , editTodo  , edit , updateTodo} = useContext(TodoContext)


    const [text , setText] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        if(edit.editMode){
            updateTodo(edit.todo.id , text)
        }else{
            addTodo(text);
        }
        setText("")
    }

    useEffect(() =>{
        setText(edit.todo.text)
    } , [edit])



  return (
    <form className='form-control rounded-0'onSubmit={(e) => handleSubmit(e)}>
    <input type="text" placeholder='Enter Text Here!' required className='form-control rounded-0 w-100'
    onChange={(e) => setText(e.target.value)}
    value={text}
    
    />
    <button className='btn btn-success w-full rounded-0 my-3'>Save</button>
  </form>
  )
}

export default Form
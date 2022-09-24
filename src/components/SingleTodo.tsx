import React from 'react'
import { Todo } from '../model'
import { AiFillEdit } from 'react-icons/ai'

type Props = {
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({todo, todos, setTodos}:Props) => {
  return (
    <form className='todos-single'>
        <span className='todos-single-text'>{todo.todo}</span>
        
    </form>
  )
}

export default SingleTodo
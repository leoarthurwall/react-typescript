import React from "react";
import { Todo } from "../model";
import { AiFillEdit, AiFillDelete, AiFillCheckCircle, AiOutlineCheckCircle } from "react-icons/ai";
import "./styles.css";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  //MARK AS DONE - maps through todo array sets isDone state to opposite.
  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <form className="todos-single">
      {todo.isDone ? (
        <s className="todos-single-text">{todo.todo}</s>
      ) : (
        <span className="todos-single-text">{todo.todo}</span>
      )}

      <div>
        <span className="icon">
          <AiFillEdit />
        </span>
        <span className="icon">
          <AiFillDelete />
        </span>
        {todo.isDone ? (<span className="icon">
          <AiFillCheckCircle onClick={() => handleDone(todo.id)} />
        </span>) : (<span className="icon">
          <AiOutlineCheckCircle onClick={() => handleDone(todo.id)} />
        </span>)}
        
        
      </div>
    </form>
  );
};

export default SingleTodo;

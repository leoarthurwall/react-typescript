import { useState, useRef, useEffect } from "react";
import { Todo } from "../model";
import {
  AiFillEdit,
  AiFillDelete,
  AiFillCheckCircle,
  AiOutlineCheckCircle,
} from "react-icons/ai";
import "./styles.css";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);
  //MARK AS DONE - maps through todo array sets isDone state to opposite.
  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  //DELETE - filters through the todos array and returns all of the ids that don't match the selected id
  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  //EDIT - maps through todos array. if todo id matches id, then todo is set to editTodo.
  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };

  //EDIT INPUT FOCUS - when clicking the edit button, the focus automatically goes to the input field upon edit state change. NOTE - this is an alternative to the autoFocus property
  const editInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    editInputRef.current?.focus();
  }, [edit]);

  return (
    <form className="todos-single" onSubmit={(e) => handleEdit(e, todo.id)}>
      {edit ? (
        <input
            style={{color:'grey'}}
          ref={editInputRef}
          //   autoFocus
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          className="todos-single-text"
        />
      ) : todo.isDone ? (
        <s className="todos-single-text">{todo.todo}</s>
      ) : (
        <span className="todos-single-text">{todo.todo}</span>
      )}

      <div>
        <span
          className="icon"
          onClick={() => {
            if (!edit && !todo.isDone) {
              //if edit mode is not on & todo is not done
              setEdit(!edit); //edit is actionable
            }
          }}
        >
          <AiFillEdit />
        </span>
        <span className="icon">
          <AiFillDelete onClick={() => handleDelete(todo.id)} />
        </span>
        {todo.isDone ? (
          <span className="icon">
            <AiFillCheckCircle style={{color: '#266AC4'}} onClick={() => handleDone(todo.id)} />
          </span>
        ) : (
          <span className="icon">
            <AiOutlineCheckCircle onClick={() => handleDone(todo.id)} />
          </span>
        )}
      </div>
    </form>
  );
};

export default SingleTodo;

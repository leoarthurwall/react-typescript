import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import InputField from "./components/InputField";
import { Todo } from "./model";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  console.log(todo);

  return (
    <div className="App">
      <Header title="Hello World" color="white" />
      <InputField todo={todo} setTodo={setTodo} />
    </div>
  );
};

export default App;

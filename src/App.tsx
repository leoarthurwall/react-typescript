import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import InputField from './components/InputField';


const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("")

  return (
    <div className="App">
      <Header title='Hello World' color='white'/>
      <InputField todo={todo} setTodo={setTodo}/>
    </div>
  );
}

export default App;

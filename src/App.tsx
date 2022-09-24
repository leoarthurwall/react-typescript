import './App.css';
import Header from './Header';
import Input from './Input';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header title='Hello World' color='red'/>
      <Input />
    </div>
  );
}

export default App;

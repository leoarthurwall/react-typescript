import './App.css';
import Header from './components/Header';
import Input from './components/InputField';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header title='Hello World' color='white'/>
      <Input />
    </div>
  );
}

export default App;

import "./styles.css";

interface Props{
  todo: string; 
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const InputField: React.FC<Props> = ({todo, setTodo}) => {
  return (
    <form className='input'>
        <input className='input-box' type="input" placeholder="add a task..."/>
        <button className='input-submit' type='submit'>
            Add</button>
    </form>
  )
}

export default InputField
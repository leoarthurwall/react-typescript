import "./styles.css";

const InputField = () => {
  return (
    <form className='input'>
        <input className='input-box' type="input" placeholder="add a task..."/>
        <button className='input-submit' type='submit'>
            Add</button>
    </form>
  )
}

export default InputField
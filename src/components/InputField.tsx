import "./styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {

  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
      }}
    >
      <input
        className="input-box"
        type="input"
        placeholder="add a task..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        autoFocus
      />
      <button className="input-submit" type="submit">
        Add
      </button>
    </form>
  );
};

export default InputField;

import { useSelector } from "react-redux";

const  Todo = () => {
  const todos = useSelector((state) => state.todos.todos);
  console.log(todos);
  return (
    <div>
      <div className="">Todos</div>
      {todos.map((todo) => (
            <div key={todo.id}>{todo.text}</div>
      ))}
    </div>
  );
};

export default Todo;

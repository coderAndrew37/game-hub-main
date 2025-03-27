import axios from "axios";
import { useQuery } from "@tanstack/react-query";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const TodoList = () => {
  const fetchTodos = () =>
    axios
      .get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.data);

  //Implementing catching using react-query
  const { data: todos } = useQuery({
    queryKey: ["todos"], // This is the key for the query ie unique identifier
    queryFn: fetchTodos, // This is the function that will be called to fetch the data
  });

  return (
    <ul className="list-group">
      {todos?.map((todo) => (
        <li key={todo.id} className="list-group-item">
          {todo.title}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function TodosDetails() {

  const navigate = useNavigate();  
  const { id } = useParams();
  const todos = useSelector((state) => state.todos.data);

  const todo = todos.find((t) => t.id === Number(id));

  if (!todo) {
    return <p className="p-4">Todo not found</p>;
  }

  return (
    <div className="
      min-h-screen p-6
      bg-gray-100 dark:bg-gray-800
      text-gray-900 dark:text-gray-100
    ">
      <h1 className="text-3xl font-bold mb-4">Todo Details</h1>

      <div className="
        bg-white dark:bg-gray-900 w-100 md:!w-75 p-3 md:!p-6 rounded-xl border border-gray-200 dark:border-gray-700">
        <p><b>Title:</b> {todo.title}</p>
        <p>
          <b>Status:</b>{" "}
          <span className={todo.completed ? "text-green-500" : "text-red-500"}>
            {todo.completed ? "Completed" : "Pending"}
          </span>
        </p>
      </div>
      <button onClick={()=> navigate(-1)} className="text-white rounded-pill bg-blue-500 py-1 mt-2 px-3">back</button>
    </div>
  );
}

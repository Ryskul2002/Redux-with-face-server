import React, { useEffect } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { fetchTodo } from "../../store/action-creator/todo";
import { todoAction } from "../../hooks/todoAction";

export default function TodoList() {
  const { todos, loading, error } = useTypedSelector((state) => state.todo);
  const { fetchTodo } = todoAction();

  useEffect(() => {
    fetchTodo();
  }, []);

  if (loading) {
    return <h1>please wait...</h1>;
  }

  if (error) {
    return <h1>an error</h1>;
  }

  return (
    <div>
      <ul>
        {todos?.map((item) => (
          <li>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
function todoActioner(): { fetchTodo: any } {
  throw new Error("Function not implemented.");
}

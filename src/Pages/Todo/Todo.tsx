import { useEffect } from "react";
import { useCreateTodo, useGetTodo, useUpdateTodo } from "./hooks";
import useDeleteTodo from "./hooks/useDeleteTodo";
import TodoCreate from "./TodoCreate";
import TodoList from "./TodoList";

interface ITodoProps {}

const Todo = () => {
  const { todoList, getItem } = useGetTodo();
  const { handleCreateTodoContents, isSuccess: isCreateSuccess } =
    useCreateTodo();
  const { handleUpdateTodo, isSuccess: isUpdateSuccess } = useUpdateTodo();
  const { handleDelete, isSuccess: isDeleteSuccess } = useDeleteTodo();

  useEffect(() => {
    if (isCreateSuccess) {
      getItem();
    }
  }, [isCreateSuccess]);

  useEffect(() => {
    if (isUpdateSuccess) {
      getItem();
    }
  }, [isUpdateSuccess]);

  useEffect(() => {
    if (isDeleteSuccess) {
      getItem();
    }
  }, [isDeleteSuccess]);

  return (
    <div>
      <TodoCreate
        isSuccess={isCreateSuccess}
        onSubmit={handleCreateTodoContents}
      />
      <TodoList
        todoList={todoList}
        handleUpdateTodo={handleUpdateTodo}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default Todo;

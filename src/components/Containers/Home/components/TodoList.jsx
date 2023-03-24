import React from 'react';

import useStore from '@/store/todolist';
import TopBar from './TopBar';

const TodoList = () => {
  const store = useStore((state) => state);

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="block font-bold text-3xl text-slate-600">Todo List</h1>
        <TopBar />
      </div>

      {store.todos.map((todo) => (
        <div
          className="max-w-2xl flex items-center justify-center mx-auto"
          key={todo.id}
        >
          <input
            type="checkbox"
            onClick={() => store.toggleTodo(todo.id)}
            checked={todo.done}
          />

          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 mx-5 my-2 focus:outline-none focus:ring focus:ring-teal-500/70"
            value={todo.text}
            onChange={(e) => store.updateTodo(todo.id, e.target.value)}
          />

          <button
            type="button"
            className="w-full bg-teal-500 hover:bg-teal-600 text-white py-2 rounded-lg font-bold transition duration-300 ease-in-out"
            onClick={() => store.removeTodo(todo.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </>
  );
};

export default TodoList;

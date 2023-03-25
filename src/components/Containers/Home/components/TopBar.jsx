import React from 'react';
import useSWR from 'swr';

import useStore from '@/store/todolist';
import { useFetcher } from '@/hooks/useFetcher';

const TopBar = () => {
  const store = useStore((state) => state);

  const { data, error, isLoading } = useSWR('/data.json', useFetcher);

  if (error) return <div>Terjadi kesalahan</div>;
  if (isLoading) return <div>Loading...</div>;

  const onLoad = () => store.setTodos(data);

  const onDeleteAll = () => store.setTodos([]);

  return (
    <div className="flex items-center justify-center w-[500px]">
      <input
        type="text"
        className="w-full border border-gray-300 rounded-lg px-4 py-2 mx-5 my-2 focus:outline-none focus:ring focus:ring-teal-500/70"
        placeholder="New Todo"
        value={store.newTodo}
        onChange={(e) => store.setNewTodo(e.target.value)}
      />

      <button
        type="button"
        onClick={() => store.addTodo()}
        className="w-full bg-teal-500 hover:bg-teal-600 text-white py-2 rounded-lg font-bold transition duration-300 ease-in-out"
      >
        Add
      </button>

      <button
        type="button"
        onClick={onLoad}
        className="w-full bg-teal-500 hover:bg-teal-600 text-white py-2 rounded-lg font-bold transition duration-300 ease-in-out ml-5"
      >
        Load
      </button>

      <button
        type="button"
        onClick={onDeleteAll}
        className="w-full bg-teal-500 hover:bg-teal-600 text-white py-2 rounded-lg font-bold transition duration-300 ease-in-out ml-5"
      >
        Delete All
      </button>
    </div>
  );
};

export default TopBar;

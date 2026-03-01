import { useState } from 'react';

function useSort() {
  const [direction, setDirection] = useState({ field: '', direction: '' });
  const [sortBy, setSortBy] = useState('');

  const handleSort = (field) => {
    if (!field) return;

    let newDirection = '';

    if (direction.field !== field || direction.direction === '') {
      newDirection = 'asc';
    } else if (direction.direction === 'asc') {
      newDirection = 'desc';
    } else if (direction.direction === 'desc') {
      newDirection = '';
    }

    setDirection({ field, direction: newDirection });
    const sortParam = newDirection === 'asc' ? field : `-${field}`;

    if (newDirection === '') {
      deleteSort();
    } else {
      handleChangeSort(sortParam);
    }
  };

  const deleteSort = () => {
    setSortBy('');
  };

  const handleChangeSort = (field) => {
    setSortBy(field);
  };

  return {
    sortBy: sortBy,
    direction,
    handleSort,
  };
}

export default useSort;

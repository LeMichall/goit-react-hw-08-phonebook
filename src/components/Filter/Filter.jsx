import React from 'react';
import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { setStatusFilter } from 'Redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const handleChangeFilter = e =>
    dispatch(setStatusFilter(e.target.value.toLowerCase()));

  return (
    <div className={css.filterWrapper}>
      <p>Find contacts by name :</p>
      <input
        type="text"
        name="name"
        placeholder="search contacts..."
        onChange={handleChangeFilter}
      />
    </div>
  );
};

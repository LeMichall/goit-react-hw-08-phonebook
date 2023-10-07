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
      <h2 className={css.filterTitle}>Your contacts</h2>
      <p className={css.filterSubTitle}>Find contacts by name :</p>
      <input
        type="text"
        name="name"
        className={css.filterInput}
        placeholder="search contacts..."
        onChange={handleChangeFilter}
      />
    </div>
  );
};

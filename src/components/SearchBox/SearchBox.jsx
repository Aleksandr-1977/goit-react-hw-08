import css from './SearchBox.module.css';

import { useDispatch } from 'react-redux';
import { contactFilter } from '../../redux/filters/slice';
import { useState } from 'react';

const SearchBox = () => {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState('');

  const handleClear = () => {
    setInputValue('');
    dispatch(contactFilter(''));
  };
  const handleSubmit = e => {
    setInputValue(e.target.value);
    dispatch(contactFilter(e.target.value));
  };

  return (
    <div className={css.container}>
      <label className={css.text} htmlFor="username">
        Find contact by name
      </label>
      <input
        className={css.input}
        type="text"
        name="username"
        value={inputValue}
        onChange={handleSubmit}
      />

      <button type="button" className={css.clearButton} onClick={handleClear}>
        Clear
      </button>
    </div>
  );
};
export default SearchBox;

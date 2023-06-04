import { useState } from 'react';
import css from './Searchbar.module.css';
import PropTypes from 'prop-types';

export default function Searchbar({ onSubmit }) {
  const [name, setName] = useState('');

  const handleChange = e => {
    const { value } = e.currentTarget;
    setName(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const query = name.toLowerCase().trim();

    if (!query) {
      return;
    }

    onSubmit(query);
  };

  return (
    <header className={css.Searchbar}>
      <form onSubmit={handleSubmit} className={css.SearchForm}>
        <button type="submit" className={css.button}>
          <span></span>
        </button>
        <input
          value={name}
          onChange={handleChange}
          name="name"
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

import React, { memo, useRef } from 'react';
import styles from './search_header.module.css';

const SearchHeader = memo(props => {
  const inputRef = useRef();
  const handleSearch = () => {
    const name = inputRef.current.value;
    name && props.onSearch(name);
  };

  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = event => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/images/logo.png" alt="logo" />
        <h1 className={styles.logoName}>Youtube</h1>
      </div>
      <input
        type="search"
        placeholder="search..."
        className={styles.inputBox}
        onKeyPress={onKeyPress}
        ref={inputRef}
      />
      <button type="submit" className={styles.searchBtn} onClick={onClick}>
        <img
          src="/images/search.png"
          alt="search"
          className={styles.buttonImg}
        />
      </button>
    </header>
  );
});

export default SearchHeader;

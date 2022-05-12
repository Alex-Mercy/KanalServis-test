import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import SearchSvg from '../common/Svg/SearchSvg';
import styles from './Search.module.scss';
import { addSearchValue } from '../../store/tableReducer';

export default React.memo(function Search() {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  }

  const handleClick = React.useCallback(() => {
    dispatch(addSearchValue(searchValue));
  }, [dispatch, searchValue]);


  return (
    <div className={styles.searchBlock}>
      <input
        className={styles.input}
        type="text"
        name="find"
        id="find"
        placeholder="Введите значение"
        value={searchValue}
        onChange={handleChange}
      />
      <SearchSvg setValue={handleClick}/>
    </div>
  )
})

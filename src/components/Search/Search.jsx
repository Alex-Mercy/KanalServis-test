import React from 'react'
import SearchSvg from '../common/Svg/SearchSvg';
import styles from './Search.module.scss';

function Search() {
  return (
    <div className={styles.searchBlock}>
        <input className={styles.input} type="text" name="find"  id="find" placeholder="Поиск" />
          <SearchSvg/>
    </div>
  )
}

export default Search;
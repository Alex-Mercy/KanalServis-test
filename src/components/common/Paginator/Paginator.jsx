import React from 'react'
import styles from './Paginator.module.scss'

function Paginator({pagesCount}) {
  const pages = Array(pagesCount).fill().map((e, i) => i + 1);

  return (
    <div className={styles.pagination}>
    <a href="#">&laquo;</a>
    {pages.map(num => {
        return <a key={num} href="#">{num}</a>
      })}
      <a href="#">&raquo;</a>
  
  {/* <a href="#">1</a>
  <a className={styles.active} href="#">2</a>
  <a href="#">3</a>
  <a href="#">4</a>
  <a href="#">5</a> */}
  
</div>
  )
}

export default Paginator
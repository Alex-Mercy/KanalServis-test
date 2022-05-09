import React from 'react'
import styles from './Paginator.module.scss'

function Paginator() {
  return (
    <div className={styles.pagination}>
  <a href="#">&laquo;</a>
  <a href="#">1</a>
  <a className={styles.active} href="#">2</a>
  <a href="#">3</a>
  <a href="#">4</a>
  <a href="#">5</a>
  <a href="#">&raquo;</a>
</div>
  )
}

export default Paginator
import React from 'react'
import cn from "classnames";
import { useDispatch, } from 'react-redux';

import styles from './Paginator.module.scss'
import { setCurrentPage } from '../../../store/tableReducer';
import { Link } from 'react-router-dom';

export default React.memo(function Paginator({currentPage, perPage, totalCount}) {
  const dispatch = useDispatch();
  
  const pagesCount = Math.ceil(totalCount / perPage);
  const pages = Array(pagesCount).fill().map((e, i) => i + 1);

  const onIncrementPage = () => {
      dispatch(setCurrentPage(currentPage + 1));
  }

  const onDecrementPage = () => {
      dispatch(setCurrentPage(currentPage - 1));
  }


  return (
    <div className={styles.pagination}>
      <Link
        className={cn({
          [styles.notActive]: currentPage < 2
        })}
        onClick={onDecrementPage}
        to={`/${currentPage - 1}`}
      >
        &laquo;
      </Link>
      {pages.map((page, index) => {
        return <Link
          key={index}
          to={`/${page}`}
          className={cn({
            [styles.active]: currentPage === page
          })}
          onClick={() => dispatch(setCurrentPage(page))}
        >
          {page}
        </Link>
      })}
      <Link
        onClick={onIncrementPage}
        to={`/${currentPage + 1}`}
        className={cn({
          [styles.notActive]: currentPage === pagesCount
        })}
      >
        &raquo;
      </Link>

    </div>
  )
})
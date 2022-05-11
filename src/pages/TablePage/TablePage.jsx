import React from 'react'
import { useSelector, useDispatch, } from 'react-redux';

import Table from '../../components/Table/Table';
import Search from '../../components/Search/Search';
import styles from './TablePage.module.css';
import Paginator from '../../components/common/Paginator/Paginator';
import Sort from '../../components/Sort/Sort'
import Filters from '../../components/Filters/Filters'
import { onSetData } from '../../store/tableReducer';

function TablePage() {
    const dispatch = useDispatch();
    const {data, currentPage, perPage, sortBy, isAscOrder, filter, searchValue} = useSelector(({ table }) => table);

    const headers = [
        { id: 1, type: 'date', name: 'Дата' },
        { id: 2, type: 'name', name: 'Название' },
        { id: 3, type: 'quantity', name: 'Количество' },
        { id: 4, type: 'distance', name: 'Расстояние' }
    ];

    const filters = [
        { id: 1, type: 'equal', name: 'Равно' },
        { id: 2, type: 'includes', name: 'Содержит' },
        { id: 3, type: 'more', name: 'Больше' },
        { id: 4, type: 'less', name: 'Меньше' }
    ];

    React.useEffect(() => {
        dispatch(onSetData({currentPage, perPage, sortBy, isAscOrder, filter, searchValue}));
    }, [dispatch, currentPage, perPage, sortBy, isAscOrder, filter, searchValue]);


    return (
        <div className={styles.wrapper}>
            <Table
                headers={headers}
                data={data}
                sortBy={sortBy}
                isAscOrder={isAscOrder}
            />
            <div className={styles.footer}>
                <div className={styles.filters}>
                    <Search />
                    <Filters items={filters} filter={filter} />
                    <Sort items={headers.slice(1)} sortBy={sortBy} />
                </div>
                <Paginator />
            </div>
        </div>
    )
}

export default TablePage
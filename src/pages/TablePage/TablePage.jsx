import React from 'react'
import Table from '../../components/Table/Table';
import Search from '../../components/Search/Search';
import styles from './TablePage.module.css';
import Paginator from '../../components/common/Paginator/Paginator';
import Sort from '../../components/Sort/Sort'

function TablePage() {
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

    return (
        <div className={styles.wrapper}>
            <Table headers={headers}/>
            <div className={styles.footer}>
                <div className={styles.filters}>
                    <Search />
                    <Sort items={filters} />
                    <Sort items={headers.slice(1)} />
                </div>
                <Paginator />
            </div>
        </div>
    )
}

export default TablePage
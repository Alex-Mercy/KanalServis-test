import React from 'react';
import { useDispatch, } from 'react-redux';

import styles from './Table.module.scss';
import sortImage from '../../assets/images/sort.png';
import sortImageByAsc from '../../assets/images/sortByAsc.png';
import sortImageByDesc from '../../assets/images/sortByDesc.png';
import { setSortBy, toggleOrder } from '../../store/tableReducer';

function Table({ headers, data, sortBy, isAscOrder }) {
    const dispatch = useDispatch();

    const changeSortOrder = (e) => {
        dispatch(toggleOrder(!isAscOrder));
        dispatch(setSortBy(headers.find(item => item.name === e.target.innerText).type));
    }

    //setting the sort order by value from the state
    let imageSort;
    if (isAscOrder === true) {
        imageSort = sortImageByAsc;
    } else {
        imageSort = sortImageByDesc;
    }

    return (
        <div>
            <table>
                <thead>
                    <tr className={styles.tableHeader}>
                        <th>Дата</th>
                        {headers.slice(1).map(header => { /* slice because we need sort by all headers except 'name'*/
                            return <th
                                className={styles.headerWithFilter}
                                key={header.id}
                                onClick={changeSortOrder}
                            >
                                {header.name}
                                <img className={styles.sortImage}
                                    src={header.type === sortBy ? imageSort : sortImage}
                                    alt='Sort png'
                                />
                            </th>
                        })}
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => {
                        return <tr key={item.id} >
                            <td className={styles.columns}>{item.date}</td>
                            <td className={styles.columns}>{item.name}</td>
                            <td className={styles.columns}>{item.quantity}</td>
                            <td className={styles.columns}>{item.distance} Км</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Table
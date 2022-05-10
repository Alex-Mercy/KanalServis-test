import React from 'react';

import styles from './Table.module.scss';
import sortImage from '../../assets/images/sort.png';
import sortImageByAsc from '../../assets/images/sortByAsc.png';
import sortImageByDesc from '../../assets/images/sortByDesc.png';


function Table({headers, data}) {
    return (
        <div>
            <table>
            <thead>
                <tr className={styles.tableHeader}>
                <th>Дата</th>
                {headers.slice(1).map(header => {
                    return <th 
                    className={styles.headerWithFilter} 
                     key={header.id}>
                    {header.name}
                    <img className={styles.sortImage} 
                    src={header.name === 'Название' ? sortImageByDesc : sortImage} 
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
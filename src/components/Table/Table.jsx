import React from 'react';

import styles from './Table.module.scss';
import sortImage from '../../assets/images/sort.png';
import sortImageByAsc from '../../assets/images/sortByAsc.png';
import sortImageByDesc from '../../assets/images/sortByDesc.png';


function Table({headers}) {
    return (
        <div>
            <table>
            <tbody>
                <tr className={styles.tableHeader}>
                <th>Дата</th>
                {headers.slice(1).map(header => {
                    return <th key={header.id}>
                    {header.name}
                    <img className={styles.sortImage} 
                    src={header.name === 'Название' ? sortImageByDesc : sortImage} 
                    alt='Sort Image' 

                    />
                    </th>
                })}
                </tr>
                <tr>
                    <td className={styles.tableId}>1</td>
                    <td className={styles.tableData}>sunt aut facere repellat provident occaecati excepturi optio reprehenderit</td>
                    <td className={styles.tableData}>quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut</td>
                    <td className={styles.tableData}>quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut</td>
                </tr>
                <tr>
                    <td className={styles.tableId}>1</td>
                    <td className={styles.tableData}>sunt aut facere repellat provident occaecati excepturi optio reprehenderit</td>
                    <td className={styles.tableData}>quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut</td>
                    <td className={styles.tableData}>quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut</td>
                </tr>
                
                </tbody>
            </table>
        </div>
    )
}

export default Table
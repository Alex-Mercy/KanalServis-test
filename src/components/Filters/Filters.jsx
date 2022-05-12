import React, { Fragment, useEffect, useRef, useState } from 'react';
import cn from "classnames";
import { useDispatch } from 'react-redux';

import styles from './Filters.module.scss'
import { setFilter } from '../../store/tableReducer';

export default React.memo(function Filters({items, filter}) {
    const [visiblePopup, setVisiblePopup] = useState(false);
    const sortRef = useRef();
    const dispatch = useDispatch();
    
    const toggleVisiblePopup = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setVisiblePopup(!visiblePopup);
    }

    // function collapses the list when clicked outside of popup list
    const handleOutsideClick = (event) => {
        const path = event.path || (event.composedPath && event.composedPath());
        if (!path.includes(sortRef.current)) {
            setVisiblePopup(false);
        }
    }

    useEffect(()=> {
        document.body.addEventListener('click', handleOutsideClick)
    }, []);

    const selectItem = (e) => {
        dispatch(setFilter(items.find(item => item.name === e.target.innerText).type));   
    }

    return (
        <div ref={sortRef} onClick={toggleVisiblePopup} className={cn({
            [styles.expanded]: visiblePopup === true
        }, styles.dropdown)}>
            {items.map((item) => {
                return <Fragment key={item.id} >
                    <input type="radio" id={item.type} readOnly checked={item.type === filter ? true: false} />
                    <label onClick={selectItem} htmlFor={item.type}>{item.name}</label>
                </Fragment>
            })}
        </div>
    )
})

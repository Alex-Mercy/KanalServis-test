import React, { Fragment, useEffect, useRef, useState } from 'react';
import cn from "classnames";

import styles from './Sort.module.scss'


function Sort({ items }) {
    const [visiblePopup, setVisiblePopup] = useState(false);
    const [sortBy, setsortBy] = useState(items[0].name);
    const sortRef = useRef();

    const toggleVisiblePopup = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setVisiblePopup(!visiblePopup);
    }

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
        setsortBy(e.target.innerText);
    }

    return (
        <div ref={sortRef} onClick={toggleVisiblePopup} className={cn({
            [styles.expanded]: visiblePopup === true
        }, styles.dropdown)}>
            {items.map((item) => {
                return <Fragment key={item.id} >
                    <input type="radio" id={item.type} readOnly checked={item.name === sortBy ? true: false} />
                    <label onClick={selectItem} htmlFor={item.type}>{item.name}</label>
                </Fragment>
            })}
        </div>
    )
}

export default Sort
import React from 'react';
import {Link} from "react-router-dom";

import styles from './HeaderComponentStyles.module.css';
import {urls} from "../../constants";
const HeaderComponent = () => {
    return (
        <header className={styles.headerStyles}>
            <Link className={styles.linkStyle} to="/">Home page</Link>
            <Link className={styles.linkStyle} to={urls.users}>Users page</Link>
            <Link className={styles.linkStyle} to={urls.posts}>Posts page</Link>
            <Link className={styles.linkStyle} to={urls.comments}>Comments page</Link>
        </header>
    );
};

export {HeaderComponent};
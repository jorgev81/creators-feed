import React from 'react';
import styles from './MainLayout.module.scss';

interface MainLayoutProps {
    children?: React.ReactNode;
}

const MainLayout = (props: MainLayoutProps) => {

    const { children } = props;

    return (
        <div className={styles.MainLayout}>
            <h1 className={styles.Header}>LiveLink</h1>
            <div className={styles.MainContent}>{children}</div>
        </div>
    )
};

export default MainLayout;
import React from 'react';
import styles from './MainLayout.module.scss';

interface MainLayoutProps {
    children?: React.ReactNode;
}

const MainLayout = (props: MainLayoutProps) => {

    const { children } = props;

    return (
        <div className={`${styles.MainLayout} container mx-auto px-4`}>
            <h1 className={`${styles.Header} text-3xl font-bold my-4 text-center`}>LiveLink</h1>
            <div className={`${styles.MainContent}`}>{children}</div>
        </div>
    )
};

export default MainLayout;
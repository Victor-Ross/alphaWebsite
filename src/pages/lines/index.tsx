import React from 'react';

import Header from '../../components/Header';
import { RouteMap } from '../../components/RouteMap';
import Sidebar from '../../components/Sidebar';

import styles from './styles.module.scss';


export default function Lines() {
  
  return (
    <>
    <Header />
    <div className={styles.linesPageContainer}>
      <Sidebar />
      <RouteMap />
    </div>
    </>
  );
}
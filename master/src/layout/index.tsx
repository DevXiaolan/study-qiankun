import React from 'react';
import { Link } from 'umi';

import styles from './index.less';

export default ({ children }) => {
  return (
    <div  className={styles.block}>
      <menu>
        <Link className={styles.link} to="/">master</Link>|
        <Link className={styles.link} to="/mfe-react">mfe-react</Link>|
        <Link className={styles.link} to="/mfe-vue">mfe-vue</Link>|
        <Link className={styles.link} to="/put-all-in">放在一起</Link>
      </menu>
      {children}
    </div>
  )
}
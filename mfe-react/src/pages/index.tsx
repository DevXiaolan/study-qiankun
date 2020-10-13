import React from 'react';
import { useModel } from 'umi';

import styles from './index.less';
import Logo from './react.png';


export default () => {
  const props = useModel('@@qiankunStateFromMaster');
  
  return (
    <div>
      <img className={styles.logo} src={Logo} />
      <h1 className={styles.title}>MFE-React</h1>
      <pre>
        Msg from master: “ {props?.msg} ”
      </pre>
    </div>
  );
}

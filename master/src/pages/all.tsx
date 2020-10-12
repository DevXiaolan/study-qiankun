import React from 'react';
import { MicroAppWithMemoHistory } from 'umi';

export default () => {
  return (
    <div>
      <h1>把两个应用放在一个页面</h1>
      <MicroAppWithMemoHistory name="mfe-react" url="/" />
      <MicroAppWithMemoHistory name="mfe-vue" url="/" />
    </div>
  );
}

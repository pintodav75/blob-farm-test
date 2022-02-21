import { Content as AntdContent } from 'antd/lib/layout/layout';
import { FC, PropsWithChildren } from 'react';
import classes from './Content.module.less';

const Content: FC = (props: PropsWithChildren<Record<string, unknown>>) => {
   return (
    <AntdContent>
      <div className={classes.content}>
        {props.children}
      </div>
    </AntdContent>
  );
};

export default Content;

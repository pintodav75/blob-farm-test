import { Header as AntdHeader } from 'antd/lib/layout/layout';
import { FC } from 'react';
import { ImHome2 } from "react-icons/im";
import classes from './Header.module.less';

const Header: FC = () => {
   return (
    <AntdHeader>
      <div className={classes.content}>
        <ImHome2 size="18px" />
        <h1>Blob farm</h1>
      </div>
    </AntdHeader>
  );
};

export default Header;

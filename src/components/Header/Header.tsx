import { Header as AntdHeader } from 'antd/lib/layout/layout';
import { FC, useState } from 'react';
import { ImHome2 } from "react-icons/im";
import classes from './Header.module.less';
import { Button, Modal } from 'antd';
import CreationForm from '../CreationForm/CreationForm'

const Header: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };


   return (
    <AntdHeader>
      <div className={classes.content}>
        <ImHome2 size="18px" />
        <h1>Blob farm</h1>
      </div>
      <Button type="primary" style={{ backgroundColor: "green", fontFamily: "system-ui" }} onClick={showModal}>
        add new blob
      </Button>
      <Modal  title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <CreationForm onCancel={(handleCancel)} />
      </Modal>
    </AntdHeader>
  );
};

export default Header;

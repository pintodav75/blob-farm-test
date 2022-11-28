import { Button, Modal, Spin } from 'antd';
import axios from 'axios';
import React, { useState } from 'react';
import { FC } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import BlobComponent from '../../components/BlobComponent/BlobComponent';
import EditForm from '../../components/EditForm/EditForm'
import DeleteForm from '../../components/DeleteForm/deleteForm'
import { Card } from 'antd';


const BlobDetails: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
 
  const params = useParams();
  const { data: blob, isLoading } = useQuery('blob', async () => {
    const result = await axios.get(`/api/blobs/${params.id}`);
    return result.data;
  }, { refetchOnWindowFocus: false });

  if (isLoading) {
    return <Spin size="large" />
  }


  const showDeleteModal = () => {
    setIsModalDeleteOpen(true);
  };

  const handleDeleteOk = () => {
    setIsModalDeleteOpen(false);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setIsModalDeleteOpen(false);
  };

  function calculate_age(dob:any) { 
    const diff_ms = Date.now() - dob.getTime();
    const age_dt = new Date(diff_ms); 
  
    return Math.abs(age_dt.getUTCFullYear() - 1970);
}

  return (
    <div style={{ display:"flex"}}>
      <div className="site-card-border-less-wrapper">
    <Card title={blob.name} bordered={false} style={{ width: 300 }}>
      <p>{calculate_age(new Date(blob.createdAt))} year(s) old</p>
    </Card>
  </div>
        <BlobComponent blob={blob} />
        <Button type="primary" style={{ backgroundColor: "green", fontFamily: "system-ui" }} onClick={showModal}>
          Edit blob
        </Button>
        <Button type="primary" style={{ backgroundColor: "green", fontFamily: "system-ui" }} onClick={showDeleteModal}>
          Remove blob
        </Button>
        <Modal  title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <EditForm onCancel={(handleCancel)} blob={blob} />
        </Modal>
        <Modal  title="Basic Modal" open={isModalDeleteOpen} onOk={handleDeleteOk} onCancel={handleCancel}>
          <DeleteForm onCancel={(handleCancel)} blob={blob} />
        </Modal>
    </div>
  );
};

export default BlobDetails;

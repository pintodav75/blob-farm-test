import { Spin } from 'antd';
import axios from 'axios';
import { FC } from 'react';
import { useQuery } from 'react-query';
import BlobComponent from '../../components/BlobComponent/BlobComponent';
import { Blob } from "../../server/models/blob";
import classes from './Home.module.less';

const Home: FC = () => {
  const {
    data: blobs,
    isLoading
  } = useQuery('blobs', async () => {
    const result = await axios.get(`/api/blobs`);
    return (result.data?.blobs || []) as Blob[];
  }, { refetchOnWindowFocus: false });

  return (
    <div className={classes.container}>
      { isLoading ?
        <Spin size="large" /> : 
        blobs?.map((blob) => <BlobComponent blob={blob} key={blob.id} />)
      }
    </div>
  );
};

export default Home;

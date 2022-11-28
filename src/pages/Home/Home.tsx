import { Button, Popover, Spin } from 'antd';
import axios from 'axios';
import { FC } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { Link } from 'react-router-dom';
import BlobComponent from '../../components/BlobComponent/BlobComponent';
import { Blob } from "../../server/models/blob";
import classes from './Home.module.less';
import { ZoomInOutlined } from '@ant-design/icons'
const Home: FC = () => {
  const queryClient = useQueryClient()

  const { data: blobs, isLoading } = useQuery('blobs', async () => {
    const result = await axios.get(`/api/blobs`);
    return (result.data?.blobs || []) as Blob[];
  }, { refetchOnWindowFocus: false });

  const feedBlob = async (blob: any) => {
    const newBlob = {
      ...blob,
      size: blob.size *= 2.
    }
    const { data: response } = await axios.put(`/api/blobs/${blob.id}`, newBlob)
    return response;
  }; 

  const { mutate } = useMutation(feedBlob, {
    onSuccess: () => {
        queryClient.invalidateQueries()
    },
  });


  if (isLoading) {
    return (
      <Spin size="large" />
    )
  }

  const onFeed = (blob: any) => {
    mutate(blob)
  }

  const Content = ({ blob }: any) => (
    <div>
      <Button icon={<ZoomInOutlined />} shape='round' style={{ backgroundColor: "#D3D3D3", color: "@0a0a0a" }} onClick={() => onFeed(blob)}></Button>
    </div>
  );

  return (
    <div className={classes.container}>
      {blobs?.map((blob) =>
        <>
          <Popover content={<Content blob={blob}/ >}>
            <Button type="primary" shape='round' style={{ background: "#0a0a0a", fontFamily: "system-ui" }} >Feed blobber {blob.name}</Button>
          </Popover>
          <Link key={blob.id} to={blob.id}>
            <BlobComponent blob={blob} />
          </Link>
        </>
        )
      }
    </div>
  );
};

export default Home;

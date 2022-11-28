import { Button, Form, Input, notification } from 'antd';
import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from "react-router-dom";


const DeleteForm: any = (props: any) => {
    const queryClient = useQueryClient()
    const navigate = useNavigate();

    const deleteBlob = async (data: any) => {
        const { data: response } = await axios.delete(`/api/blobs/${props.blob.id}`, data)
        return response;
    }; 
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    
    const { mutate } = useMutation(deleteBlob, {
        onSuccess: () => {
            navigate("/blobs");
            notification.open({ message: 'Blob is successfuly removed'});
        },
    });

    const onFinish = (values: any) => {
        mutate(values);
    };

      return (
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" style={{ backgroundColor:"green"}} htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      );
};

export default DeleteForm;

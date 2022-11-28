import { Button, Form, Input, notification } from 'antd';
import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';

const CreationForm: any = (props: any) => {
    const queryClient = useQueryClient()

    const createBlob = async (data: any) => {
        const { data: response } = await axios.post('/api/blobs', data)
        return response;
    }; 
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    
    const { mutate } = useMutation(createBlob, {
        onSuccess: () => {
            queryClient.invalidateQueries()
            props.onCancel()
            notification.open({ message: 'Blob is successfuly created'});
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
          <Form.Item
            label="ID"
            name="id"
            rules={[{ required: true, message: 'Please input your id!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Color"
            name="color"
            rules={[{ required: true, message: 'Please input your color!' }]}
          >
            <Input  type="color" /> 
          </Form.Item>
          <Form.Item
            label="Size"
            name="size"
            rules={[{ required: true, message: 'Please input your size!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please input your name!' }]}
          >
            <Input />
          </Form.Item>
    
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" style={{ backgroundColor:"green"}} htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      );
};

export default CreationForm;

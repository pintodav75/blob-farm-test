import { Button, Form, Input, notification } from 'antd';
import axios from 'axios';
import React from 'react';
import { useMutation, useQueryClient } from 'react-query';

const EditForm: any = (props: any) => {
    const queryClient = useQueryClient()

    const updateBlob = async (data: any) => {
        const { data: response } = await axios.put(`/api/blobs/${props.blob.id}`, data)
        return response;
    }; 
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    
    const { mutate } = useMutation(updateBlob, {
        onSuccess: () => {
            queryClient.invalidateQueries()
            props.onCancel()
            notification.open({ message: 'Blob is successfuly updated'});
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
            initialValue={props.blob.id}
            rules={[{ required: true, message: 'Please input your id!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Color"
            name="color"
            initialValue={props.blob.color}
            rules={[{ required: true, message: 'Please input your color!' }]}
          >
            <Input  type="color" /> 
          </Form.Item>
          <Form.Item
            label="Size"
            name="size"
            initialValue={props.blob.size}
            rules={[{ required: true, message: 'Please input your size!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Name"
            name="name"
            initialValue={props.blob.name}
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

export default EditForm;

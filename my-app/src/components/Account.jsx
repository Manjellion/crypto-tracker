import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { Link, Route} from 'react-router-dom';
import SignIn from './SignInAccount';

const Account = () => {
    const onFinish = (values) => {
      console.log('Success:', values);
    };
  
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };
  
    return (
        <div className="Account-form">
            <h1>Sign Up</h1>
            <Form
                name="basic"
                labelCol={{
                span: 8,
                }}
                wrapperCol={{
                span: 10,
                }}
                initialValues={{
                remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                label="Username"
                name="username"
                rules={[
                    {
                    required: true,
                    message: 'Please input your username!',
                    },
                ]}
                >
                <Input />
                </Form.Item>
        
                <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                    required: true,
                    message: 'Please input your password!',
                    },
                ]}
                >
                <Input.Password />
                </Form.Item>
        
                <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                    offset: 8,
                    span: 8,
                }}
                >
                <Checkbox>Remember me</Checkbox>
                </Form.Item>
        
                <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 8,
                }}
                >
                <Button type="primary" htmlType="submit">
                    <Link>
                        Sign Up
                    </Link>
                </Button>
                <Button type="primary" htmlType="submit">
                    <Link>
                        Sign In
                    </Link>
                </Button>
                </Form.Item>
            </Form>
      </div>
    );
}

export default Account;
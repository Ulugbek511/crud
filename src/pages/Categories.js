import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form, Input } from 'antd';
import axios from 'axios';

const Categories = () => {
  const [visible, setVisible] = useState(false);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get('https://ecommerce-backend-fawn-eight.vercel.app/api/categories');
      setCategories(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching categories:', error);
      setLoading(false);
    }
  };

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = async (values) => {
    try {
      const response = await axios.post('https://ecommerce-backend-fawn-eight.vercel.app/api/categories', values);
      setCategories([...categories, response.data]);
      setVisible(false);
    } catch (error) {
      console.error('Error adding category:', error);
    }
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const columns = [
    {
      title: 'Category Name',
      dataIndex: 'name',
      key: 'name'
    }
  ];

  return (
    <div>
      <Button type="primary" onClick={showModal} style={{ marginBottom: 16 }}>
        Add Category
      </Button>
      <Table dataSource={categories} columns={columns} rowKey="id" loading={loading} />

      <Modal
        title="Add New Category"
        visible={visible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          name="category_form"
          onFinish={handleOk}
        >
          <Form.Item
            name="name"
            rules={[{ required: true, message: 'Please input the category name!' }]}
          >
            <Input placeholder="Category Name" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Add
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Categories;

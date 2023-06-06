import React, { useState } from "react";
import {
  Modal,
  Button,
  Form,
  Input,
  Table,
  List,
  Card,
  Upload,
  message,
} from "antd";
import { PlusOutlined, LoadingOutlined } from "@ant-design/icons";

const Admin = () => {
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [products, setProducts] = useState([]);

  const showModal = () => {
    setModalVisible(true);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setModalVisible(false);
      message.success("Product created successfully!");
    }, 2000);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  const handleUpload = (info) => {
    if (info.file.status === "done") {
      message.success(`${info.file.name} uploaded successfully!`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} upload failed.`);
    }
  };

  const columns = [
    { title: "Product Name", dataIndex: "name", key: "name" },
    { title: "Description", dataIndex: "description", key: "description" },
    { title: "Price", dataIndex: "price", key: "price" },
  ];

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Create Product
      </Button>

      <Modal
        title="Create Product"
        visible={modalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        confirmLoading={loading}
      >
        <Form>
          <Form.Item label="Product Name">
            <Input />
          </Form.Item>
          <Form.Item label="Description">
            <Input />
          </Form.Item>
          <Form.Item label="Price">
            <Input type="number" />
          </Form.Item>
          <Form.Item label="Upload Picture">
            <Upload
              name="picture"
              action="/upload"
              accept=".jpg,.png"
              onChange={handleUpload}
              showUploadList={false}
            >
              <Button icon={<PlusOutlined />} />
            </Upload>
          </Form.Item>
        </Form>
      </Modal>

      <h2>Product List</h2>
      <h3>Regular Form</h3>
      <List
        grid={{ gutter: 16, column: 3 }}
        dataSource={products}
        renderItem={(item) => (
          <List.Item>
            <Card title={item.name}>{item.description}</Card>
          </List.Item>
        )}
      />

      <h3>Tabular Form</h3>
      <Table dataSource={products} columns={columns} />
    </div>
  );
};

export default Admin;

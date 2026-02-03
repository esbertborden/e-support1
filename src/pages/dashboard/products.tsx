import { Card, Form, Input, Select, Button, Tag, Space, Col, Row, Table } from "antd";
import { useForm } from "@refinedev/antd";
import { ProductOutlined } from "@ant-design/icons";

export const ProductsPage: React.FC = () => {
  const { formProps, saveButtonProps } = useForm({
    action: "create",
  });

  return (
    <div>
      <h1 style={{ fontSize: "24px", marginBottom: "24px" }}>
        <ProductOutlined /> Products
      </h1>
      <p style={{ color: "#666", marginBottom: "24px" }}>
        Manage your banking products and statements
      </p>

      <Row gutter={[16, 16]}>
        <Col xs={24} lg={12}>
          <Card title="Request Statement">
            <Form {...formProps} layout="vertical">
              <Form.Item
                label="Account"
                name="account"
                rules={[{ required: true }]}
              >
                <Select placeholder="Select account">
                  <Select.Option value="savings">Savings Account</Select.Option>
                  <Select.Option value="checking">Checking Account</Select.Option>
                  <Select.Option value="business">Business Account</Select.Option>
                </Select>
              </Form.Item>
              
              <Form.Item
                label="Period"
                name="period"
                rules={[{ required: true }]}
              >
                <Select placeholder="Select period">
                  <Select.Option value="last-month">Last Month</Select.Option>
                  <Select.Option value="last-quarter">Last Quarter</Select.Option>
                  <Select.Option value="last-year">Last Year</Select.Option>
                </Select>
              </Form.Item>
              
              <Form.Item>
                <Button type="primary" htmlType="submit" {...saveButtonProps}>
                  Request Statement
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
        
        <Col xs={24} lg={12}>
          <Card title="Your Products">
            <Table
              rowKey="id"
              columns={[
                { title: "Product", dataIndex: "name", key: "name" },
                { 
                  title: "Status", 
                  dataIndex: "status", 
                  key: "status",
                  render: (status: string) => (
                    <Tag color={status === "Active" ? "green" : "default"}>
                      {status}
                    </Tag>
                  ),
                },
                {
                  title: "Actions",
                  key: "actions",
                  render: (_: any) => (
                    <Space>
                      <Button type="link" size="small">View</Button>
                      <Button type="link" size="small">Edit</Button>
                    </Space>
                  ),
                },
              ]}
              dataSource={[
                { id: 1, name: "Savings Account", status: "Active" },
                { id: 2, name: "Checking Account", status: "Active" },
                { id: 3, name: "Business Account", status: "Active" },
              ]}
              pagination={false}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};
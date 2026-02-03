import { Card, Form, Input, Select, Button, Space, Alert, InputNumber, Col, Row, Table } from "antd";
import { ShoppingCartOutlined, CopyOutlined } from "@ant-design/icons";
import { useState } from "react";

const { Option } = Select;

export const CheckoutLinksPage: React.FC = () => {
  const [form] = Form.useForm();
  const [generatedLink, setGeneratedLink] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: any) => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      const link = `https://yourbank.com/checkout/${Date.now()}-${values.statementType}?price=${values.price}`;
      setGeneratedLink(link);
      setLoading(false);
    }, 1000);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedLink);
  };

  return (
    <div>
      <h1 style={{ fontSize: "24px", marginBottom: "24px" }}>
        <ShoppingCartOutlined /> Checkout Links
      </h1>
      <p style={{ color: "#666", marginBottom: "24px" }}>
        Generate links for statement purchases
      </p>

      <Row gutter={[16, 16]}>
        <Col xs={24} lg={12}>
          <Card title="Generate Payment Link">
            <p style={{ color: "#666", marginBottom: "24px" }}>
              Create links for customers to purchase statements
            </p>

            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
            >
              <Form.Item
                label="Statement Type"
                name="statementType"
                rules={[{ required: true, message: "Please select statement type" }]}
              >
                <Select placeholder="Select statement type">
                  <Option value="standard">Standard Statement</Option>
                  <Option value="detailed">Detailed Statement</Option>
                  <Option value="tax">Tax Statement</Option>
                  <Option value="custom">Custom Statement</Option>
                </Select>
              </Form.Item>

              <Form.Item
                label="Price (USD)"
                name="price"
                rules={[
                  { required: true, message: "Please enter price" },
                  { type: "number", min: 0.01, message: "Price must be greater than 0" }
                ]}
              >
                <InputNumber
                  style={{ width: "100%" }}
                  placeholder="0.00"
                  prefix="$"
                  min={0.01}
                  step={0.01}
                  precision={2}
                />
              </Form.Item>

              <Form.Item
                label="Description (Optional)"
                name="description"
              >
                <Input.TextArea 
                  placeholder="Add a description for this link"
                  rows={3}
                />
              </Form.Item>

              <Form.Item
                label="Validity Period"
                name="validity"
              >
                <Select placeholder="Select validity period" defaultValue="30">
                  <Option value="7">7 days</Option>
                  <Option value="30">30 days</Option>
                  <Option value="90">90 days</Option>
                  <Option value="365">1 year</Option>
                  <Option value="0">Never expires</Option>
                </Select>
              </Form.Item>

              <Form.Item>
                <Button 
                  type="primary" 
                  htmlType="submit" 
                  loading={loading}
                  icon={<ShoppingCartOutlined />}
                  block
                  size="large"
                >
                  Generate Link
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>

        <Col xs={24} lg={12}>
          <Card title="Generated Links">
            {generatedLink ? (
              <>
                <Alert
                  message="Link Generated Successfully!"
                  type="success"
                  showIcon
                  style={{ marginBottom: 16 }}
                />
                
                <div style={{ marginBottom: 16 }}>
                  <p style={{ fontWeight: 500, marginBottom: 8 }}>Your Generated Link:</p>
                  <Input.Group compact style={{ marginBottom: 16 }}>
                    <Input
                      value={generatedLink}
                      readOnly
                      style={{ width: "calc(100% - 100px)" }}
                    />
                    <Button
                      type="primary"
                      icon={<CopyOutlined />}
                      onClick={copyToClipboard}
                    >
                      Copy
                    </Button>
                  </Input.Group>
                  
                  <a 
                    href={generatedLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ marginRight: 16 }}
                  >
                    <Button type="link">Test Link</Button>
                  </a>
                </div>

                <div style={{ background: "#f9f9f9", padding: 16, borderRadius: 8 }}>
                  <h4 style={{ marginBottom: 8 }}>Link Preview</h4>
                  <p style={{ color: "#666", fontSize: 12, marginBottom: 8 }}>
                    This is how the checkout page will appear to your customers
                  </p>
                  <div style={{ border: "1px dashed #ddd", padding: 16, borderRadius: 4 }}>
                    <h3>Statement Purchase</h3>
                    <p>Complete your purchase to download the statement</p>
                    <Button type="primary" block>Pay Now</Button>
                  </div>
                </div>
              </>
            ) : (
              <div style={{ textAlign: "center", padding: "40px 20px", color: "#999" }}>
                <ShoppingCartOutlined style={{ fontSize: 48, marginBottom: 16, opacity: 0.3 }} />
                <p>No links generated yet. Generate a link to see it here.</p>
              </div>
            )}
          </Card>

          <Card title="Recent Links" style={{ marginTop: 16 }}>
            <Table
              dataSource={[
                { key: "1", type: "Standard", price: "$9.99", date: "2024-01-28", clicks: 42 },
                { key: "2", type: "Detailed", price: "$19.99", date: "2024-01-25", clicks: 18 },
                { key: "3", type: "Tax", price: "$14.99", date: "2024-01-20", clicks: 7 },
              ]}
              columns={[
                { title: "Type", dataIndex: "type", key: "type" },
                { title: "Price", dataIndex: "price", key: "price" },
                { title: "Created", dataIndex: "date", key: "date" },
                { title: "Clicks", dataIndex: "clicks", key: "clicks" },
                {
                  title: "Actions",
                  key: "actions",
                  render: () => (
                    <Space>
                      <Button type="link" size="small">Copy</Button>
                      <Button type="link" size="small">Stats</Button>
                    </Space>
                  ),
                },
              ]}
              pagination={false}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};
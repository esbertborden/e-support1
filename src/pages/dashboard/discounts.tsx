import { 
  Card, 
  Table, 
  Button, 
  Tag, 
  Space, 
  Form, 
  Input, 
  InputNumber, 
  Select, 
  DatePicker,
  Switch,
  Modal,
  message, 
  Row,
  Col,
  Statistic
} from "antd";
import { 
  TagOutlined, 
  PlusOutlined, 
  EditOutlined, 
  DeleteOutlined,
  CopyOutlined 
} from "@ant-design/icons";
import { useState } from "react";
import dayjs from "dayjs";

const { RangePicker } = DatePicker;
const { Option } = Select; // Add this line

export const DiscountsPage: React.FC = () => {
  const [form] = Form.useForm();
  const [modalVisible, setModalVisible] = useState(false);
  const [editingDiscount, setEditingDiscount] = useState<any>(null);

  const discounts = [
    { 
      id: 1, 
      code: 'STMT25', 
      description: '25% off all statements', 
      discount: '25%',
      type: 'percentage',
      validFrom: '2024-01-01',
      validTo: '2024-01-31',
      status: 'active',
      usage: { used: 42, limit: 100 }
    },
    { 
      id: 2, 
      code: 'BULK50', 
      description: '50% off bulk orders', 
      discount: '50%',
      type: 'percentage',
      validFrom: '2024-01-15',
      validTo: '2024-02-15',
      status: 'active',
      usage: { used: 18, limit: 50 }
    },
    { 
      id: 3, 
      code: 'WELCOME10', 
      description: '$10 off first purchase', 
      discount: '$10',
      type: 'fixed',
      validFrom: '2024-01-01',
      validTo: '2024-12-31',
      status: 'active',
      usage: { used: 89, limit: null }
    },
  ];

  const handleCreateDiscount = (values: any) => {
    console.log("Create discount:", values);
    message.success("Discount created successfully!");
    setModalVisible(false);
    form.resetFields();
  };

  const handleEdit = (record: any) => {
    setEditingDiscount(record);
    form.setFieldsValue({
      ...record,
      validity: [dayjs(record.validFrom), dayjs(record.validTo)]
    });
    setModalVisible(true);
  };

  const handleDelete = (id: number) => {
    Modal.confirm({
      title: "Delete Discount",
      content: "Are you sure you want to delete this discount?",
      onOk: () => message.success("Discount deleted!"),
    });
  };

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    message.success(`Copied: ${code}`);
  };

  return (
    <div>
      <h1 style={{ fontSize: "24px", marginBottom: "24px" }}>
        <TagOutlined /> Discounts
      </h1>
      <p style={{ color: "#666", marginBottom: "24px" }}>
        Manage statement discounts and promotions
      </p>

      <Card 
        title="Active Discounts"
        extra={
          <Button 
            type="primary" 
            icon={<PlusOutlined />}
            onClick={() => {
              setEditingDiscount(null);
              setModalVisible(true);
            }}
          >
            New Discount
          </Button>
        }
      >
        <p style={{ color: "#666", marginBottom: "24px" }}>
          Currently available promotions
        </p>

        <Table
          dataSource={discounts}
          rowKey="id"
          columns={[
            {
              title: "Code",
              dataIndex: "code",
              key: "code",
              render: (code: string) => (
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontFamily: "monospace", fontWeight: "bold" }}>
                    {code}
                  </span>
                  <Button
                    type="text"
                    size="small"
                    icon={<CopyOutlined />}
                    onClick={() => copyCode(code)}
                    title="Copy code"
                  />
                </div>
              ),
            },
            {
              title: "Description",
              dataIndex: "description",
              key: "description",
            },
            {
              title: "Discount",
              dataIndex: "discount",
              key: "discount",
            },
            {
              title: "Validity",
              key: "validity",
              render: (_, record) => (
                <div>
                  <div>{record.validFrom}</div>
                  <div style={{ color: "#999" }}>to</div>
                  <div>{record.validTo}</div>
                </div>
              ),
            },
            {
              title: "Usage",
              key: "usage",
              render: (_, record) => (
                <div>
                  <div>{record.usage.used} used</div>
                  {record.usage.limit && (
                    <div style={{ color: "#999", fontSize: 12 }}>
                      Limit: {record.usage.limit}
                    </div>
                  )}
                </div>
              ),
            },
            {
              title: "Status",
              dataIndex: "status",
              key: "status",
              render: (status: string) => (
                <Tag color={status === 'active' ? 'green' : 'red'}>
                  {status.toUpperCase()}
                </Tag>
              ),
            },
            {
              title: "Actions",
              key: "actions",
              render: (_, record) => (
                <Space>
                  <Button
                    type="link"
                    icon={<EditOutlined />}
                    onClick={() => handleEdit(record)}
                  >
                    Edit
                  </Button>
                  <Button
                    type="link"
                    danger
                    icon={<DeleteOutlined />}
                    onClick={() => handleDelete(record.id)}
                  >
                    Delete
                  </Button>
                </Space>
              ),
            },
          ]}
        />
      </Card>

      <Card title="Discount Performance" style={{ marginTop: 16 }}>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={8}>
            <Card size="small">
              <Statistic
                title="Total Discounts"
                value={discounts.length}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card size="small">
              <Statistic
                title="Total Usage"
                value={discounts.reduce((acc, d) => acc + d.usage.used, 0)}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card size="small">
              <Statistic
                title="Active Discounts"
                value={discounts.filter(d => d.status === 'active').length}
              />
            </Card>
          </Col>
        </Row>
      </Card>

      {/* Create/Edit Discount Modal */}
      <Modal
        title={editingDiscount ? "Edit Discount" : "Create New Discount"}
        open={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={null}
        width={600}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleCreateDiscount}
        >
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Discount Code"
                name="code"
                rules={[{ required: true, message: "Please enter discount code" }]}
              >
                <Input placeholder="e.g., STMT25" style={{ fontFamily: "monospace" }} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Discount Type"
                name="type"
                rules={[{ required: true, message: "Please select type" }]}
              >
                <Select placeholder="Select type">
                  <Option value="percentage">Percentage (%)</Option>
                  <Option value="fixed">Fixed Amount ($)</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Form.Item
            label="Discount Value"
            name="value"
            rules={[{ required: true, message: "Please enter discount value" }]}
          >
            <InputNumber
              style={{ width: "100%" }}
              placeholder="e.g., 25 for 25% or $25"
              min={0}
              addonAfter={form.getFieldValue('type') === 'percentage' ? '%' : '$'}
            />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true, message: "Please enter description" }]}
          >
            <Input.TextArea 
              placeholder="Describe this discount"
              rows={3}
            />
          </Form.Item>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Validity Period"
                name="validity"
                rules={[{ required: true, message: "Please select validity period" }]}
              >
                <RangePicker style={{ width: "100%" }} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Usage Limit"
                name="limit"
              >
                <InputNumber
                  style={{ width: "100%" }}
                  placeholder="Unlimited if empty"
                  min={1}
                />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item
            name="active"
            valuePropName="checked"
            initialValue={true}
          >
            <Switch checkedChildren="Active" unCheckedChildren="Inactive" defaultChecked />
          </Form.Item>

          <Form.Item style={{ marginBottom: 0, textAlign: "right" }}>
            <Space>
              <Button onClick={() => setModalVisible(false)}>
                Cancel
              </Button>
              <Button type="primary" htmlType="submit">
                {editingDiscount ? "Update Discount" : "Create Discount"}
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
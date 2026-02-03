import { 
  Card, 
  Row, 
  Col, 
  Statistic, 
  Progress, 
  Table, 
  Switch, 
  Button, 
  Alert,
  Timeline,
  Tooltip,
  Badge,
  Space
} from "antd";
import { 
  DollarOutlined, 
  DownloadOutlined, 
  FileTextOutlined,
  CalendarOutlined,
  ExclamationCircleOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined
} from "@ant-design/icons";

export const UsageBillingPage: React.FC = () => {
  const billingHistory = [
    { id: 1, date: "2024-01-31", amount: "$49.99", status: "paid", items: 125 },
    { id: 2, date: "2023-12-31", amount: "$42.50", status: "paid", items: 98 },
    { id: 3, date: "2023-11-30", amount: "$38.75", status: "paid", items: 85 },
    { id: 4, date: "2023-10-31", amount: "$35.00", status: "paid", items: 72 },
  ];

  const usageItems = [
    { type: "Standard Statements", used: 42, limit: 100, unit: "statements" },
    { type: "Detailed Statements", used: 18, limit: 50, unit: "statements" },
    { type: "API Calls", used: 1245, limit: 5000, unit: "calls" },
    { type: "Customer Links", used: 7, limit: 20, unit: "links" },
  ];

  const upcomingBilling = {
    nextBillingDate: "2024-02-28",
    estimatedAmount: "$55.25",
    items: [
      { name: "Standard Statements", count: 45, rate: "$0.50", amount: "$22.50" },
      { name: "Detailed Statements", count: 20, rate: "$1.25", amount: "$25.00" },
      { name: "API Calls", count: 1500, rate: "$0.005", amount: "$7.50" },
    ]
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "paid": return <CheckCircleOutlined style={{ color: "#52c41a" }} />;
      case "pending": return <ClockCircleOutlined style={{ color: "#faad14" }} />;
      case "failed": return <ExclamationCircleOutlined style={{ color: "#ff4d4f" }} />;
      default: return null;
    }
  };

  return (
    <div>
      <h1 style={{ fontSize: "24px", marginBottom: "24px" }}>
        <DollarOutlined /> Usage & Billing
      </h1>
      <p style={{ color: "#666", marginBottom: "24px" }}>
        Track and manage statement usage costs
      </p>

      <Row gutter={[16, 16]}>
        <Col xs={24} lg={8}>
          <Card>
            <Statistic
              title="Current Balance"
              value={0}
              precision={2}
              valueStyle={{ color: "#3f8600" }}
              prefix="$"
            />
            <p style={{ color: "#999", fontSize: 12, marginTop: 8 }}>
              Next billing: {upcomingBilling.nextBillingDate}
            </p>
          </Card>
        </Col>
        
        <Col xs={24} lg={8}>
          <Card>
            <Statistic
              title="This Month's Usage"
              value={125}
              suffix="/ 500 statements"
            />
            <Progress percent={25} status="active" style={{ marginTop: 8 }} />
          </Card>
        </Col>
        
        <Col xs={24} lg={8}>
          <Card>
            <Statistic
              title="Estimated Next Bill"
              value={55.25}
              precision={2}
              valueStyle={{ color: "#cf1322" }}
              prefix="$"
            />
            <Button type="link" size="small" style={{ padding: 0 }}>
              View Details
            </Button>
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
        <Col xs={24} lg={16}>
          <Card title="Current Usage">
            <div style={{ marginBottom: 24 }}>
              {usageItems.map((item, index) => (
                <div key={index} style={{ marginBottom: 16 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                    <span>{item.type}</span>
                    <span>
                      {item.used} / {item.limit} {item.unit}
                    </span>
                  </div>
                  <Progress 
                    percent={(item.used / item.limit) * 100} 
                    status={item.used > item.limit * 0.9 ? "exception" : "normal"}
                  />
                </div>
              ))}
            </div>

            <Alert
              message="Usage Tips"
              description="Usage resets on the 1st of each month. Consider upgrading your plan if you consistently exceed limits."
              type="info"
              showIcon
            />
          </Card>
        </Col>

        <Col xs={24} lg={8}>
          <Card title="Billing Settings">
            <div style={{ marginBottom: 16 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div style={{ fontWeight: 500 }}>Auto-pay</div>
                  <div style={{ fontSize: 12, color: "#999" }}>Automatically pay invoices</div>
                </div>
                <Switch defaultChecked />
              </div>
            </div>

            <div style={{ marginBottom: 16 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div style={{ fontWeight: 500 }}>Email Notifications</div>
                  <div style={{ fontSize: 12, color: "#999" }}>Receive billing alerts</div>
                </div>
                <Switch defaultChecked />
              </div>
            </div>

            <div style={{ marginBottom: 16 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div style={{ fontWeight: 500 }}>Paperless Billing</div>
                  <div style={{ fontSize: 12, color: "#999" }}>Digital invoices only</div>
                </div>
                <Switch defaultChecked />
              </div>
            </div>

            <Button type="primary" block style={{ marginTop: 16 }}>
              Update Payment Method
            </Button>
          </Card>
        </Col>
      </Row>

      <Card title="Billing History" style={{ marginTop: 16 }}>
        <Table
          dataSource={billingHistory}
          rowKey="id"
          columns={[
            {
              title: "Date",
              dataIndex: "date",
              key: "date",
              render: (date) => (
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <CalendarOutlined />
                  {date}
                </div>
              ),
            },
            {
              title: "Amount",
              dataIndex: "amount",
              key: "amount",
              render: (amount) => (
                <span style={{ fontWeight: "bold" }}>{amount}</span>
              ),
            },
            {
              title: "Items",
              dataIndex: "items",
              key: "items",
              render: (items) => (
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <FileTextOutlined />
                  {items} statements
                </div>
              ),
            },
            {
              title: "Status",
              dataIndex: "status",
              key: "status",
              render: (status) => (
                <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                  {getStatusIcon(status)}
                  <span style={{ textTransform: "capitalize" }}>{status}</span>
                </div>
              ),
            },
            {
              title: "Actions",
              key: "actions",
              render: (_, record) => (
                <Space>
                  <Tooltip title="Download Invoice">
                    <Button 
                      type="text" 
                      icon={<DownloadOutlined />}
                      onClick={() => console.log("Download invoice", record.id)}
                    />
                  </Tooltip>
                  <Button type="link" size="small">
                    View Details
                  </Button>
                </Space>
              ),
            },
          ]}
        />
      </Card>

      <Card title="Upcoming Billing Estimate" style={{ marginTop: 16 }}>
        <div style={{ marginBottom: 16 }}>
          <Alert
            message={`Next billing date: ${upcomingBilling.nextBillingDate}`}
            type="info"
            showIcon
          />
        </div>

        <Table
          dataSource={upcomingBilling.items}
          rowKey="name"
          columns={[
            { title: "Item", dataIndex: "name", key: "name" },
            { title: "Count", dataIndex: "count", key: "count" },
            { title: "Rate", dataIndex: "rate", key: "rate" },
            { 
              title: "Amount", 
              dataIndex: "amount", 
              key: "amount",
              render: (amount) => (
                <span style={{ fontWeight: "bold" }}>{amount}</span>
              ),
            },
          ]}
          pagination={false}
          summary={() => (
            <Table.Summary.Row>
              <Table.Summary.Cell index={0} colSpan={3}>
                <strong>Estimated Total</strong>
              </Table.Summary.Cell>
              <Table.Summary.Cell index={1}>
                <strong style={{ color: "#cf1322" }}>{upcomingBilling.estimatedAmount}</strong>
              </Table.Summary.Cell>
            </Table.Summary.Row>
          )}
        />

        <div style={{ marginTop: 16, display: "flex", gap: 8 }}>
          <Button type="primary">Pay Now</Button>
          <Button>Download Estimate</Button>
          <Button type="link">Contact Support</Button>
        </div>
      </Card>
    </div>
  );
};
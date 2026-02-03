import { Card, Col, Row, Statistic, Table } from "antd";
import { useMany } from "@refinedev/core";
import { DashboardOutlined } from "@ant-design/icons";

export const DashboardPage: React.FC = () => {
  return (
    <div>
      <h1 style={{ fontSize: "24px", marginBottom: "24px" }}>
        <DashboardOutlined /> Welcome 👋
      </h1>
      
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Total Statements"
              value={42}
              valueStyle={{ color: "#3f8600" }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Pending Requests"
              value={3}
              valueStyle={{ color: "#cf1322" }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Active Discounts"
              value={2}
              valueStyle={{ color: "#1890ff" }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Monthly Usage"
              value={70}
              suffix="%"
              valueStyle={{ color: "#faad14" }}
            />
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]} style={{ marginTop: "24px" }}>
        <Col xs={24} lg={12}>
          <Card title="Quick Actions">
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <a href="/dashboard/products" style={{ padding: "12px", background: "#f0f5ff", borderRadius: "8px" }}>
                📄 Request Statement
              </a>
              <a href="/dashboard/cheque" style={{ padding: "12px", background: "#f0f5ff", borderRadius: "8px" }}>
                💳 Check Cheque Balance
              </a>
              <a href="/dashboard/requests" style={{ padding: "12px", background: "#f0f5ff", borderRadius: "8px" }}>
                📋 View All Requests
              </a>
            </div>
          </Card>
        </Col>
        
        <Col xs={24} lg={12}>
          <Card title="Recent Activity">
            <Table
              dataSource={[
                { key: "1", activity: "Statement generated", time: "2 hours ago" },
                { key: "2", activity: "Cheque balance checked", time: "Yesterday" },
                { key: "3", activity: "New discount code added", time: "2 days ago" },
              ]}
              columns={[
                { title: "Activity", dataIndex: "activity", key: "activity" },
                { title: "Time", dataIndex: "time", key: "time" },
              ]}
              pagination={false}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};
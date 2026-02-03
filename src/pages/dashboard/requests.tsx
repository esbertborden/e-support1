import { Tag, Space, Button, Table } from "antd";
import { UnorderedListOutlined } from "@ant-design/icons";

export const RequestsPage: React.FC = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "green";
      case "Processing": return "blue";
      case "Pending": return "yellow";
      default: return "default";
    }
  };

  return (
    <div>
      <h1 style={{ fontSize: "24px", marginBottom: "24px" }}>
        <UnorderedListOutlined /> All Requests
      </h1>
      <p style={{ color: "#666", marginBottom: "24px" }}>
        View and manage all your banking requests
      </p>

      <Table
        rowKey="id"
        columns={[
          { 
            title: "Request Type", 
            dataIndex: "type", 
            key: "type" 
          },
          { 
            title: "Status", 
            dataIndex: "status", 
            key: "status",
            render: (status: string) => (
              <Tag color={getStatusColor(status)}>
                {status}
              </Tag>
            ),
          },
          { 
            title: "Date", 
            dataIndex: "date", 
            key: "date" 
          },
          { 
            title: "Account", 
            dataIndex: "account", 
            key: "account" 
          },
          { 
            title: "Details", 
            dataIndex: "details", 
            key: "details" 
          },
          {
            title: "Actions",
            key: "actions",
            render: () => (
              <Space>
                <Button type="link" size="small">View</Button>
                <Button type="link" size="small">Download</Button>
              </Space>
            ),
          },
        ]}
        dataSource={[
          { id: 1, type: "Bank Statement", status: "Completed", date: "2024-01-28", account: "Savings", details: "PDF Format" },
          { id: 2, type: "Cheque Balance", status: "Pending", date: "2024-01-27", account: "Checking", details: "Cheque: 12345" },
          { id: 3, type: "Bank Statement", status: "Processing", date: "2024-01-26", account: "Business", details: "Excel Format" },
        ]}
      />
    </div>
  );
};
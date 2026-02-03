import { Card, Form, Switch, Button, Input, Select } from "antd";
import { SettingOutlined } from "@ant-design/icons";

export const SettingsPage: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Save settings:", values);
    // Add your API call here
  };

  return (
    <div>
      <h1 style={{ fontSize: "24px", marginBottom: "24px" }}>
        <SettingOutlined /> Settings
      </h1>
      <p style={{ color: "#666", marginBottom: "24px" }}>
        Configure your banking preferences and notifications
      </p>

      <Card>
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
        >
          <h3 style={{ marginBottom: "16px" }}>Notification Preferences</h3>
          
          <Form.Item
            name="emailNotifications"
            label="Email Notifications"
            valuePropName="checked"
          >
            <Switch checkedChildren="On" unCheckedChildren="Off" defaultChecked />
          </Form.Item>

          <Form.Item
            name="smsAlerts"
            label="SMS Alerts"
            valuePropName="checked"
          >
            <Switch checkedChildren="On" unCheckedChildren="Off" />
          </Form.Item>

          <Form.Item
            name="autoDelete"
            label="Auto-delete Statements"
            help="Automatically delete statements after 90 days"
            valuePropName="checked"
          >
            <Switch checkedChildren="On" unCheckedChildren="Off" defaultChecked />
          </Form.Item>

          <h3 style={{ marginTop: "24px", marginBottom: "16px" }}>Statement Preferences</h3>
          
          <Form.Item
            name="defaultFormat"
            label="Default Statement Format"
          >
            <Select>
              <Select.Option value="pdf">PDF</Select.Option>
              <Select.Option value="excel">Excel</Select.Option>
              <Select.Option value="csv">CSV</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Save Settings
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};
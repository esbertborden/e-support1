import { Card, Form, Input, Button } from "antd";
import { CreditCardOutlined } from "@ant-design/icons";

export const ChequePage: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Check balance:", values);
    // Add your API call here
  };

  return (
    <div>
      <h1 style={{ fontSize: "24px", marginBottom: "24px" }}>
        <CreditCardOutlined /> Cheque Balance
      </h1>

      <Card style={{ maxWidth: 500 }}>
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
        >
          <Form.Item
            label="Cheque Number"
            name="chequeNumber"
            rules={[{ required: true, message: "Please enter cheque number" }]}
          >
            <Input placeholder="Enter cheque number" size="large" />
          </Form.Item>

          <Form.Item
            label="Account Number"
            name="accountNumber"
            rules={[{ required: true, message: "Please enter account number" }]}
          >
            <Input placeholder="Enter account number" size="large" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block>
              Check Balance
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};
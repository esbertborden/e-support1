import { Card, Row, Col, Button, Tag } from "antd";
import { FileExcelOutlined } from "@ant-design/icons";

export const CataloguePage: React.FC = () => {
  const templates = [
    { id: 1, name: "Standard Summary", desc: "Monthly account summary", format: "PDF" },
    { id: 2, name: "Detailed Transaction", desc: "Complete transaction list", format: "Excel" },
    { id: 3, name: "Tax Ready", desc: "Formatted for tax purposes", format: "PDF" },
  ];

  return (
    <div>
      <h1 style={{ fontSize: "24px", marginBottom: "24px" }}>
        <FileExcelOutlined /> Catalogue
      </h1>
      <p style={{ color: "#666", marginBottom: "24px" }}>
        View and manage statement templates
      </p>

      <Card title="Statement Templates">
        <p style={{ color: "#666", marginBottom: "24px" }}>
          Pre-configured statement formats
        </p>
        
        <Row gutter={[16, 16]}>
          {templates.map((template) => (
            <Col xs={24} sm={12} lg={8} key={template.id}>
              <Card
                hoverable
                style={{ height: "100%" }}
                actions={[
                  <Button type="primary" block>
                    Use Template
                  </Button>
                ]}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div>
                    <h3 style={{ marginBottom: "8px" }}>{template.name}</h3>
                    <p style={{ color: "#666", fontSize: "14px" }}>{template.desc}</p>
                  </div>
                  <Tag>{template.format}</Tag>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Card>
    </div>
  );
};
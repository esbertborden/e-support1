import { LayoutProps } from "@refinedev/core";
import { useState } from "react";
import { Menu, Grid, Layout } from "antd";
import {
  DashboardOutlined,
  FileTextOutlined,
  CreditCardOutlined,
  SettingOutlined,
  ProductOutlined,
  FileExcelOutlined,
  ShoppingCartOutlined,
  TagOutlined,
  DollarOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { useMenu, useLink } from "@refinedev/core";

const { Sider } = Layout;
const { Header, Content, Footer: AntFooter } = Layout;
const { useBreakpoint } = Grid;

export const CustomLayout: React.FC<LayoutProps> = ({
  children,
  Title,
  Footer,
  OffLayoutArea,
}) => {
  const [collapsed, setCollapsed] = useState(false);
  const { menuItems, selectedKey } = useMenu();
  const Link = useLink();
  const screens = useBreakpoint();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        theme="light"
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        breakpoint="lg"
        collapsedWidth={screens.md ? 80 : 0}
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div style={{ padding: "16px", textAlign: "center" }}>
          {!collapsed ? (
            Title ? <Title collapsed={collapsed} /> : null
          ) : (
            <div style={{ fontSize: "24px" }}>🏦</div>
          )}
        </div>
        
        <Menu
          theme="light"
          mode="inline"
          selectedKeys={[selectedKey]}
          items={[
            {
              key: "dashboard",
              icon: <DashboardOutlined />,
              label: <Link to="/dashboard">Dashboard</Link>,
            },
            {
              key: "bank-statement",
              icon: <FileTextOutlined />,
              label: "Bank Statement",
              children: [
                {
                  key: "products",
                  icon: <ProductOutlined />,
                  label: <Link to="/dashboard/products">Products</Link>,
                },
                {
                  key: "catalogue",
                  icon: <FileExcelOutlined />,
                  label: <Link to="/dashboard/catalogue">Catalogue</Link>,
                },
                {
                  key: "checkout-links",
                  icon: <ShoppingCartOutlined />,
                  label: <Link to="/dashboard/checkout-links">Checkout Links</Link>,
                },
                {
                  key: "discounts",
                  icon: <TagOutlined />,
                  label: <Link to="/dashboard/discounts">Discounts</Link>,
                },
                {
                  key: "usage-billing",
                  icon: <DollarOutlined />,
                  label: <Link to="/dashboard/usage-billing">Usage Billing</Link>,
                },
              ],
            },
            {
              key: "cheque",
              icon: <CreditCardOutlined />,
              label: <Link to="/dashboard/cheque">Cheque Balance</Link>,
            },
            {
              key: "requests",
              icon: <UnorderedListOutlined />,
              label: <Link to="/dashboard/requests">All Requests</Link>,
            },
            {
              key: "settings",
              icon: <SettingOutlined />,
              label: <Link to="/dashboard/settings">Settings</Link>,
            },
          ]}
        />
      </Sider>
      
      <Layout style={{ marginLeft: collapsed ? 80 : 200, transition: "all 0.2s" }}>
        <Header style={{ padding: 0, background: "#fff" }}>
          {/* You can add a header here */}
        </Header>
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
            {children}
          </div>
        </Content>
        <AntFooter style={{ textAlign: "center" }}>
          {Footer && <Footer />}
        </AntFooter>
      </Layout>
      
      {OffLayoutArea && <OffLayoutArea />}
    </Layout>
  );
};
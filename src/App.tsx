import { Refine } from "@refinedev/core";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";
import {
  ErrorComponent,
  useNotificationProvider,
} from "@refinedev/antd";
import routerBindings, {
  DocumentTitleHandler,
  UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import { BrowserRouter, Outlet, Route, Routes, Navigate } from "react-router-dom";
import { DashboardOutlined } from "@ant-design/icons";

import { dataProvider } from "./providers/data-provider";
import { authProvider } from "./providers/auth-provider";
import { CustomLayout } from "./components/layout";
import { DashboardPage } from "./pages/dashboard/dashboard";
import { ProductsPage } from "./pages/dashboard/products";
import { CataloguePage } from "./pages/dashboard/catalogue";
import { CheckoutLinksPage } from "./pages/dashboard/checkoutlinks";
import { DiscountsPage } from "./pages/dashboard/discounts";
import { UsageBillingPage } from "./pages/dashboard/usagebilling";
import { ChequePage } from "./pages/dashboard/cheque";
import { RequestsPage } from "./pages/dashboard/requests";
import { SettingsPage } from "./pages/dashboard/settings";

import "@refinedev/antd/dist/reset.css";

function App() {
  return (
    <BrowserRouter>
      <RefineKbarProvider>
        <Refine
          dataProvider={dataProvider}
          authProvider={authProvider}
          routerProvider={routerBindings}
          notificationProvider={useNotificationProvider}
          resources={[
            {
              name: "dashboard",
              list: "/dashboard",
              meta: {
                label: "Dashboard",
                icon: <DashboardOutlined />,
              },
            },
            {
              name: "products",
              list: "/dashboard/products",
              meta: {
                label: "Products",
              },
            },
            {
              name: "catalogue",
              list: "/dashboard/catalogue",
              meta: {
                label: "Catalogue",
              },
            },
            {
              name: "checkout-links",
              list: "/dashboard/checkout-links",
              meta: {
                label: "Checkout Links",
              },
            },
            {
              name: "discounts",
              list: "/dashboard/discounts",
              meta: {
                label: "Discounts",
              },
            },
            {
              name: "usage-billing",
              list: "/dashboard/usage-billing",
              meta: {
                label: "Usage Billing",
              },
            },
            {
              name: "cheque",
              list: "/dashboard/cheque",
              meta: {
                label: "Cheque Balance",
              },
            },
            {
              name: "requests",
              list: "/dashboard/requests",
              meta: {
                label: "All Requests",
              },
            },
            {
              name: "settings",
              list: "/dashboard/settings",
              meta: {
                label: "Settings",
              },
            },
          ]}
          options={{
            syncWithLocation: true,
            warnWhenUnsavedChanges: true,
          }}
        >
          <Routes>
            <Route
              element={
                <CustomLayout>
                  <Outlet />
                </CustomLayout>
              }
            >
              <Route index element={<Navigate to="/dashboard" replace />} />
              <Route path="dashboard" element={<DashboardPage />} />
              <Route path="dashboard/products" element={<ProductsPage />} />
              <Route path="dashboard/catalogue" element={<CataloguePage />} />
              <Route path="dashboard/checkout-links" element={<CheckoutLinksPage />} />
              <Route path="dashboard/discounts" element={<DiscountsPage />} />
              <Route path="dashboard/usage-billing" element={<UsageBillingPage />} />
              <Route path="dashboard/cheque" element={<ChequePage />} />
              <Route path="dashboard/requests" element={<RequestsPage />} />
              <Route path="dashboard/settings" element={<SettingsPage />} />
              <Route path="*" element={<ErrorComponent />} />
            </Route>
          </Routes>
          <RefineKbar />
          <UnsavedChangesNotifier />
          <DocumentTitleHandler />
        </Refine>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
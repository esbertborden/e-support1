// import { Refine } from "@refinedev/core";
// import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";
// import { ErrorComponent, useNotificationProvider } from "@refinedev/antd";
// import routerBindings, {
//   DocumentTitleHandler,
//   UnsavedChangesNotifier,
// } from "@refinedev/react-router-v6";
// import { BrowserRouter, Outlet, Route, Routes, Navigate } from "react-router-dom";

// import { dataProvider } from "./providers/data-provider";
// import { authProvider } from "./providers/auth-provider";
// import { CustomLayout } from "./components/layout";
// import { DashboardPage } from "./pages/dashboard/dashboard";
// import { ProductsPage } from "./pages/dashboard/products";
// import { CataloguePage } from "./pages/dashboard/catalogue";
// import { CheckoutLinksPage } from "./pages/dashboard/checkoutlinks";
// import { DiscountsPage } from "./pages/dashboard/discounts";
// import { UsageBillingPage } from "./pages/dashboard/usagebilling";
// import { ChequePage } from "./pages/dashboard/cheque";
// import { RequestsPage } from "./pages/dashboard/requests";
// import { SettingsPage } from "./pages/dashboard/settings";

// import "@refinedev/antd/dist/reset.css";

// function App() {
//   return (
//     <BrowserRouter>
//       <RefineKbarProvider>
//         <Refine
//           dataProvider={dataProvider}
//           authProvider={authProvider}
//           routerProvider={routerBindings}
//           notificationProvider={useNotificationProvider}
//           resources={[
//             {
//               name: "dashboard",
//               list: "/dashboard",
//             },
//             {
//               name: "products",
//               list: "/dashboard/products",
//             },
//             {
//               name: "catalogue",
//               list: "/dashboard/catalogue",
//             },
//             {
//               name: "checkout-links",
//               list: "/dashboard/checkout-links",
//             },
//             {
//               name: "discounts",
//               list: "/dashboard/discounts",
//             },
//             {
//               name: "usage-billing",
//               list: "/dashboard/usage-billing",
//             },
//             {
//               name: "cheque",
//               list: "/dashboard/cheque",
//             },
//             {
//               name: "requests",
//               list: "/dashboard/requests",
//             },
//             {
//               name: "settings",
//               list: "/dashboard/settings",
//             },
//           ]}
//           options={{
//             syncWithLocation: true,
//             warnWhenUnsavedChanges: true,
//           }}
//         >
//           <Routes>
//             <Route
//               element={
//                 <CustomLayout>
//                   <Outlet />
//                 </CustomLayout>
//               }
//             >
//               <Route index element={<Navigate to="/dashboard" replace />} />
//               <Route path="dashboard" element={<DashboardPage />} />
//               <Route path="dashboard/products" element={<ProductsPage />} />
//               <Route path="dashboard/catalogue" element={<CataloguePage />} />
//               <Route path="dashboard/checkout-links" element={<CheckoutLinksPage />} />
//               <Route path="dashboard/discounts" element={<DiscountsPage />} />
//               <Route path="dashboard/usage-billing" element={<UsageBillingPage />} />
//               <Route path="dashboard/cheque" element={<ChequePage />} />
//               <Route path="dashboard/requests" element={<RequestsPage />} />
//               <Route path="dashboard/settings" element={<SettingsPage />} />
//               <Route path="*" element={<ErrorComponent />} />
//             </Route>
//           </Routes>
//           <RefineKbar />
//           <UnsavedChangesNotifier />
//           <DocumentTitleHandler />
//         </Refine>
//       </RefineKbarProvider>
//     </BrowserRouter>
//   );
// }

// export default App;


"use client";

// import { SidebarProvider } from "@*/components/ui/sidebar";
import DashboardPage from "./pages/dashboard/dashboard";
import Header from "./components/header";

export default function Page() {
  return (
   
      <div className="flex h-screen w-full">
      {/* <SignUpForm/> */}
       {/* <SignInForm/>  */}
      <Header/>
      </div>
   
  );
}
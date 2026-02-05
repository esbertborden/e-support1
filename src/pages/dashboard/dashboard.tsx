"use client"

import * as React from "react"
import {
  Home,
  FileText,
  CreditCard,
  Settings,
  ChevronDown,
  ChevronRight,
  Package,
  FileSpreadsheet,
  ListChecks,
  ShoppingCart,
  Tag,
  DollarSign,
  Menu,
  X,
} from "lucide-react"
import Header from "src/components/header"

type Tab = "home" | "products" | "catalogue" | "checkout-links" | "discounts" | "usage-billing" | "cheque" | "requests" | "settings"

export default function DashboardPage() {
  
  const [activeTab, setActiveTab] = React.useState<Tab>("home")
  const [bankMenuOpen, setBankMenuOpen] = React.useState(false)
  const [sidebarCollapsed, setSidebarCollapsed] = React.useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  const bankMenuItems = [
    { id: "products", label: "Products", icon: <Package className="h-4 w-4" /> },
    { id: "catalogue", label: "Catalogue", icon: <FileSpreadsheet className="h-4 w-4" /> },
    { id: "checkout-links", label: "Checkout Links", icon: <ShoppingCart className="h-4 w-4" /> },
    { id: "discounts", label: "Discounts", icon: <Tag className="h-4 w-4" /> },
    { id: "usage-billing", label: "Usage Billing", icon: <DollarSign className="h-4 w-4" /> },
  ]

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed)
    setBankMenuOpen(false)
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const handleNavigate = (tab: string) => {
    setActiveTab(tab as Tab)
  }

  return ( 
    <div className="flex min-h-screen flex-col">
      {/* Header Component */}
      <Header/>
      
      <div className="flex flex-1">
        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden fixed top-20 left-4 z-50 p-2 rounded-md bg-blue-500 text-white"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        {/* Overlay for mobile */}
        {mobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}

        {/* Sidebar */}
        <aside 
          className={`
            fixed md:relative
            ${sidebarCollapsed ? 'w-16' : 'w-64'}
            ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
            h-screen bg-blue-500 p-4 transition-all duration-300 ease-in-out z-40
            flex flex-col
          `}
        >
          {/* Collapse Toggle Button */}
          <div className="flex items-center justify-between mb-4">
            {!sidebarCollapsed && (
              <h2 className="text-sm font-semibold text-black-500">Menu</h2>
            )}
            <button
              onClick={toggleSidebar}
              className="p-1 rounded-md hover:bg-blue-400 text-white transition-colors"
              title={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              {sidebarCollapsed ? <ChevronRight className="h-5 w-5" /> : <ChevronRight className="h-5 w-5 rotate-180" />}
            </button>
          </div>

          <nav className="space-y-1 flex-1">
            {/* Home */}
            <SidebarButton
              active={activeTab === "home"}
              icon={<Home className="h-4 w-4" />}
              label="Home"
              collapsed={sidebarCollapsed}
              onClick={() => {
                setActiveTab("home")
                setMobileMenuOpen(false)
              }}
            />

            {/* Bank Statement Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  if (sidebarCollapsed) {
                    setBankMenuOpen(!bankMenuOpen)
                  } else {
                    setBankMenuOpen(!bankMenuOpen)
                  }
                }}
                className={`
                  flex w-full items-center justify-between rounded-md px-3 py-2 text-sm
                  hover:bg-blue-400 transition-colors text-white
                  ${sidebarCollapsed ? 'justify-center px-2' : ''}
                `}
                title={sidebarCollapsed ? "Bank Statement" : ""}
              >
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  {!sidebarCollapsed && "Bank Statement"}
                </div>
                {!sidebarCollapsed && (
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      bankMenuOpen ? "rotate-180" : ""
                    }`}
                  />
                )}
              </button>

              {/* Bank Menu - Expanded */}
              {!sidebarCollapsed && bankMenuOpen && (
                <div className="ml-4 space-y-1 mt-1">
                  {bankMenuItems.map(item => (
                    <button
                      key={item.id}
                      onClick={() => {
                        setActiveTab(item.id as Tab)
                        setMobileMenuOpen(false)
                      }}
                      className={`flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm ${
                        activeTab === item.id
                          ? "bg-blue-400 text-white"
                          : "hover:bg-blue-300 text-white"
                      }`}
                    >
                      {item.icon}
                      {item.label}
                    </button>
                  ))}
                </div>
              )}

              {/* Bank Menu - Collapsed (Tooltip/Popover) */}
              {sidebarCollapsed && bankMenuOpen && (
                <div className="absolute left-full top-0 ml-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200">
                  {bankMenuItems.map(item => (
                    <button
                      key={item.id}
                      onClick={() => {
                        setActiveTab(item.id as Tab)
                        setBankMenuOpen(false)
                        setMobileMenuOpen(false)
                      }}
                      className={`flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-gray-100 ${
                        activeTab === item.id ? "bg-blue-50 text-blue-600" : "text-gray-700"
                      }`}
                    >
                      {item.icon}
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Cheque */}
            <SidebarButton
              active={activeTab === "cheque"}
              icon={<CreditCard className="h-4 w-4" />}
              label="Cheque Balance"
              collapsed={sidebarCollapsed}
              onClick={() => {
                setActiveTab("cheque")
                setMobileMenuOpen(false)
              }}
            />

            {/* Requests */}
            <SidebarButton
              active={activeTab === "requests"}
              icon={<ListChecks className="h-4 w-4" />}
              label="All Requests"
              collapsed={sidebarCollapsed}
              onClick={() => {
                setActiveTab("requests")
                setMobileMenuOpen(false)
              }}
            />

            {/* Settings */}
            <SidebarButton
              active={activeTab === "settings"}
              icon={<Settings className="h-4 w-4" />}
              label="Settings"
              collapsed={sidebarCollapsed}
              onClick={() => {
                setActiveTab("settings")
                setMobileMenuOpen(false)
              }}
            />
          </nav>

          {/* Collapse indicator for collapsed state */}
          {sidebarCollapsed && (
            <div className="mt-4 text-xs text-center text-white opacity-75">
            </div>
          )}
        </aside>

        {/* Right side content area */}
        <div className={`
          flex-1 flex flex-col transition-all duration-300 ease-in-out
        `}>
          
          {/* Main Content */}
          <main className="flex-1 p-6 overflow-auto">
            {activeTab === "home" && <HomeContent />}
            {activeTab === "products" && <ProductsContent />}
            {activeTab === "catalogue" && <CatalogueContent />}
            {activeTab === "checkout-links" && <CheckoutLinksContent />}
            {activeTab === "discounts" && <DiscountsContent />}
            {activeTab === "usage-billing" && <UsageBillingContent />}
            {activeTab === "cheque" && <ChequeBalanceContent />}
            {activeTab === "requests" && <AllRequestsContent />}
            {activeTab === "settings" && <SettingsContent />}
          </main>
        </div>
      </div>
    </div>
  )
}

function SidebarButton({
  icon,
  label,
  active,
  collapsed,
  onClick,
}: {
  icon: React.ReactNode
  label: string
  active: boolean
  collapsed: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center gap-2 rounded-md px-3 py-2 text-sm
        transition-colors relative group
        ${active
          ? "bg-blue-400 text-white"
          : "text-white hover:bg-blue-400"
        }
        ${collapsed ? 'justify-center px-2' : 'w-full'}
      `}
      title={collapsed ? label : ""}
    >
      {icon}
      {!collapsed && label}
      
      {/* Tooltip for collapsed state */}
      {collapsed && (
        <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 pointer-events-none">
          {label}
        </div>
      )}
    </button>
  )
}

// Keep all the existing content components (HomeContent, ProductsContent, etc.) unchanged
function HomeContent() {
  return (
    <>
      <h1 className="text-2xl font-bold text-blue-500 mr-20">Welcome 👋</h1>
      <p className="mt-2 text-gray-500">
        Use the sidebar to navigate through your banking options.
      </p>
    </>
  )
}

function ProductsContent() {
  return (
    <div>
      <div className="mb-8">
        <div className="flex items-center gap-3">
          <Package className="h-6 w-6 text-gray-600" />
          <div>
            <h1 className="text-2xl font-bold text-blue-500">Products</h1>
            <p className="text-sm text-gray-500 mt-1">Manage your banking products and statements</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Statement Request Form */}
        <div className="bg-white rounded-lg  p-6">
          <h2 className="text-lg font-semibold mb-4">Request Statement</h2>
          <form className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Account</label>
              <select className="w-full p-2  rounded-md">
                <option value="">Select account</option>
                <option value="savings">Savings Account</option>
                <option value="checking">Checking Account</option>
                <option value="business">Business Account</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Period</label>
              <select className="w-full p-2 rounded-md">
                <option value="">Select period</option>
                <option value="last-month">Last Month</option>
                <option value="last-quarter">Last Quarter</option>
                <option value="last-year">Last Year</option>
              </select>
            </div>

            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
              Request Statement
            </button>
          </form>
        </div>

        {/* Products Overview */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg border p-6">
            <h2 className="text-lg font-semibold mb-4">Your Products</h2>
            <div className="space-y-3">
              {['Savings Account', 'Checking Account', 'Business Account'].map((product, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-blue-50 rounded-lg flex items-center justify-center">
                      <Package className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-medium">{product}</div>
                      <div className="text-sm text-gray-500">Active</div>
                    </div>
                  </div>
                  <button className="text-sm text-blue-600 hover:text-blue-700">
                    View
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function CatalogueContent() {
  return (
    <div>
      <div className="mb-8">
        <div className="flex items-center gap-3">
          <FileSpreadsheet className="h-6 w-6 text-gray-600" />
          <div>
            <h1 className="text-2xl font-bold text-blue-500">Catalogue</h1>
            <p className="text-sm text-gray-500 mt-1">View and manage statement templates</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border p-6">
        <div className="mb-6">
          <h2 className="text-lg font-semibold">Statement Templates</h2>
          <p className="text-sm text-gray-500">Pre-configured statement formats</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { name: 'Standard Summary', desc: 'Monthly account summary', format: 'PDF' },
            { name: 'Detailed Transaction', desc: 'Complete transaction list', format: 'Excel' },
            { name: 'Tax Ready', desc: 'Formatted for tax purposes', format: 'PDF' },
          ].map((template, index) => (
            <div key={index} className="border rounded-lg p-4 hover:border-blue-300 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="font-medium">{template.name}</div>
                  <div className="text-sm text-gray-500">{template.desc}</div>
                </div>
                <span className="text-xs px-2 py-1 bg-gray-100 rounded">{template.format}</span>
              </div>
              <button className="w-full text-sm bg-blue-50 text-blue-600 py-2 rounded-md hover:bg-blue-100">
                Use Template
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function CheckoutLinksContent() {
  return (
    <div>
      <div className="mb-8">
        <div className="flex items-center gap-3">
          <ShoppingCart className="h-6 w-6 text-gray-600" />
          <div>
            <h1 className="text-2xl font-bold text-blue-500">Checkout Links</h1>
            <p className="text-sm text-gray-500 mt-1">Generate links for statement purchases</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border p-6">
        <div className="mb-6">
          <h2 className="text-lg font-semibold">Generate Payment Link</h2>
          <p className="text-sm text-gray-500">Create links for customers to purchase statements</p>
        </div>

        <div className="space-y-4 max-w-md">
          <div className="space-y-2">
            <label className="text-sm font-medium">Statement Type</label>
            <select className="w-full p-2 border rounded-md">
              <option value="">Select statement type</option>
              <option value="standard">Standard Statement</option>
              <option value="detailed">Detailed Statement</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Price (USD)</label>
            <input type="number" placeholder="0.00" className="w-full p-2 border rounded-md" />
          </div>

          <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
            Generate Link
          </button>
        </div>
      </div>
    </div>
  )
}

function DiscountsContent() {
  return (
    <div>
      <div className="mb-8">
        <div className="flex items-center gap-3">
          <Tag className="h-6 w-6 text-gray-600" />
          <div>
            <h1 className="text-2xl font-bold text-blue-500">Discounts</h1>
            <p className="text-sm text-gray-500 mt-1">Manage statement discounts and promotions</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border p-6">
        <div className="mb-6">
          <h2 className="text-lg font-semibold">Active Discounts</h2>
          <p className="text-sm text-gray-500">Currently available promotions</p>
        </div>

        <div className="space-y-4">
          {[
            { code: 'STMT25', desc: '25% off all statements', valid: 'Until Jan 31, 2024' },
            { code: 'BULK50', desc: '50% off bulk orders', valid: 'Valid for 30 days' },
          ].map((discount, index) => (
            <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <div className="flex items-center gap-3">
                  <span className="font-mono font-medium bg-blue-50 text-blue-700 px-2 py-1 rounded">
                    {discount.code}
                  </span>
                  <div className="font-medium">{discount.desc}</div>
                </div>
                <div className="text-sm text-gray-500 mt-1">{discount.valid}</div>
              </div>
              <button className="text-sm text-blue-600 hover:text-blue-700">
                Apply
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function UsageBillingContent() {
  return (
    <div>
      <div className="mb-8">
        <div className="flex items-center gap-3">
          <DollarSign className="h-6 w-6 text-gray-600" />
          <div>
            <h1 className="text-2xl font-bold text-blue-500">Usage Billing</h1>
            <p className="text-sm text-gray-500 mt-1">Track and manage statement usage costs</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border p-6">
          <h2 className="text-lg font-semibold mb-4">Current Usage</h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Statements Generated</span>
                <span className="font-medium">42</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-blue-600" style={{ width: '70%' }}></div>
              </div>
              <div className="text-xs text-gray-500 mt-1">70% of monthly limit</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border p-6">
          <h2 className="text-lg font-semibold mb-4">Billing Settings</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Email Notifications</div>
                <div className="text-sm text-gray-500">Receive billing alerts</div>
              </div>
              <button className="w-11 h-6 bg-gray-300 rounded-full relative">
                <div className="h-5 w-5 bg-white rounded-full absolute top-0.5 left-0.5"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ChequeBalanceContent() {
  return (
    <div className="max-w-md">
      <h1 className="text-2xl font-bold mb-8 text-blue-500">Cheque Balance</h1>
      
      <form className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Cheque Number</label>
          <input 
            placeholder="Enter cheque number" 
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Account Number</label>
          <input 
            placeholder="Enter account number" 
            className="w-full p-2 border rounded-md"
          />
        </div>

        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
          Check Balance
        </button>
      </form>
    </div>
  )
}

function AllRequestsContent() {
  const requests = [
    { id: 1, type: "Bank Statement", status: "Completed", date: "2024-01-28", account: "Savings", format: "PDF" },
    { id: 2, type: "Cheque Balance", status: "Pending", date: "2024-01-27", account: "Checking", cheque: "12345" },
    { id: 3, type: "Bank Statement", status: "Processing", date: "2024-01-26", account: "Business", format: "Excel" },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-green-100 text-green-800"
      case "Processing": return "bg-blue-100 text-blue-800"
      case "Pending": return "bg-yellow-100 text-yellow-800"
      default: return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-blue-500">All Requests</h1>
        <p className="text-sm text-gray-500 mt-1">View and manage all your banking requests</p>
      </div>

      <div className="bg-white rounded-lg border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-gray-50">
                <th className="text-left py-3 px-4 font-medium">Request Type</th>
                <th className="text-left py-3 px-4 font-medium">Status</th>
                <th className="text-left py-3 px-4 font-medium">Date</th>
                <th className="text-left py-3 px-4 font-medium">Account</th>
                <th className="text-left py-3 px-4 font-medium">Details</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((request) => (
                <tr key={request.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      {request.type === "Bank Statement" ? (
                        <FileText className="h-4 w-4 text-gray-500" />
                      ) : (
                        <CreditCard className="h-4 w-4 text-gray-500" />
                      )}
                      <span>{request.type}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(request.status)}`}>
                      {request.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">{request.date}</td>
                  <td className="py-3 px-4">{request.account}</td>
                  <td className="py-3 px-4">
                    {request.type === "Bank Statement" 
                      ? `Format: ${request.format}`
                      : `Cheque: ${request.cheque}`}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

function SettingsContent() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-blue-500">Settings</h1>
      <p className="mt-2 text-gray-500">
        Configure your banking preferences and notifications.
      </p>
    </div>
  )
}

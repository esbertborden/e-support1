"use client"

import * as React from "react"
import {
  Home,
  FileText,
  CreditCard,
  Settings,
  Package,
  FileSpreadsheet,
  ListChecks,
  ShoppingCart,
  Tag,
  DollarSign,
} from "lucide-react"

type Tab = "home" | "products" | "catalogue" | "checkout-links" | "discounts" | "usage-billing" | "cheque" | "requests" | "settings"

// Main DashboardPage component
export default function DashboardPage() {
  const [activeTab, setActiveTab] = React.useState<Tab>("home")

  const handleNavigate = (tab: string) => {
    setActiveTab(tab as Tab)
  }

  return ( 
    <div className="min-h-screen bg-gray-50 w-full">
      {/* Header Component without navigation tabs */}
      <Header onNavigate={handleNavigate} activeTab={activeTab} />
      
      {/* Main Content Area - Full width */}
      <div className="flex-1">
        <main className="p-6 mx-auto">
          <div className="max-w-7xl mx-auto">
            {activeTab === "home" && <HomeContent />}
            {activeTab === "products" && <ProductsContent />}
            {activeTab === "catalogue" && <CatalogueContent />}
            {activeTab === "checkout-links" && <CheckoutLinksContent />}
            {activeTab === "discounts" && <DiscountsContent />}
            {activeTab === "usage-billing" && <UsageBillingContent />}
            {activeTab === "cheque" && <ChequeBalanceContent />}
            {activeTab === "requests" && <AllRequestsContent />}
            {activeTab === "settings" && <SettingsContent />}
          </div>
        </main>
      </div>
    </div>
  )
}

// Header component without navigation tabs - only logo, search, and user controls
function Header({ 
  onNavigate, 
  activeTab 
}: { 
  onNavigate: (tab: string) => void
  activeTab: Tab 
}) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isRegionOpen, setIsRegionOpen] = React.useState(false);
  const [isProfileOpen, setIsProfileOpen] = React.useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = React.useState(false);
  const [isHelpOpen, setIsHelpOpen] = React.useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = React.useState(false);

  const handleMenuItemClick = (item: string) => {
    console.log(`Navigating to: ${item}`);
    
    // Map menu items to dashboard tabs
    const tabMapping: { [key: string]: string } = {
      'Home': 'home',
      'Bank Statement': 'products',
      'Cheque Balance': 'cheque',
      'All Requests': 'requests',
      'Settings': 'settings',
      'Products': 'products',
      'Catalogue': 'catalogue',
      'Checkout Links': 'checkout-links',
      'Discounts': 'discounts',
      'Usage Billing': 'usage-billing',
      'Payment Services': 'checkout-links',
      'Track Requests': 'requests',
      'Raise request': 'requests',
      'Archived Requests': 'requests',
      'My Requests': 'requests',
      'Account Names': 'settings',
      'MFA': 'settings',
      'Docuware': 'catalogue',
      'CCC Passport': 'settings',
      'Bank Services': 'products',
      'Commercial Banking': 'products',
      'Corporate Banking': 'products',
      'Consumer Banking': 'products',
      'General Transport Services': 'usage-billing',
      'Media Services': 'catalogue',
      'Migration & Transfer': 'catalogue',
      'Networking & Content Delivery': 'catalogue',
      'Analytics': 'usage-billing',
      'Application Integration': 'checkout-links',
      'Blockchain': 'discounts',
      'Business Applications': 'products',
      'Cloud Financial Management': 'usage-billing',
      'Compute': 'products',
      'Containers': 'catalogue',
      'Customer Enablement': 'settings',
      'Database': 'catalogue',
      'Developer Tools': 'catalogue',
      'End User Computing': 'settings',
      'Front-end Web & Mobile': 'catalogue',
      'Game Development': 'catalogue',
      'Internet of Things': 'catalogue',
      'Machine Learning': 'catalogue',
      'Management & Governance': 'settings',
    };
    
    const tab = tabMapping[item] || 'home';
    onNavigate(tab);
    setIsMenuOpen(false);
  };

//   const africanCountries = [
//     { name: "Algeria", flag: "🇩🇿" },
//     { name: "Angola", flag: "🇦🇴" },
//     { name: "Benin", flag: "🇧🇯" },
//     { name: "Botswana", flag: "🇧🇼" },
//     { name: "Burkina Faso", flag: "🇧🇫" },
//     { name: "Burundi", flag: "🇧🇮" },
//     { name: "Cameroon", flag: "🇨🇲" },
//     { name: "Cape Verde", flag: "🇨🇻" },
//     { name: "Central African Republic", flag: "🇨🇫" },
//     { name: "Chad", flag: "🇹🇩" },
//     { name: "Comoros", flag: "🇰🇲" },
//     { name: "Congo (Brazzaville)", flag: "🇨🇬" },
//     { name: "Congo (Kinshasa)", flag: "🇨🇩" },
//     { name: "Côte d'Ivoire", flag: "🇨🇮" },
//     { name: "Djibouti", flag: "🇩🇯" },
//     { name: "Egypt", flag: "🇪🇬" },
//     { name: "Equatorial Guinea", flag: "🇬🇶" },
//     { name: "Eritrea", flag: "🇪🇷" },
//     { name: "Eswatini", flag: "🇸🇿" },
//     { name: "Ethiopia", flag: "🇪🇹" },
//     { name: "Gabon", flag: "🇬🇦" },
//     { name: "Gambia", flag: "🇬🇲" },
//     { name: "Ghana", flag: "🇬🇭" },
//     { name: "Guinea", flag: "🇬🇳" },
//     { name: "Guinea-Bissau", flag: "🇬🇼" },
//     { name: "Kenya", flag: "🇰🇪" },
//     { name: "Lesotho", flag: "🇱🇸" },
//     { name: "Liberia", flag: "🇱🇷" },
//     { name: "Libya", flag: "🇱🇾" },
//     { name: "Madagascar", flag: "🇲🇬" },
//     { name: "Malawi", flag: "🇲🇼" },
//     { name: "Mali", flag: "🇲🇱" },
//     { name: "Mauritania", flag: "🇲🇷" },
//     { name: "Mauritius", flag: "🇲🇺" },
//     { name: "Morocco", flag: "🇲🇦" },
//     { name: "Mozambique", flag: "🇲🇿" },
//     { name: "Namibia", flag: "🇳🇦" },
//     { name: "Niger", flag: "🇳🇪" },
//     { name: "Nigeria", flag: "🇳🇬" },
//     { name: "Rwanda", flag: "🇷🇼" },
//     { name: "São Tomé and Príncipe", flag: "🇸🇹" },
//     { name: "Senegal", flag: "🇸🇳" },
//     { name: "Seychelles", flag: "🇸🇨" },
//     { name: "Sierra Leone", flag: "🇸🇱" },
//     { name: "Somalia", flag: "🇸🇴" },
//     { name: "South Africa", flag: "🇿🇦" },
//     { name: "South Sudan", flag: "🇸🇸" },
//     { name: "Sudan", flag: "🇸🇩" },
//     { name: "Tanzania", flag: "🇹🇿" },
//     { name: "Togo", flag: "🇹🇬" },
//     { name: "Tunisia", flag: "🇹🇳" },
//     { name: "Uganda", flag: "🇺🇬" },
//     { name: "Zambia", flag: "🇿🇲" },
//     { name: "Zimbabwe", flag: "🇿🇼" },
//   ];

  return (
    <>
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 w-full text-gray-200 relative z-50 shadow-lg">
        {/* Single Header Row with logo, search, and user controls */}
        <div className="h-16 flex items-center px-6">
          {/* Left - Logo and Menu Button */}
          <div className="flex items-center gap-4">
            {/* <img src="/Ecobank.png" alt="Logo" className="h-12 w-14" /> */}
                <span className="text-2xl font-bold font-mono text-white">ECOBANK</span>
            
            {/* Menu Button */}
            <button 
              className="text-xl hover:text-white flex items-center justify-center w-10 h-10 hover:bg-blue-700 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              title="Menu"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <circle cx="3" cy="3" r="2" />
                <circle cx="10" cy="3" r="2" />
                <circle cx="17" cy="3" r="2" />
                <circle cx="3" cy="10" r="2" />
                <circle cx="10" cy="10" r="2" />
                <circle cx="17" cy="10" r="2" />
                <circle cx="3" cy="17" r="2" />
                <circle cx="10" cy="17" r="2" />
                <circle cx="17" cy="17" r="2" />
              </svg>
            </button>
          </div>
          
          {/* Center - Search (Full width) */}
          <div className="flex-1 mx-6">
            <div className="max-w-2xl mx-auto text-gray-700">
              <input
                type="text"
                placeholder="Search for services, requests, or accounts..."
                className="w-full bg-white/10 placeholder-gray-300 text-white text-sm px-4 py-2.5 rounded-lg outline-none focus:bg-white focus:text-gray-900 focus:ring-2 focus:ring-white transition-all"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    console.log('Search:', (e.target as HTMLInputElement).value);
                  }
                }}
              />
            </div>
          </div>
          
          {/* Right - User Controls */}
          <div className="flex items-center gap-3">
            {/* Support/Help Icon */}
            <div className="relative">
              <button 
                className="hover:bg-blue-700 p-2 rounded-lg transition-colors"
                onClick={() => {
                  setIsHelpOpen(!isHelpOpen);
                  setIsSettingsOpen(false);
                  setIsNotificationOpen(false);
                  setIsRegionOpen(false);
                  setIsProfileOpen(false);
                }}
                title="Help"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                  <circle cx="12" cy="17" r="0.5" fill="currentColor" />
                </svg>
              </button>
              {isHelpOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white text-gray-800 rounded-lg shadow-lg z-50 border border-gray-200">
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">Help & Support</h3>
                    <div className="space-y-2">
                      <button className="w-full text-left p-2 hover:bg-gray-100 rounded">Documentation</button>
                      <button className="w-full text-left p-2 hover:bg-gray-100 rounded">Contact Support</button>
                      <button className="w-full text-left p-2 hover:bg-gray-100 rounded">Community Forum</button>
                      <button className="w-full text-left p-2 hover:bg-gray-100 rounded">FAQs</button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Settings Icon */}
            <div className="relative">
              <button 
                className="hover:bg-blue-700 p-2 rounded-lg transition-colors"
                onClick={() => {
                  setIsSettingsOpen(!isSettingsOpen);
                  setIsHelpOpen(false);
                  setIsNotificationOpen(false);
                  setIsRegionOpen(false);
                  setIsProfileOpen(false);
                }}
                title="Settings"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 1v6m0 6v6M5.64 5.64l4.24 4.24m4.24 4.24l4.24 4.24M1 12h6m6 0h6M5.64 18.36l4.24-4.24m4.24-4.24l4.24-4.24" />
                </svg>
              </button>
              {isSettingsOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white text-gray-800 rounded-lg shadow-lg z-50 border border-gray-200">
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">Settings</h3>
                    <div className="space-y-2">
                      <button className="w-full text-left p-2 hover:bg-gray-100 rounded">Account Settings</button>
                      <button className="w-full text-left p-2 hover:bg-gray-100 rounded">Privacy & Security</button>
                      <button className="w-full text-left p-2 hover:bg-gray-100 rounded">Notifications</button>
                      <button className="w-full text-left p-2 hover:bg-gray-100 rounded">Preferences</button>
                      <button className="w-full text-left p-2 hover:bg-gray-100 rounded">Language</button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Notification Bell */}
            <div className="relative">
              <button 
                className="hover:bg-blue-700 p-2 rounded-lg relative transition-colors"
                onClick={() => {
                  setIsNotificationOpen(!isNotificationOpen);
                  setIsHelpOpen(false);
                  setIsSettingsOpen(false);
                  setIsRegionOpen(false);
                  setIsProfileOpen(false);
                }}
                title="Notifications"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                  <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                </svg>
                <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-red-500 rounded-full border border-white"></span>
              </button>
              {isNotificationOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white text-gray-800 rounded-lg shadow-lg z-50 border border-gray-200">
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold">Notifications</h3>
                      <button className="text-xs text-blue-600 hover:underline">Mark all as read</button>
                    </div>
                    <div className="space-y-2 max-h-96 overflow-y-auto">
                      <div className="p-3 hover:bg-gray-100 rounded cursor-pointer border-l-4 border-blue-600">
                        <p className="font-medium text-sm">New login detected</p>
                        <p className="text-xs text-gray-600">Someone logged into your account from a new device</p>
                        <p className="text-xs text-gray-400 mt-1">2 hours ago</p>
                      </div>
                      <div className="p-3 hover:bg-gray-100 rounded cursor-pointer">
                        <p className="font-medium text-sm">System update completed</p>
                        <p className="text-xs text-gray-600">Your system has been successfully updated</p>
                        <p className="text-xs text-gray-400 mt-1">5 hours ago</p>
                      </div>
                      <div className="p-3 hover:bg-gray-100 rounded cursor-pointer">
                        <p className="font-medium text-sm">Payment received</p>
                        <p className="text-xs text-gray-600">GHS 500 has been credited to your account</p>
                        <p className="text-xs text-gray-400 mt-1">1 day ago</p>
                      </div>
                    </div>
                    <div className="mt-3 pt-3 border-t">
                      <button className="w-full text-center text-sm text-blue-600 hover:underline">View all notifications</button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Region Selector */}
            <div className="relative">
              {/* <button 
                className="hover:bg-blue-700 px-4 py-2 rounded-lg flex items-center gap-2 transition-colors border border-blue-500"
                onClick={() => {
                  setIsRegionOpen(!isRegionOpen);
                  setIsHelpOpen(false);
                  setIsSettingsOpen(false);
                  setIsNotificationOpen(false);
                  setIsProfileOpen(false);
                }}
                title="Select region"
              > */}
                {/* <span className="font-medium">Ghana</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 10l5 5 5-5z" />
                </svg>
              </button>
              {isRegionOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-lg z-50 border border-gray-200">
                  <div className="space-y-1 max-h-[400px] overflow-y-auto p-2">
                    {africanCountries.map((country) => (
                      <button
                        key={country.name}
                        className="w-full text-left p-2 hover:bg-gray-100 rounded flex items-center gap-2"
                      >
                        <span className="text-lg">{country.flag}</span>
                        <span>{country.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )} */}
            </div>

            {/* User Profile */}
            <div className="relative">
              <button 
                className="hover:bg-blue-700 px-4 py-2 rounded-lg flex items-center gap-3 transition-colors"
                onClick={() => {
                  setIsProfileOpen(!isProfileOpen);
                  setIsHelpOpen(false);
                  setIsSettingsOpen(false);
                  setIsNotificationOpen(false);
                  setIsRegionOpen(false);
                }}
                title="User profile"
              >
                <div className="w-8 h-8 rounded-full bg-white text-blue-600 flex items-center justify-center font-semibold">
                  U
                </div>
                <div className="text-left">
                  <div className="text-sm font-medium">User Name</div>
                  <div className="text-xs text-gray-300">Admin</div>
                </div>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 10l5 5 5-5z" />
                </svg>
              </button>
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white text-gray-800 rounded-lg shadow-lg z-50 border border-gray-200">
                  <div className="p-4 border-b">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
                        U
                      </div>
                      <div>
                        <p className="font-semibold">User Name</p>
                        <p className="text-xs text-gray-600">user@example.com</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-2">
                    <button className="w-full text-left p-2 hover:bg-gray-100 rounded">My Profile</button>
                    <button className="w-full text-left p-2 hover:bg-gray-100 rounded">Account Settings</button>
                    <button className="w-full text-left p-2 hover:bg-gray-100 rounded">Billing</button>
                    <button className="w-full text-left p-2 hover:bg-gray-100 rounded">Security</button>
                  </div>
                  <div className="p-2 border-t">
                    <button className="w-full text-left p-2 hover:bg-gray-100 rounded text-red-600 font-medium">Sign Out</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Sliding Menu (main navigation) */}
      <div 
        className={`fixed top-0 left-0 h-full bg-slate-800 text-gray-200 z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ width: '320px' }}
      >
        {/* Menu Header */}
        <div className="bg-slate-900 p-6 border-b border-slate-700">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Menu</h2>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl hover:text-white p-2"
              title="Close menu"
            >
              ×
            </button>
          </div>
          
          {/* User Info */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold text-lg">
              U
            </div>
            <div>
              <div className="font-semibold">User Name</div>
              <div className="text-xs text-gray-400">Admin</div>
            </div>
          </div>
          
          {/* Current Page Indicator */}
          <div className="bg-blue-800/50 rounded-lg p-3 mb-4">
            <div className="text-xs text-gray-400 mb-1">Current Page</div>
            <div className="font-medium">
              {activeTab === "home" && "Dashboard Overview"}
              {activeTab === "products" && "Bank Products Management"}
              {activeTab === "catalogue" && "Statement Catalogue"}
              {activeTab === "checkout-links" && "Payment Links"}
              {activeTab === "discounts" && "Discount Management"}
              {activeTab === "usage-billing" && "Usage & Billing"}
              {activeTab === "cheque" && "Cheque Balance Inquiry"}
              {activeTab === "requests" && "Request Management"}
              {activeTab === "settings" && "Account Settings"}
            </div>
          </div>
          
          {/* Quick Access Tabs */}
          <div className="flex gap-2">
            <button 
              className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium flex-1"
              onClick={() => {
                handleMenuItemClick('Recently visited')
                console.log('Recently visited tab clicked')
              }}
            >
              Recently visited
            </button>
            <button 
              className="px-4 py-2 hover:bg-slate-700 rounded-lg transition-colors text-sm font-medium flex-1"
              onClick={() => {
                console.log('Favorites tab clicked')
              }}
            >
              Favorites
            </button>
          </div>
        </div>

        {/* Menu Content */}
        <div className="p-6">
          {/* Main Navigation Section */}
          <div className="mb-8">
            <h3 className="text-xs font-semibold text-gray-400 uppercase mb-4 tracking-wider">Main Navigation</h3>
            <div className="space-y-2">
              <MenuItem 
                title="Home" 
                subtitle="Dashboard overview"
                icon={<Home className="h-4 w-4" />}
                onClick={() => handleMenuItemClick('Home')}
                active={activeTab === "home"}
              />
              <MenuItem 
                title="Bank Statement" 
                subtitle="Manage statements and products"
                icon={<FileText className="h-4 w-4" />}
                onClick={() => handleMenuItemClick('Bank Statement')}
                active={["products", "catalogue", "checkout-links", "discounts", "usage-billing"].includes(activeTab)}
              />
              <MenuItem 
                title="Cheque Balance" 
                subtitle="Check cheque status and balance"
                icon={<CreditCard className="h-4 w-4" />}
                onClick={() => handleMenuItemClick('Cheque Balance')}
                active={activeTab === "cheque"}
              />
              <MenuItem 
                title="All Requests" 
                subtitle="View and manage all requests"
                icon={<ListChecks className="h-4 w-4" />}
                onClick={() => handleMenuItemClick('All Requests')}
                active={activeTab === "requests"}
              />
              <MenuItem 
                title="Settings" 
                subtitle="Account and system settings"
                icon={<Settings className="h-4 w-4" />}
                onClick={() => handleMenuItemClick('Settings')}
                active={activeTab === "settings"}
              />
            </div>
          </div>

          {/* Recently Visited Section */}
          <div className="mb-8">
            <h3 className="text-xs font-semibold text-gray-400 uppercase mb-4 tracking-wider">Recently visited</h3>
            <div className="space-y-2">
              <MenuItem 
                title="Bank Statement" 
                subtitle="Request for your bank statements here"
                onClick={() => handleMenuItemClick('Bank Statement')}
              />
              <MenuItem 
                title="Cheque Balance" 
                subtitle="You can have access to a cheque balance"
                onClick={() => handleMenuItemClick('Cheque Balance')}
              />
              <MenuItem 
                title="All Requests" 
                subtitle="View all requests made"
                onClick={() => handleMenuItemClick('All Requests')}
              />
              <MenuItem 
                title="Payment Services" 
                subtitle="Access payment services"
                onClick={() => handleMenuItemClick('Payment Services')}
              />
              <MenuItem 
                title="Track Requests" 
                subtitle="Track your requests"
                onClick={() => handleMenuItemClick('Track Requests')}
              />
            </div>
          </div>

          {/* All Services Section */}
          <div>
            <h3 className="text-xs font-semibold text-gray-400 uppercase mb-4 tracking-wider">All services</h3>
            <div className="space-y-1">
              <CategoryItem title="Bank Statement" onClick={() => handleMenuItemClick('Bank Statement')} />
              <CategoryItem title="Cheque Balance" onClick={() => handleMenuItemClick('Cheque Balance')} />
              <CategoryItem title="Payment Services" onClick={() => handleMenuItemClick('Payment Services')} />
              <CategoryItem title="Raise request" onClick={() => handleMenuItemClick('Raise request')} />
              <CategoryItem title="Track requests" onClick={() => handleMenuItemClick('Track requests')} />
              <CategoryItem title="Archived Requests" onClick={() => handleMenuItemClick('Archived Requests')} />
              <CategoryItem title="My Requests" onClick={() => handleMenuItemClick('My Requests')} />
              <CategoryItem title="Account Names" onClick={() => handleMenuItemClick('Account Names')} />
              <CategoryItem title="MFA" onClick={() => handleMenuItemClick('MFA')} />
              <CategoryItem title="Docuware" onClick={() => handleMenuItemClick('Docuware')} />
              <CategoryItem title="CCC Passport" onClick={() => handleMenuItemClick('CCC Passport')} />
              <CategoryItem title="Bank Services" onClick={() => handleMenuItemClick('Bank Services')} />
              <CategoryItem title="Commercial Banking" onClick={() => handleMenuItemClick('Commercial Banking')} />
              <CategoryItem title="Corporate Banking" onClick={() => handleMenuItemClick('Corporate Banking')} />
              <CategoryItem title="Consumer Banking" onClick={() => handleMenuItemClick('Consumer Banking')} />
              <CategoryItem title="General Transport Services" onClick={() => handleMenuItemClick('General Transport Services')} />
              <CategoryItem title="Media Services" onClick={() => handleMenuItemClick('Media Services')} />
              <CategoryItem title="Migration & Transfer" onClick={() => handleMenuItemClick('Migration & Transfer')} />
              <CategoryItem title="Networking & Content Delivery" onClick={() => handleMenuItemClick('Networking & Content Delivery')} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function MenuItem({ title, subtitle, icon, onClick, active = false }: { 
  title: string; 
  subtitle: string; 
  icon?: React.ReactNode;
  onClick: () => void;
  active?: boolean;
}) {
  return (
    <div 
      className={`p-3 hover:bg-slate-700 rounded-lg cursor-pointer transition-colors border-l-2 ${active ? 'border-blue-500 bg-slate-700' : 'border-transparent'}`}
      onClick={onClick}
    >
      <div className="flex items-center gap-3">
        {icon && <div className="text-gray-400">{icon}</div>}
        <div>
          <div className="font-medium text-sm mb-1">{title}</div>
          <div className="text-xs text-gray-400">{subtitle}</div>
        </div>
      </div>
    </div>
  );
}

function CategoryItem({ title, onClick }: { title: string; onClick: () => void }) {
  return (
    <div 
      className="p-3 hover:bg-slate-700 rounded cursor-pointer text-sm transition-colors hover:pl-4"
      onClick={onClick}
    >
      {title}
    </div>
  );
}

// Keep all the existing content components (HomeContent, ProductsContent, etc.) unchanged
function HomeContent() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="max-w-4xl">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Welcome back! 👋</h1>
        <p className="text-gray-600 text-lg mb-8">
          Welcome to your banking dashboard. Here you can manage all your banking services, 
          track requests, check balances, and configure your settings.
        </p>
        
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
            <h3 className="text-lg font-semibold text-blue-700 mb-2">Active Requests</h3>
            <p className="text-3xl font-bold text-blue-600">12</p>
            <p className="text-sm text-blue-500 mt-2">In progress</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg border border-green-100">
            <h3 className="text-lg font-semibold text-green-700 mb-2">Completed</h3>
            <p className="text-3xl font-bold text-green-600">48</p>
            <p className="text-sm text-green-500 mt-2">This month</p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
            <h3 className="text-lg font-semibold text-purple-700 mb-2">Balance</h3>
            <p className="text-3xl font-bold text-purple-600">₵5,280</p>
            <p className="text-sm text-purple-500 mt-2">Available</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="border-t pt-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button className="p-4 text-left bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200 transition-colors">
              <div className="font-medium text-gray-800">Request New Statement</div>
              <div className="text-sm text-gray-600 mt-1">Generate a new bank statement</div>
            </button>
            <button className="p-4 text-left bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200 transition-colors">
              <div className="font-medium text-gray-800">Check Cheque Balance</div>
              <div className="text-sm text-gray-600 mt-1">Verify cheque status and balance</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function ProductsContent() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <Package className="h-8 w-8 text-blue-600" />
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Products</h1>
            <p className="text-gray-600 mt-1">Manage your banking products and statements</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Statement Request Form */}
        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Request Statement</h2>
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Account</label>
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option value="">Select account</option>
                <option value="savings">Savings Account</option>
                <option value="checking">Checking Account</option>
                <option value="business">Business Account</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Period</label>
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option value="">Select period</option>
                <option value="last-month">Last Month</option>
                <option value="last-quarter">Last Quarter</option>
                <option value="last-year">Last Year</option>
              </select>
            </div>

            <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 font-medium transition-colors">
              Request Statement
            </button>
          </form>
        </div>

        {/* Products Overview */}
        <div className="space-y-6">
          <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Your Products</h2>
            <div className="space-y-4">
              {['Savings Account', 'Checking Account', 'Business Account'].map((product, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-gray-300 rounded-lg hover:border-blue-300 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 bg-blue-50 rounded-lg flex items-center justify-center">
                      <Package className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-800">{product}</div>
                      <div className="text-sm text-gray-500">Active • Last updated: Today</div>
                    </div>
                  </div>
                  <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                    View Details
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
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <FileSpreadsheet className="h-8 w-8 text-blue-600" />
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Catalogue</h1>
            <p className="text-gray-600 mt-1">View and manage statement templates</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-xl border border-gray-200 p-8">
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Statement Templates</h2>
          <p className="text-gray-600">Pre-configured statement formats for different needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: 'Standard Summary', desc: 'Monthly account summary with basic details', format: 'PDF', color: 'blue' },
            { name: 'Detailed Transaction', desc: 'Complete transaction list with all details', format: 'Excel', color: 'green' },
            { name: 'Tax Ready', desc: 'Formatted for tax purposes and auditing', format: 'PDF', color: 'purple' },
          ].map((template, index) => (
            <div key={index} className="bg-white border border-gray-300 rounded-xl p-6 hover:border-blue-300 transition-colors hover:shadow-md">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`h-3 w-3 rounded-full bg-${template.color}-500`}></div>
                    <div className="font-semibold text-gray-800 text-lg">{template.name}</div>
                  </div>
                  <div className="text-sm text-gray-600 mb-4">{template.desc}</div>
                </div>
                <span className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full font-medium">{template.format}</span>
              </div>
              <button className="w-full text-sm bg-blue-50 text-blue-600 py-3 rounded-lg hover:bg-blue-100 font-medium transition-colors">
                Use This Template
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
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <ShoppingCart className="h-8 w-8 text-blue-600" />
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Checkout Links</h1>
            <p className="text-gray-600 mt-1">Generate links for statement purchases</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-xl border border-gray-200 p-8">
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Generate Payment Link</h2>
          <p className="text-gray-600">Create secure links for customers to purchase statements</p>
        </div>

        <div className="space-y-6 max-w-2xl">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Statement Type</label>
            <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option value="">Select statement type</option>
              <option value="standard">Standard Statement</option>
              <option value="detailed">Detailed Statement</option>
              <option value="tax">Tax Statement</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Price (GHS)</label>
            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-500">₵</span>
              <input 
                type="number" 
                placeholder="0.00" 
                className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Validity Period</label>
            <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option value="7">7 days</option>
              <option value="30">30 days</option>
              <option value="90">90 days</option>
            </select>
          </div>

          <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 font-medium transition-colors">
            Generate Payment Link
          </button>
        </div>
      </div>
    </div>
  )
}

function DiscountsContent() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <Tag className="h-8 w-8 text-blue-600" />
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Discounts</h1>
            <p className="text-gray-600 mt-1">Manage statement discounts and promotions</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-xl border border-gray-200 p-8">
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Active Discounts</h2>
          <p className="text-gray-600">Currently available promotions for statements</p>
        </div>

        <div className="space-y-4">
          {[
            { code: 'STMT25', desc: '25% off all statements', valid: 'Until Jan 31, 2024', usage: '48 used', color: 'blue' },
            { code: 'BULK50', desc: '50% off bulk orders', valid: 'Valid for 30 days', usage: '12 used', color: 'green' },
            { code: 'FIRST10', desc: '10% off for first-time users', valid: 'No expiry', usage: '156 used', color: 'purple' },
          ].map((discount, index) => (
            <div key={index} className="flex items-center justify-between p-6 bg-white border border-gray-300 rounded-xl hover:border-blue-300 transition-colors">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-3">
                  <span className={`font-mono font-bold text-lg bg-${discount.color}-50 text-${discount.color}-700 px-3 py-1.5 rounded-lg`}>
                    {discount.code}
                  </span>
                  <div className="font-semibold text-gray-800">{discount.desc}</div>
                </div>
                <div className="flex items-center gap-6 text-sm text-gray-600">
                  <div>Valid: {discount.valid}</div>
                  <div>Usage: {discount.usage}</div>
                </div>
              </div>
              <button className="text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-medium transition-colors">
                Apply Discount
              </button>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-8 border-t">
          <button className="w-full border-2 border-dashed border-gray-300 text-gray-600 py-4 rounded-lg hover:border-blue-400 hover:text-blue-600 font-medium transition-colors">
            + Create New Discount
          </button>
        </div>
      </div>
    </div>
  )
}

function UsageBillingContent() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <DollarSign className="h-8 w-8 text-blue-600" />
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Usage Billing</h1>
            <p className="text-gray-600 mt-1">Track and manage statement usage costs</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Current Usage</h2>
          <div className="space-y-8">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="font-medium text-gray-700">Statements Generated</span>
                <span className="font-bold text-blue-600">42 / 60</span>
              </div>
              <div className="h-3 bg-gray-300 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-500 to-blue-700" style={{ width: '70%' }}></div>
              </div>
              <div className="text-xs text-gray-500 mt-2">70% of monthly limit used • Resets in 14 days</div>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <div className="font-medium text-gray-700">Total Cost</div>
                  <div className="text-sm text-gray-500">This billing cycle</div>
                </div>
                <div className="text-xl font-bold text-gray-800">₵ 1,250.00</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Billing Settings</h2>
          <div className="space-y-6">
            <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-300">
              <div>
                <div className="font-medium text-gray-800">Email Notifications</div>
                <div className="text-sm text-gray-500">Receive billing alerts and updates</div>
              </div>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600">
                <span className="inline-block h-4 w-4 transform translate-x-6 rounded-full bg-white transition"></span>
              </button>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-300">
              <div>
                <div className="font-medium text-gray-800">Auto-renewal</div>
                <div className="text-sm text-gray-500">Automatically renew service</div>
              </div>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-300">
                <span className="inline-block h-4 w-4 transform translate-x-1 rounded-full bg-white transition"></span>
              </button>
            </div>
            
            <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg hover:border-blue-400 hover:text-blue-600 font-medium transition-colors">
              View Billing History
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function ChequeBalanceContent() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 max-w-3xl">
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <CreditCard className="h-8 w-8 text-blue-600" />
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Cheque Balance</h1>
            <p className="text-gray-600 mt-1">Check the status and balance of your cheques</p>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 rounded-xl border border-gray-200 p-8">
        <form className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Cheque Number</label>
            <input 
              placeholder="Enter cheque number (e.g., 00123456789)" 
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Account Number</label>
            <input 
              placeholder="Enter account number" 
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Bank Branch</label>
            <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option value="">Select branch</option>
              <option value="accra">Accra Main Branch</option>
              <option value="kumasi">Kumasi Branch</option>
              <option value="takoradi">Takoradi Branch</option>
            </select>
          </div>

          <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 font-medium transition-colors">
            Check Balance
          </button>
        </form>
      </div>
    </div>
  )
}

function AllRequestsContent() {
  const requests = [
    { id: 1, type: "Bank Statement", status: "Completed", date: "2024-01-28", account: "Savings", format: "PDF", amount: "₵ 25.00" },
    { id: 2, type: "Cheque Balance", status: "Pending", date: "2024-01-27", account: "Checking", cheque: "12345", amount: "Free" },
    { id: 3, type: "Bank Statement", status: "Processing", date: "2024-01-26", account: "Business", format: "Excel", amount: "₵ 35.00" },
    { id: 4, type: "Account Statement", status: "Completed", date: "2024-01-25", account: "Investment", format: "PDF", amount: "₵ 20.00" },
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
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="mb-10">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <ListChecks className="h-8 w-8 text-blue-600" />
            <div>
              <h1 className="text-2xl font-bold text-gray-800">All Requests</h1>
              <p className="text-gray-600 mt-1">View and manage all your banking requests</p>
            </div>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-medium">
            + New Request
          </button>
        </div>
      </div>

      <div className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100 border-b">
                <th className="text-left py-4 px-6 font-semibold text-gray-700">Request Type</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-700">Status</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-700">Date</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-700">Account</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-700">Amount</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-700">Details</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((request) => (
                <tr key={request.id} className="border-b hover:bg-gray-50">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      {request.type === "Bank Statement" ? (
                        <FileText className="h-5 w-5 text-blue-500" />
                      ) : (
                        <CreditCard className="h-5 w-5 text-green-500" />
                      )}
                      <span className="font-medium">{request.type}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(request.status)}`}>
                      {request.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-gray-700">{request.date}</td>
                  <td className="py-4 px-6">
                    <div className="font-medium">{request.account}</div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="font-medium">{request.amount}</div>
                  </td>
                  <td className="py-4 px-6">
                    <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                      {request.type === "Bank Statement" 
                        ? `Download ${request.format}`
                        : `View Details`}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="bg-gray-100 p-4 flex justify-between items-center">
          <div className="text-sm text-gray-600">
            Showing 4 of 48 requests
          </div>
          <div className="flex gap-2">
            <button className="px-3 py-1 bg-white border border-gray-300 rounded hover:bg-gray-50">Previous</button>
            <button className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">1</button>
            <button className="px-3 py-1 bg-white border border-gray-300 rounded hover:bg-gray-50">2</button>
            <button className="px-3 py-1 bg-white border border-gray-300 rounded hover:bg-gray-50">Next</button>
          </div>
        </div>
      </div>
    </div>
  )
}

function SettingsContent() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <Settings className="h-8 w-8 text-blue-600" />
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Settings</h1>
            <p className="text-gray-600 mt-1">Configure your banking preferences and notifications</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Account Settings</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input 
                  type="text" 
                  defaultValue="User Name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  defaultValue="user@example.com"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  placeholder="+233 00 000 0000"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 font-medium transition-colors">
                Save Changes
              </button>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-800 mb-4">Security</h3>
            <button className="w-full border border-gray-300 text-gray-700 py-2.5 rounded-lg hover:border-blue-400 hover:text-blue-600 font-medium transition-colors mb-3">
              Change Password
            </button>
            <button className="w-full border border-gray-300 text-gray-700 py-2.5 rounded-lg hover:border-blue-400 hover:text-blue-600 font-medium transition-colors">
              Two-Factor Auth
            </button>
          </div>
          
          <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-800 mb-4">Preferences</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Email Notifications</span>
                <button className="relative inline-flex h-5 w-9 items-center rounded-full bg-blue-600">
                  <span className="inline-block h-3 w-3 transform translate-x-5 rounded-full bg-white transition"></span>
                </button>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">SMS Alerts</span>
                <button className="relative inline-flex h-5 w-9 items-center rounded-full bg-gray-300">
                  <span className="inline-block h-3 w-3 transform translate-x-1 rounded-full bg-white transition"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
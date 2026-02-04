// import { useState } from 'react';



// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <>
//       <header className="h-14 bg-blue-600 w-full text-gray-200 flex items-center px-4 relative z-50">
//         {/* Left */}
//         <div className="flex items-center gap-4">
//             <img src="/Ecobank.png" alt="Logo" className="h-10 w-12" />
//             {/* <button 
//                 className="text-xl hover:text-white"
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//             >
//                 ☰
//             </button> */}
//             <button className="text-xl hover:text-white flex items-center justify-center w-8 h-8"
//                     onClick={() => setIsMenuOpen(!isMenuOpen)}
//             >
//             <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
//             <circle cx="3" cy="3" r="2" />
//             <circle cx="10" cy="3" r="2" />
//             <circle cx="17" cy="3" r="2" />
//             <circle cx="3" cy="10" r="2" />
//             <circle cx="10" cy="10" r="2" />
//             <circle cx="17" cy="10" r="2" />
//             <circle cx="3" cy="17" r="2" />
//             <circle cx="10" cy="17" r="2" />
//             <circle cx="17" cy="17" r="2" />
//             </svg>
//             </button>

//         </div>
//         {/* Center */}
//         <div className="flex-1 px-6 text-gray-900">
//           <input
//             type="text"
//             placeholder="Search"
//             className="w-full max-w-xl bg-white placeholder-gray-500 text-sm px-3 py-1.5 rounded-md outline-none focus:ring-1 focus:ring-blue-500"
//           />
//         </div>
//         {/* Right */}
//         <div className="flex items-center gap-4 text-sm">
//           <button className="hover:text-white">Ghana</button>
//           <button>🔔</button>
//           <button className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center">
//             U
//           </button>
//         </div>
//       </header>

//       {/* Overlay */}
//       {isMenuOpen && (
//         <div 
//           className="fixed inset-0 bg-black bg-opacity-50 z-40"
//           onClick={() => setIsMenuOpen(false)}
//         />
//       )}

//       {/* Sliding Menu */}
//       <div 
//         className={`fixed top-0 left-0 h-full bg-slate-800 text-gray-200 z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto ${
//           isMenuOpen ? 'translate-x-0' : '-translate-x-full'
//         }`}
//         style={{ width: '280px' }}
//       >
//         {/* Menu Header */}
//         <div className="bg-slate-900 p-4 border-b border-slate-700">
//           <div className="flex items-center justify-between mb-4">
//             <h2 className="text-lg font-semibold">Menu</h2>
//             <button 
//               onClick={() => setIsMenuOpen(false)}
//               className="text-xl hover:text-white"
//             >
//               ×
//             </button>
//           </div>
          
//           {/* Quick Access Tabs */}
//           <div className="flex gap-2 text-sm">
//             <button className="px-3 py-1 bg-blue-600 rounded">Recently visited</button>
//             <button className="px-3 py-1 hover:bg-slate-700 rounded">Favorites</button>
//           </div>
//         </div>

//         {/* Menu Content */}
//         <div className="p-4">
//           {/* Recently Visited Section */}
//           <div className="mb-6">
//             <h3 className="text-xs font-semibold text-gray-400 uppercase mb-3">Recently visited</h3>
//             <div className="space-y-2">
//               <MenuItem title="AppFlow" subtitle="Integrate apps and automate data flows" />
//               <MenuItem title="Athena" subtitle="Serverless interactive analytics service" />
//               <MenuItem title="EC2" subtitle="Virtual Servers in the Cloud" />
//               <MenuItem title="Console Home" subtitle="View resource insights, service shortcuts" />
//               <MenuItem title="Aurora and RDS" subtitle="Managed Relational Database Service" />
//             </div>
//           </div>

//           {/* All Services Section */}
//           <div>
//             <h3 className="text-xs font-semibold text-gray-400 uppercase mb-3">All services</h3>
//             <div className="space-y-1">
//               <CategoryItem title="Analytics" />
//               <CategoryItem title="Application Integration" />
//               <CategoryItem title="Blockchain" />
//               <CategoryItem title="Business Applications" />
//               <CategoryItem title="Cloud Financial Management" />
//               <CategoryItem title="Compute" />
//               <CategoryItem title="Containers" />
//               <CategoryItem title="Customer Enablement" />
//               <CategoryItem title="Database" />
//               <CategoryItem title="Developer Tools" />
//               <CategoryItem title="End User Computing" />
//               <CategoryItem title="Front-end Web & Mobile" />
//               <CategoryItem title="Game Development" />
//               <CategoryItem title="Internet of Things" />
//               <CategoryItem title="Machine Learning" />
//               <CategoryItem title="Management & Governance" />
//               <CategoryItem title="Media Services" />
//               <CategoryItem title="Migration & Transfer" />
//               <CategoryItem title="Networking & Content Delivery" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// function MenuItem({ title, subtitle }: { title: string; subtitle: string }) {
//   return (
//     <div className="p-2 hover:bg-slate-700 rounded cursor-pointer">
//       <div className="font-medium text-sm">{title}</div>
//       <div className="text-xs text-gray-400">{subtitle}</div>
//     </div>
//   );
// }

// function CategoryItem({ title }: { title: string }) {
//   return (
//     <div className="p-2 hover:bg-slate-700 rounded cursor-pointer text-sm">
//       {title}
//     </div>
//   );
// }

// import { type } from 'os';
// import path from 'path';
// import { title } from 'process';
// import { useState } from 'react';

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <>
//       <header className="h-14 bg-blue-600 w-full text-gray-200 flex items-center px-4 relative z-50">
//         {/* Left */}
//         <div className="flex items-center gap-4">
//           <img src="/Ecobank.png" alt="Logo" className="h-10 w-12" />
//           <button 
//             className="text-xl hover:text-white flex items-center justify-center w-8 h-8"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
//               <circle cx="3" cy="3" r="2" />
//               <circle cx="10" cy="3" r="2" />
//               <circle cx="17" cy="3" r="2" />
//               <circle cx="3" cy="10" r="2" />
//               <circle cx="10" cy="10" r="2" />
//               <circle cx="17" cy="10" r="2" />
//               <circle cx="3" cy="17" r="2" />
//               <circle cx="10" cy="17" r="2" />
//               <circle cx="17" cy="17" r="2" />
//             </svg>
//           </button>
        
//         </div>
//         {/* Center */}
//         <div className="flex-1 px-6 text-gray-900">
//           <input
//             type="text"
//             placeholder="Search"
//             className="w-full max-w-xl bg-white placeholder-gray-500 text-sm px-3 py-1.5 rounded-md outline-none focus:ring-1 focus:ring-blue-500"
//           />
//         </div>
//         {/* Right */}
//         <div className="flex items-center gap-3 text-sm">
//           {/* Support/Help Icon */}
//           <button className="hover:bg-blue-700 p-2 rounded">
//             <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//               <circle cx="12" cy="12" r="10" />
//               <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
//               <circle cx="12" cy="17" r="0.5" fill="currentColor" />
//             </svg>
//           </button>

//           {/* Settings Icon */}
//           <button className="hover:bg-blue-700 p-2 rounded">
//             <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//               <circle cx="12" cy="12" r="3" />
//               <path d="M12 1v6m0 6v6M5.64 5.64l4.24 4.24m4.24 4.24l4.24 4.24M1 12h6m6 0h6M5.64 18.36l4.24-4.24m4.24-4.24l4.24-4.24" />
//             </svg>
//           </button>

//           {/* Notification Bell */}
//           <button className="hover:bg-blue-700 p-2 rounded relative">
//             <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//               <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
//               <path d="M13.73 21a2 2 0 0 1-3.46 0" />
//             </svg>
//           </button>

//           {/* Region Selector */}
//           <button className="hover:bg-blue-700 px-3 py-1.5 rounded flex items-center gap-1">
//             <span>Ghana</span>
//             <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
//               <path d="M7 10l5 5 5-5z" />
//             </svg>
//           </button>

//           {/* User Profile */}
//           <button className="hover:bg-blue-700 px-3 py-1.5 rounded flex items-center gap-2">
//             <div className="w-6 h-6 rounded-full bg-gray-300 text-gray-700 flex items-center justify-center text-xs font-semibold">
//               U
//             </div>
//             <span className="text-sm">User</span>
//             <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
//               <path d="M7 10l5 5 5-5z" />
//             </svg>
//           </button>
//         </div>
//       </header>

//       {/* Overlay */}
//       {isMenuOpen && (
//         <div 
//           className="fixed inset-0 bg-black bg-opacity-50 z-40"
//           onClick={() => setIsMenuOpen(false)}
//         />
//       )}

//       {/* Sliding Menu */}
//       <div 
//         className={`fixed top-0 left-0 h-full bg-slate-800 text-gray-200 z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto ${
//           isMenuOpen ? 'translate-x-0' : '-translate-x-full'
//         }`}
//         style={{ width: '280px' }}
//       >
//         {/* Menu Header */}
//         <div className="bg-slate-900 p-4 border-b border-slate-700">
//           <div className="flex items-center justify-between mb-4">
//             <h2 className="text-lg font-semibold">Menu</h2>
//             <button 
//               onClick={() => setIsMenuOpen(false)}
//               className="text-xl hover:text-white"
//             >
//               ×
//             </button>
//           </div>
          
//           {/* Quick Access Tabs */}
//           <div className="flex gap-2 text-sm">
//             <button className="px-3 py-1 bg-blue-600 rounded">Recently visited</button>
//             <button className="px-3 py-1 hover:bg-slate-700 rounded">Favorites</button>
//           </div>
//         </div>

//         {/* Menu Content */}
//         <div className="p-4">
//           {/* Recently Visited Section */}
//           <div className="mb-6">
//             <h3 className="text-xs font-semibold text-gray-400 uppercase mb-3">Recently visited</h3>
//             <div className="space-y-2">
//               <MenuItem title="AppFlow" subtitle="Integrate apps and automate data flows" />
//               <MenuItem title="Athena" subtitle="Serverless interactive analytics service" />
//               <MenuItem title="EC2" subtitle="Virtual Servers in the Cloud" />
//               <MenuItem title="Console Home" subtitle="View resource insights, service shortcuts" />
//               <MenuItem title="Aurora and RDS" subtitle="Managed Relational Database Service" />
//             </div>
//           </div>

//           {/* All Services Section */}
//           <div>
//             <h3 className="text-xs font-semibold text-gray-400 uppercase mb-3">All services</h3>
//             <div className="space-y-1">
//               <CategoryItem title="Analytics" />
//               <CategoryItem title="Application Integration" />
//               <CategoryItem title="Blockchain" />
//               <CategoryItem title="Business Applications" />
//               <CategoryItem title="Cloud Financial Management" />
//               <CategoryItem title="Compute" />
//               <CategoryItem title="Containers" />
//               <CategoryItem title="Customer Enablement" />
//               <CategoryItem title="Database" />
//               <CategoryItem title="Developer Tools" />
//               <CategoryItem title="End User Computing" />
//               <CategoryItem title="Front-end Web & Mobile" />
//               <CategoryItem title="Game Development" />
//               <CategoryItem title="Internet of Things" />
//               <CategoryItem title="Machine Learning" />
//               <CategoryItem title="Management & Governance" />
//               <CategoryItem title="Media Services" />
//               <CategoryItem title="Migration & Transfer" />
//               <CategoryItem title="Networking & Content Delivery" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// function MenuItem({ title, subtitle }: { title: string; subtitle: string }) {
//   return (
//     <div className="p-2 hover:bg-slate-700 rounded cursor-pointer">
//       <div className="font-medium text-sm">{title}</div>
//       <div className="text-xs text-gray-400">{subtitle}</div>
//     </div>
//   );
// }

// function CategoryItem({ title }: { title: string }) {
//   return (
//     <div className="p-2 hover:bg-slate-700 rounded cursor-pointer text-sm">
//       {title}
//     </div>
//   );
// }

import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRegionOpen, setIsRegionOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const handleMenuItemClick = (item: string) => {
    console.log(`Navigating to: ${item}`);
    // Add your navigation logic here
    // For example: router.push(`/${item.toLowerCase()}`);
    setIsMenuOpen(false); // Close menu after clicking
  };

  const africanCountries = [
  { name: "Algeria", flag: "🇩🇿" },
  { name: "Angola", flag: "🇦🇴" },
  { name: "Benin", flag: "🇧🇯" },
  { name: "Botswana", flag: "🇧🇼" },
  { name: "Burkina Faso", flag: "🇧🇫" },
  { name: "Burundi", flag: "🇧🇮" },
  { name: "Cameroon", flag: "🇨🇲" },
  { name: "Cape Verde", flag: "🇨🇻" },
  { name: "Central African Republic", flag: "🇨🇫" },
  { name: "Chad", flag: "🇹🇩" },
  { name: "Comoros", flag: "🇰🇲" },
  { name: "Congo (Brazzaville)", flag: "🇨🇬" },
  { name: "Congo (Kinshasa)", flag: "🇨🇩" },
  { name: "Côte d’Ivoire", flag: "🇨🇮" },
  { name: "Djibouti", flag: "🇩🇯" },
  { name: "Egypt", flag: "🇪🇬" },
  { name: "Equatorial Guinea", flag: "🇬🇶" },
  { name: "Eritrea", flag: "🇪🇷" },
  { name: "Eswatini", flag: "🇸🇿" },
  { name: "Ethiopia", flag: "🇪🇹" },
  { name: "Gabon", flag: "🇬🇦" },
  { name: "Gambia", flag: "🇬🇲" },
  { name: "Ghana", flag: "🇬🇭" },
  { name: "Guinea", flag: "🇬🇳" },
  { name: "Guinea-Bissau", flag: "🇬🇼" },
  { name: "Kenya", flag: "🇰🇪" },
  { name: "Lesotho", flag: "🇱🇸" },
  { name: "Liberia", flag: "🇱🇷" },
  { name: "Libya", flag: "🇱🇾" },
  { name: "Madagascar", flag: "🇲🇬" },
  { name: "Malawi", flag: "🇲🇼" },
  { name: "Mali", flag: "🇲🇱" },
  { name: "Mauritania", flag: "🇲🇷" },
  { name: "Mauritius", flag: "🇲🇺" },
  { name: "Morocco", flag: "🇲🇦" },
  { name: "Mozambique", flag: "🇲🇿" },
  { name: "Namibia", flag: "🇳🇦" },
  { name: "Niger", flag: "🇳🇪" },
  { name: "Nigeria", flag: "🇳🇬" },
  { name: "Rwanda", flag: "🇷🇼" },
  { name: "São Tomé and Príncipe", flag: "🇸🇹" },
  { name: "Senegal", flag: "🇸🇳" },
  { name: "Seychelles", flag: "🇸🇨" },
  { name: "Sierra Leone", flag: "🇸🇱" },
  { name: "Somalia", flag: "🇸🇴" },
  { name: "South Africa", flag: "🇿🇦" },
  { name: "South Sudan", flag: "🇸🇸" },
  { name: "Sudan", flag: "🇸🇩" },
  { name: "Tanzania", flag: "🇹🇿" },
  { name: "Togo", flag: "🇹🇬" },
  { name: "Tunisia", flag: "🇹🇳" },
  { name: "Uganda", flag: "🇺🇬" },
  { name: "Zambia", flag: "🇿🇲" },
  { name: "Zimbabwe", flag: "🇿🇼" },
];


  return (
    <>
      <header className="h-14 bg-blue-600 w-full text-gray-200 flex items-center px-4 relative z-50">
        {/* Left */}
        <div className="flex items-center gap-4">
          <img src="/Ecobank.png" alt="Logo" className="h-10 w-12" />
          <button 
            className="text-xl hover:text-white flex items-center justify-center w-8 h-8"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            title="Menu"
          >
            <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
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
        {/* Center */}
        <div className="flex-1 px-6 text-gray-900">
          <input
            type="text"
            placeholder="Search"
            className="w-full max-w-xl bg-white placeholder-gray-500 text-sm px-3 py-1.5 rounded-md outline-none focus:ring-1 focus:ring-blue-500"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                console.log('Search:', (e.target as HTMLInputElement).value);
              }
            }}
          />
        </div>
        {/* Right */}
        <div className="flex items-center gap-3 text-sm">
          {/* Support/Help Icon */}
          <div className="relative">
            <button 
              className="hover:bg-blue-700 p-2 rounded transition-colors"
              onClick={() => {
                setIsHelpOpen(!isHelpOpen);
                setIsSettingsOpen(false);
                setIsNotificationOpen(false);
                setIsRegionOpen(false);
                setIsProfileOpen(false);
              }}
              title="Help"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <circle cx="12" cy="17" r="0.5" fill="currentColor" />
              </svg>
            </button>
            {/* Help Dropdown */}
            {isHelpOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white text-gray-800 rounded-lg shadow-lg z-50">
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
              className="hover:bg-blue-700 p-2 rounded transition-colors"
              onClick={() => {
                setIsSettingsOpen(!isSettingsOpen);
                setIsHelpOpen(false);
                setIsNotificationOpen(false);
                setIsRegionOpen(false);
                setIsProfileOpen(false);
              }}
              title="Settings"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="3" />
                <path d="M12 1v6m0 6v6M5.64 5.64l4.24 4.24m4.24 4.24l4.24 4.24M1 12h6m6 0h6M5.64 18.36l4.24-4.24m4.24-4.24l4.24-4.24" />
              </svg>
            </button>
            {/* Settings Dropdown */}
            {isSettingsOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white text-gray-800 rounded-lg shadow-lg z-50">
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
              className="hover:bg-blue-700 p-2 rounded relative transition-colors"
              onClick={() => {
                setIsNotificationOpen(!isNotificationOpen);
                setIsHelpOpen(false);
                setIsSettingsOpen(false);
                setIsRegionOpen(false);
                setIsProfileOpen(false);
              }}
              title="Notifications"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
              {/* Notification badge */}
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            {/* Notifications Dropdown */}
            {isNotificationOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-white text-gray-800 rounded-lg shadow-lg z-50">
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold">Notifications</h3>
                    <button className="text-xs text-blue-600 hover:underline">Mark all as read</button>
                  </div>
                  <div className="space-y-2 max-h-96 overflow-y-auto">
                    <div className="p-3 hover:bg-gray-100 rounded cursor-pointer border-l-2 border-blue-600">
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
            <button 
              className="hover:bg-blue-700 px-3 py-1.5 rounded flex items-center gap-1 transition-colors"
              onClick={() => {
                setIsRegionOpen(!isRegionOpen);
                setIsHelpOpen(false);
                setIsSettingsOpen(false);
                setIsNotificationOpen(false);
                setIsProfileOpen(false);
              }}
              title="Select region"
            >
              <span>Ghana</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 10l5 5 5-5z" />
              </svg>
            </button>
            {/* Region Dropdown */}
            {isRegionOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-lg z-50">
                <div className="space-y-1 max-h-[400px] overflow-y-auto">
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
              
            )}
          </div>

          {/* User Profile */}
          <div className="relative">
            <button 
              className="hover:bg-blue-700 px-3 py-1.5 rounded flex items-center gap-2 transition-colors"
              onClick={() => {
                setIsProfileOpen(!isProfileOpen);
                setIsHelpOpen(false);
                setIsSettingsOpen(false);
                setIsNotificationOpen(false);
                setIsRegionOpen(false);
              }}
              title="User profile"
            >
              <div className="w-6 h-6 rounded-full bg-gray-300 text-gray-700 flex items-center justify-center text-xs font-semibold">
                U
              </div>
              <span className="text-sm">User</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 10l5 5 5-5z" />
              </svg>
            </button>
            {/* Profile Dropdown */}
            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white text-gray-800 rounded-lg shadow-lg z-50">
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
                  <button className="w-full text-left p-2 hover:bg-gray-100 rounded text-red-600">Sign Out</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Sliding Menu */}
      <div 
        className={`fixed top-0 left-0 h-full bg-slate-800 text-gray-200 z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ width: '280px' }}
      >
        {/* Menu Header */}
        <div className="bg-slate-900 p-4 border-b border-slate-700">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Menu</h2>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="text-xl hover:text-white"
              title="Close menu"
            >
              ×
            </button>
          </div>
          
          {/* Quick Access Tabs */}
          <div className="flex gap-2 text-sm">
            <button 
              className="px-3 py-1 bg-blue-600 rounded hover:bg-blue-700 transition-colors"
              onClick={() => console.log('Recently visited tab clicked')}
            >
              Recently visited
            </button>
            <button 
              className="px-3 py-1 hover:bg-slate-700 rounded transition-colors"
              onClick={() => console.log('Favorites tab clicked')}
            >
              Favorites
            </button>
          </div>
        </div>

        {/* Menu Content */}
        <div className="p-4">
          {/* Recently Visited Section */}
          <div className="mb-6">
            <h3 className="text-xs font-semibold text-gray-400 uppercase mb-3">Recently visited</h3>
            <div className="space-y-2">
              <MenuItem 
                title="AppFlow" 
                subtitle="Integrate apps and automate data flows"
                onClick={() => handleMenuItemClick('AppFlow')}
              />
              <MenuItem 
                title="Athena" 
                subtitle="Serverless interactive analytics service"
                onClick={() => handleMenuItemClick('Athena')}
              />
              <MenuItem 
                title="EC2" 
                subtitle="Virtual Servers in the Cloud"
                onClick={() => handleMenuItemClick('EC2')}
              />
              <MenuItem 
                title="Console Home" 
                subtitle="View resource insights, service shortcuts"
                onClick={() => handleMenuItemClick('Console Home')}
              />
              <MenuItem 
                title="Aurora and RDS" 
                subtitle="Managed Relational Database Service"
                onClick={() => handleMenuItemClick('Aurora and RDS')}
              />
            </div>
          </div>

          {/* All Services Section */}
          <div>
            <h3 className="text-xs font-semibold text-gray-400 uppercase mb-3">All services</h3>
            <div className="space-y-1">
              <CategoryItem title="Analytics" onClick={() => handleMenuItemClick('Analytics')} />
              <CategoryItem title="Application Integration" onClick={() => handleMenuItemClick('Application Integration')} />
              <CategoryItem title="Blockchain" onClick={() => handleMenuItemClick('Blockchain')} />
              <CategoryItem title="Business Applications" onClick={() => handleMenuItemClick('Business Applications')} />
              <CategoryItem title="Cloud Financial Management" onClick={() => handleMenuItemClick('Cloud Financial Management')} />
              <CategoryItem title="Compute" onClick={() => handleMenuItemClick('Compute')} />
              <CategoryItem title="Containers" onClick={() => handleMenuItemClick('Containers')} />
              <CategoryItem title="Customer Enablement" onClick={() => handleMenuItemClick('Customer Enablement')} />
              <CategoryItem title="Database" onClick={() => handleMenuItemClick('Database')} />
              <CategoryItem title="Developer Tools" onClick={() => handleMenuItemClick('Developer Tools')} />
              <CategoryItem title="End User Computing" onClick={() => handleMenuItemClick('End User Computing')} />
              <CategoryItem title="Front-end Web & Mobile" onClick={() => handleMenuItemClick('Front-end Web & Mobile')} />
              <CategoryItem title="Game Development" onClick={() => handleMenuItemClick('Game Development')} />
              <CategoryItem title="Internet of Things" onClick={() => handleMenuItemClick('Internet of Things')} />
              <CategoryItem title="Machine Learning" onClick={() => handleMenuItemClick('Machine Learning')} />
              <CategoryItem title="Management & Governance" onClick={() => handleMenuItemClick('Management & Governance')} />
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

function MenuItem({ title, subtitle, onClick }: { title: string; subtitle: string; onClick: () => void }) {
  return (
    <div 
      className="p-2 hover:bg-slate-700 rounded cursor-pointer transition-colors"
      onClick={onClick}
    >
      <div className="font-medium text-sm">{title}</div>
      <div className="text-xs text-gray-400">{subtitle}</div>
    </div>
  );
}

function CategoryItem({ title, onClick }: { title: string; onClick: () => void }) {
  return (
    <div 
      className="p-2 hover:bg-slate-700 rounded cursor-pointer text-sm transition-colors"
      onClick={onClick}
    >
      {title}
    </div>
  );
}

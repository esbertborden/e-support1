


export default function Header() {
  return (
    <header className="h-14 bg-blue-600 w-full text-gray-200 flex items-center px-4">
      {/* Left */}
      <div className="flex items-center gap-4">
        <button className="text-xl">☰</button>
        <img src="/Ecobank.png" alt="Logo" className="h-10 w-12" />
      </div>

      {/* Center */}
      <div className="flex-1 px-6 text-gray-900">
        <input
          type="text"
          placeholder="Search"
          className="w-full max-w-xl bg-white placeholder-gray-500 text-sm px-3 py-1.5 rounded-md outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>

      {/* Right */}
      <div className="flex items-center gap-4 text-sm">
        <button className="hover:text-white">Ghana</button>
        <button>🔔</button>
        <button className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center">
          U
        </button>
      </div>
    </header>
  );
}

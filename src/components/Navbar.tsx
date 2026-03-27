import { Home, TrendingUp, Search } from "lucide-react";
import { NavLink } from "react-router-dom";


export function Navbar() {

  const navItems = [
    { to: "/", icon: Home, label: "Home" },
    { to: "/trending", icon: TrendingUp, label: "Trending" },
    { to: "/search", icon: Search, label: "Search" },
  ];

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 px-4 py-2 bg-neutral-900/80 backdrop-blur-xl border border-neutral-800 rounded-full shadow-2xl flex items-center gap-1 md:gap-4">
      <div className="hidden md:block mr-2 border-r border-neutral-700 pr-4">
        <span className="text-lg font-black bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
          ANIMEX
        </span>
      </div>

      {navItems.map((item) => {
        const Icon = item.icon;

        return (
          <NavLink
            key={item.to}
            to={item.to}
            className={({isActive}) =>`flex items-center gap-2 px-3 py-1.5 rounded-full transition-all duration-300 ${
              isActive
                ? "bg-white text-black shadow-lg shadow-white/10"
                : "text-neutral-400 hover:text-white hover:bg-neutral-800"
            }`}
          >
            <Icon className="w-5 h-5" />
            <span className="hidden lg:inline text-sm font-semibold">
              {item.label}
            </span>
          </NavLink>
        );
      })}
    </nav>
  );
}
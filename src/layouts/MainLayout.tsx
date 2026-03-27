import { Bug, Search } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export const MainLayout = () => {
  return (
    <div className="min-h-screen pb-32">
      <header className="fixed top-0 left-0 right-0 z-40 px-6 py-4 flex items-center justify-between bg-black/50 backdrop-blur-md">
        <div className="cursor-pointer flex items-center gap-2">
          <div className="w-8 h-8 flex items-center justify-center">
            <Bug className="w-5 h-5 text-white" />
          </div>
          <NavLink to={"/"} className="text-xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-400">
            ANIMEX
          </NavLink>
        </div>

        <div className="flex items-center gap-4">
          <NavLink to={"/search"} className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <Search className="w-6 h-6" />
          </NavLink>
        </div>
      </header>
      <main className="container mx-auto  px-6 pt-32">
        <Outlet />
      </main>

      <Navbar />
    </div>
  );
};

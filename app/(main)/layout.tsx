'use client';

import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  
  return (
    <>
      <Navbar />
      <div className="flex relative pt-[46px]">
        {!isSidebarOpen && (
          <button className="md:hidden fixed top-1 left-18 z-50 p-2 text-white rounded-md" onClick={toggleSidebar}>
            <Menu size={22} />
          </button>
        )}

        <div className="hidden md:block w-[300px]">
          <Sidebar />
        </div>

        {isSidebarOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={toggleSidebar}>
            <div className="absolute left-0 top-12 h-full w-full bg-background" onClick={(e) => e.stopPropagation()}>
              <button className="absolute top-10 right-2 p-2 text-foreground" onClick={toggleSidebar}>
                <X size={24} />
              </button>
              <Sidebar onItemClick={toggleSidebar} />
            </div>
          </div>
        )}

        <div className="p-5 w-full">
          {children}
        </div>
      </div>
    </>
  );
};

export default MainLayout;

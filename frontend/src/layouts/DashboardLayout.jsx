import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import {
  FiHome,
  FiMap,
  FiAlertCircle,
  FiUser,
  FiLogOut,
  FiMenu,
  FiShield,
} from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();

  const navItems = [
    { name: 'Overview', path: '/dashboard', icon: <FiHome /> },
    { name: 'Live Map', path: '/dashboard/map', icon: <FiMap /> },
    {
      name: 'Emergency',
      path: '/dashboard/emergency',
      icon: <FiAlertCircle />,
    },
    { name: 'My Profile', path: '/dashboard/profile', icon: <FiUser /> },
  ];

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">

      {/* Mobile sidebar backdrop */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-20 bg-black/50 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-primary-900 text-white transform transition-transform duration-300 lg:translate-x-0 lg:static lg:inset-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Logo */}
        <div className="flex items-center justify-center h-16 bg-primary-950 border-b border-primary-800">
          <FiShield className="text-primary-500 text-2xl mr-2" />
          <span className="text-xl font-bold tracking-wider">
            SafeTour AI
          </span>
        </div>

        {/* Navigation */}
        <div className="p-4">
          <p className="text-xs text-primary-300 uppercase tracking-wider mb-4 mt-4 px-3">
            Navigation
          </p>

          <nav className="space-y-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-primary-600 text-white shadow-md'
                      : 'text-primary-100 hover:bg-primary-800 hover:text-white'
                  }`}
                >
                  <span className="text-xl mr-3">
                    {item.icon}
                  </span>

                  <span className="font-medium">
                    {item.name}
                  </span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">

        {/* Top Navbar */}
        <header className="h-16 bg-white shadow-sm flex items-center justify-between px-4 lg:px-8 z-10">

          {/* Mobile menu button */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden text-gray-500 hover:text-primary-600 focus:outline-none text-2xl"
          >
            <FiMenu />
          </button>

          {/* User section */}
          <div className="flex-1 flex justify-end items-center space-x-4">

            <div className="hidden sm:block text-right">
              <p className="text-sm font-semibold text-gray-900">
                {user?.name || 'Tourist'}
              </p>

              <p className="text-xs text-gray-500 capitalize">
                {user?.role || 'User'}
              </p>
            </div>

            {/* User avatar */}
            <div className="h-10 w-10 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-bold border border-primary-200">
              {user?.name ? user.name.charAt(0).toUpperCase() : 'T'}
            </div>

            {/* Logout */}
            <button
              onClick={logout}
              className="ml-4 text-gray-400 hover:text-red-500 transition-colors"
              title="Logout"
            >
              <FiLogOut className="text-xl" />
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-4 lg:p-8">
          <Outlet />
        </main>

      </div>
    </div>
  );
};

export default DashboardLayout;
import React from 'react';
import { User, LogOut, Shield, Menu, X } from 'lucide-react';
import { UserProfile } from '../types';
import BrandLogo from './BrandLogo';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'test', label: 'Take Career Test' },
    { id: 'careers', label: 'Explore Careers' },
    { id: 'contact', label: 'Contact Us' },
  ];

  // We keep the Admin Panel as a regular nav option or remove it? Let's keep it as an option or check if we should keep it for development, but since there's no sign in, we can just allow anyone to view it or hide it. Let's make it visible/available since they might want to test the institutional diagnostic console without a sign-in block! 
  navItems.push({ id: 'dashboard', label: 'Admin Panel' });

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setIsOpen(false);
  };

  return (
    <nav className="bg-white border-b border-brand-primary/10 sticky top-0 z-40 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => handleNavClick('home')}>
            <BrandLogo size="md" />
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2 rounded-lg font-display text-[11px] font-extrabold uppercase tracking-widest transition-all cursor-pointer ${
                  activeTab === item.id
                    ? 'bg-brand-primary text-white shadow-sm'
                    : 'text-brand-dark/70 hover:text-brand-primary hover:bg-brand-primary/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Auth & Profile Actions - REMOVED PERTAINING TO SIGN IN */}
          <div className="hidden md:block"></div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-brand-dark/70 hover:text-brand-primary hover:bg-brand-primary/5"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-brand-primary/10 px-4 pt-2 pb-4 space-y-2">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-4 py-2.5 rounded-lg font-display text-xs font-extrabold uppercase tracking-widest transition-colors ${
                activeTab === item.id
                  ? 'bg-brand-primary text-white'
                  : 'text-brand-dark/70 hover:bg-brand-primary/5 hover:text-brand-primary'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

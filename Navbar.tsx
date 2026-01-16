import { useState } from 'react';
import { Logo } from './Logo';
import { Button } from './ui/button';
import { ShoppingCart, Menu, X, Search, User } from 'lucide-react';

interface NavbarProps {
  cartCount?: number;
  onCartClick?: () => void;
}

export function Navbar({ cartCount = 0, onCartClick }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Shop', href: '#shop' },
    { name: 'About', href: '#about' },
    { name: 'Lookbook', href: '#lookbook' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FDFBF6]/98 backdrop-blur-md border-b border-[#72513C]/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#72513C] hover:text-[#5d4230] p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <div className="flex-1 flex justify-center md:justify-start">
            <Logo size="sm" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 flex-1 justify-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#72513C] hover:text-[#5d4230] transition-colors text-sm tracking-wide"
                style={{ fontWeight: 500 }}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4 flex-1 justify-end">
            <button className="hidden sm:block text-[#72513C] hover:text-[#5d4230] transition-colors p-2" aria-label="Search">
              <Search size={20} />
            </button>
            <button className="hidden sm:block text-[#72513C] hover:text-[#5d4230] transition-colors p-2" aria-label="Account">
              <User size={20} />
            </button>
            <button
              onClick={onCartClick}
              className="relative text-[#72513C] hover:text-[#5d4230] transition-colors p-2"
              aria-label="Shopping cart"
            >
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#E8B4BC] text-[#121212] text-xs rounded-full w-5 h-5 flex items-center justify-center" style={{ fontWeight: 600 }}>
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#72513C]/10 bg-[#FDFBF6]">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-[#72513C] hover:text-[#5d4230] transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
                style={{ fontWeight: 500 }}
              >
                {link.name}
              </a>
            ))}
            <button className="w-full text-left text-[#72513C] hover:text-[#5d4230] transition-colors py-2" style={{ fontWeight: 500 }}>
              Search
            </button>
            <button className="w-full text-left text-[#72513C] hover:text-[#5d4230] transition-colors py-2" style={{ fontWeight: 500 }}>
              Account
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
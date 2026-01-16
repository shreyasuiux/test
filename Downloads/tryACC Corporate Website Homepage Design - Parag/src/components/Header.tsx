import { Search, Menu, X, ChevronDown, Sun, Moon } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTheme } from './ThemeProvider';
import logoImage from 'figma:asset/8a8a0384f5b66c8aa4d8823a4ada592f7109677d.png';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/60 dark:bg-black/60 backdrop-blur-2xl z-50 border-b border-black/[0.08] dark:border-white/[0.08] transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto px-8 sm:px-12 lg:px-16">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2">
              <img 
                src={logoImage} 
                alt="Applied Cloud Computing" 
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <NavLink 
              to="/services" 
              className={({ isActive }) => 
                `group px-3 py-1.5 text-[13px] rounded-md transition-all flex items-center gap-1 ${
                  isActive 
                    ? 'text-black dark:text-white bg-black/[0.06] dark:bg-white/[0.06]' 
                    : 'text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white hover:bg-black/[0.06] dark:hover:bg-white/[0.06]'
                }`
              }
            >
              <span>Services</span>
            </NavLink>
            <NavLink 
              to="/products" 
              className={({ isActive }) => 
                `px-3 py-1.5 text-[13px] rounded-md transition-all ${
                  isActive 
                    ? 'text-black dark:text-white bg-black/[0.06] dark:bg-white/[0.06]' 
                    : 'text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white hover:bg-black/[0.06] dark:hover:bg-white/[0.06]'
                }`
              }
            >
              Products
            </NavLink>
            <NavLink 
              to="/case-studies" 
              className={({ isActive }) => 
                `px-3 py-1.5 text-[13px] rounded-md transition-all ${
                  isActive 
                    ? 'text-black dark:text-white bg-black/[0.06] dark:bg-white/[0.06]' 
                    : 'text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white hover:bg-black/[0.06] dark:hover:bg-white/[0.06]'
                }`
              }
            >
              Case Studies
            </NavLink>
            <NavLink 
              to="/company" 
              className={({ isActive }) => 
                `px-3 py-1.5 text-[13px] rounded-md transition-all ${
                  isActive 
                    ? 'text-black dark:text-white bg-black/[0.06] dark:bg-white/[0.06]' 
                    : 'text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white hover:bg-black/[0.06] dark:hover:bg-white/[0.06]'
                }`
              }
            >
              Company
            </NavLink>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2">
            <button className="hidden lg:flex items-center justify-center w-8 h-8 text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white hover:bg-black/[0.06] dark:hover:bg-white/[0.06] rounded-lg transition-all">
              <Search className="w-[18px] h-[18px]" />
            </button>
            
            {/* Theme Toggle Button */}
            <button 
              onClick={toggleTheme}
              className="flex items-center justify-center w-8 h-8 text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white hover:bg-black/[0.06] dark:hover:bg-white/[0.06] rounded-lg transition-all"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-[18px] h-[18px]" />
              ) : (
                <Moon className="w-[18px] h-[18px]" />
              )}
            </button>
            
            <div className="hidden lg:block w-px h-4 bg-black/10 dark:bg-white/10 mx-1" />
            
            <Link to="/contact" className="hidden lg:flex items-center gap-2 px-3 py-1.5 text-[13px] text-black dark:text-white bg-black/[0.06] dark:bg-white/[0.06] hover:bg-black/10 dark:hover:bg-white/10 border border-black/10 dark:border-white/10 rounded-lg transition-all">
              <span>Contact Sales</span>
            </Link>
            
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden flex items-center justify-center w-8 h-8 text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white hover:bg-black/[0.06] dark:hover:bg-white/[0.06] rounded-lg transition-all"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-black/[0.08] dark:border-white/[0.08] py-3">
            <nav className="flex flex-col gap-0.5">
              <NavLink 
                to="/services" 
                className={({ isActive }) => 
                  `px-3 py-2.5 text-[13px] rounded-lg transition-all ${
                    isActive 
                      ? 'text-black dark:text-white bg-black/[0.06] dark:bg-white/[0.06]' 
                      : 'text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white hover:bg-black/[0.06] dark:hover:bg-white/[0.06]'
                  }`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </NavLink>
              <NavLink 
                to="/products" 
                className={({ isActive }) => 
                  `px-3 py-2.5 text-[13px] rounded-lg transition-all ${
                    isActive 
                      ? 'text-black dark:text-white bg-black/[0.06] dark:bg-white/[0.06]' 
                      : 'text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white hover:bg-black/[0.06] dark:hover:bg-white/[0.06]'
                  }`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                Products
              </NavLink>
              <NavLink 
                to="/case-studies" 
                className={({ isActive }) => 
                  `px-3 py-2.5 text-[13px] rounded-lg transition-all ${
                    isActive 
                      ? 'text-black dark:text-white bg-black/[0.06] dark:bg-white/[0.06]' 
                      : 'text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white hover:bg-black/[0.06] dark:hover:bg-white/[0.06]'
                  }`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                Case Studies
              </NavLink>
              <NavLink 
                to="/company" 
                className={({ isActive }) => 
                  `px-3 py-2.5 text-[13px] rounded-lg transition-all ${
                    isActive 
                      ? 'text-black dark:text-white bg-black/[0.06] dark:bg-white/[0.06]' 
                      : 'text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white hover:bg-black/[0.06] dark:hover:bg-white/[0.06]'
                  }`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                Company
              </NavLink>
              <div className="h-px bg-black/[0.08] dark:bg-white/[0.08] my-2" />
              <NavLink 
                to="/contact" 
                className={({ isActive }) => 
                  `px-3 py-2.5 text-[13px] rounded-lg transition-all ${
                    isActive 
                      ? 'text-black dark:text-white bg-black/[0.06] dark:bg-white/[0.06]' 
                      : 'text-black dark:text-white hover:bg-black/[0.06] dark:hover:bg-white/[0.06]'
                  }`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Sales
              </NavLink>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
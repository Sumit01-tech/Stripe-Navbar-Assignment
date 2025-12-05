import { useState } from 'react';
import { Menu, X, ChevronRight, ChevronLeft } from 'lucide-react';
import { navbarItems, iconMap } from '@/data/navbarData';
import { ExternalLink } from 'lucide-react';

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSolutions, setShowSolutions] = useState(false);

  const solutionsItem = navbarItems.find(item => item.menu === 'Solutions');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setShowSolutions(false);
  };

  const openSolutions = () => {
    setShowSolutions(true);
  };

  const closeSolutions = () => {
    setShowSolutions(false);
  };

  return (
    <div className="lg:hidden">
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="p-2 text-primary-foreground hover:bg-primary-foreground/10 rounded-md transition-colors"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 top-[60px] bg-background z-50 overflow-hidden">
          {/* Main Menu */}
          <div 
            className={`absolute inset-0 transition-transform duration-300 ${
              showSolutions ? '-translate-x-full' : 'translate-x-0'
            }`}
          >
            <div className="flex flex-col h-full">
              <nav className="flex-1 overflow-y-auto py-4">
                <ul className="space-y-1 px-4">
                  {navbarItems.map((item) => (
                    <li key={item.menu}>
                      {item.sections ? (
                        <button
                          onClick={openSolutions}
                          className="flex items-center justify-between w-full px-4 py-3 text-base font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
                        >
                          {item.menu}
                          <ChevronRight size={20} className="text-muted-foreground" />
                        </button>
                      ) : (
                        <a
                          href={item.url}
                          className="block px-4 py-3 text-base font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
                        >
                          {item.menu}
                        </a>
                      )}
                    </li>
                  ))}
                  <li>
                    <a
                      href="/signin"
                      className="block px-4 py-3 text-base font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
                    >
                      Sign in
                    </a>
                  </li>
                </ul>
              </nav>
              
              {/* CTA Buttons */}
              <div className="p-4 border-t border-border space-y-3">
                <a
                  href="/start"
                  className="block w-full py-3 px-4 text-center text-sm font-semibold text-primary-foreground bg-primary rounded-full hover:opacity-90 transition-opacity"
                >
                  Start now
                </a>
                <a
                  href="/contact"
                  className="block w-full py-3 px-4 text-center text-sm font-semibold text-foreground bg-muted rounded-full hover:bg-muted/80 transition-colors"
                >
                  Contact sales
                </a>
              </div>
            </div>
          </div>

          {/* Solutions Sub-menu */}
          <div 
            className={`absolute inset-0 bg-background transition-transform duration-300 ${
              showSolutions ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className="flex flex-col h-full">
              {/* Back Button */}
              <button
                onClick={closeSolutions}
                className="flex items-center gap-2 px-4 py-4 text-primary font-medium border-b border-border"
              >
                <ChevronLeft size={20} />
                Back
              </button>

              {/* Solutions Content */}
              <div className="flex-1 overflow-y-auto py-4 px-4">
                {solutionsItem?.sections?.map((section) => (
                  <div key={section.title} className="mb-6">
                    <h3 className="text-xs font-semibold tracking-wider text-menu-section uppercase mb-3 px-2">
                      {section.title}
                    </h3>
                    <ul className="space-y-1">
                      {section.items.map((item) => {
                        const Icon = iconMap[item.icon];
                        return (
                          <li key={item.label}>
                            <a
                              href={item.url}
                              target={item.external ? "_blank" : undefined}
                              rel={item.external ? "noopener noreferrer" : undefined}
                              className="flex items-center gap-3 px-2 py-2.5 rounded-lg hover:bg-muted transition-colors"
                            >
                              {Icon && (
                                <span className="text-muted-foreground">
                                  <Icon size={18} strokeWidth={1.75} />
                                </span>
                              )}
                              <span className="text-sm font-medium text-foreground">
                                {item.label}
                              </span>
                              {item.external && (
                                <ExternalLink size={12} className="text-muted-foreground ml-auto" />
                              )}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="p-4 border-t border-border space-y-3">
                <a
                  href="/start"
                  className="block w-full py-3 px-4 text-center text-sm font-semibold text-primary-foreground bg-primary rounded-full hover:opacity-90 transition-opacity"
                >
                  Start now
                </a>
                <a
                  href="/contact"
                  className="block w-full py-3 px-4 text-center text-sm font-semibold text-foreground bg-muted rounded-full hover:bg-muted/80 transition-colors"
                >
                  Contact sales
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

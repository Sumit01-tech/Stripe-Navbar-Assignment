import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { navbarItems } from '@/data/navbarData';
import { SolutionsMegaMenu } from './SolutionsMegaMenu';

export const DesktopNav = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (menu: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <nav ref={navRef} className="hidden lg:flex items-center gap-1">
      {navbarItems.map((item) => {
        const hasDropdown = !!item.sections;
        const isActive = activeMenu === item.menu;

        return (
          <div
            key={item.menu}
            className="relative"
            onMouseEnter={() => hasDropdown && handleMouseEnter(item.menu)}
            onMouseLeave={handleMouseLeave}
          >
            {hasDropdown ? (
              <button
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-primary-foreground/90 hover:text-primary-foreground transition-colors rounded-md hover:bg-primary-foreground/10"
                aria-expanded={isActive}
                aria-haspopup="true"
              >
                {item.menu}
                <ChevronDown 
                  size={14} 
                  className={`transition-transform duration-200 ${isActive ? 'rotate-180' : ''}`}
                />
              </button>
            ) : (
              <a
                href={item.url}
                className="flex items-center px-4 py-2 text-sm font-medium text-primary-foreground/90 hover:text-primary-foreground transition-colors rounded-md hover:bg-primary-foreground/10"
              >
                {item.menu}
              </a>
            )}

            {item.sections && (
              <SolutionsMegaMenu 
                sections={item.sections} 
                isOpen={isActive} 
              />
            )}
          </div>
        );
      })}
    </nav>
  );
};

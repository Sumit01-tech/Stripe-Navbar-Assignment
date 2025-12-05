import { DesktopNav } from './DesktopNav';
import { MobileNav } from './MobileNav';

export const Navbar = () => {
  return (
    <header className="navbar-gradient sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[60px]">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary-foreground tracking-tight">
              Logo
            </span>
          </a>

          {/* Desktop Navigation */}
          <DesktopNav />

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="/signin"
              className="px-4 py-2 text-sm font-medium text-primary-foreground/90 hover:text-primary-foreground transition-colors"
            >
              Sign in
            </a>
            <a
              href="/contact"
              className="px-4 py-2 text-sm font-medium text-primary-foreground/90 hover:text-primary-foreground transition-colors flex items-center gap-1"
            >
              Contact sales
              <span className="text-xs">→</span>
            </a>
          </div>

          {/* Mobile Navigation */}
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

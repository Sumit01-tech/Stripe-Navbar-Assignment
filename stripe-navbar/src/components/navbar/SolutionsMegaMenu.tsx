import type { NavSection } from '@/data/navbarData';
import { MegaMenuSection } from './MegaMenuSection';

interface SolutionsMegaMenuProps {
  sections: NavSection[];
  isOpen: boolean;
}

export const SolutionsMegaMenu = ({ sections, isOpen }: SolutionsMegaMenuProps) => {
  if (!isOpen) return null;

  return (
    <div
      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-background rounded-xl mega-menu-shadow border border-border/50 animate-dropdown-enter z-50"
      style={{ minWidth: 'max-content' }}
    >
      {/* Arrow pointer */}
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-background border-l border-t border-border/50 rotate-45" />

      <div className="relative bg-background rounded-xl overflow-hidden">
        <div className="px-6 py-2 divide-y divide-border/50">
          {sections.map((section) => (
            <MegaMenuSection key={section.title} section={section} />
          ))}
        </div>
      </div>
    </div>
  );
};

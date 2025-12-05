import type { NavSection } from '@/data/navbarData';
import { MegaMenuItem } from './MegaMenuItem';

interface MegaMenuSectionProps {
  section: NavSection;
}

export const MegaMenuSection = ({ section }: MegaMenuSectionProps) => {
  return (
    <div className="py-4">
      <h3 className="text-xs font-semibold tracking-wider text-menu-section uppercase mb-3 px-3">
        {section.title}
      </h3>
      <div className="grid grid-cols-2 gap-x-4 gap-y-0.5">
        {section.items.map((item) => (
          <MegaMenuItem key={item.label} item={item} />
        ))}
      </div>
    </div>
  );
};

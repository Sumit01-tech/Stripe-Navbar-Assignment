import { ExternalLink } from "lucide-react";
import { iconMap } from "@/data/navbarData";
import type { NavItem } from "@/data/navbarData";

interface MegaMenuItemProps {
  item: NavItem;
}

export const MegaMenuItem = ({ item }: MegaMenuItemProps) => {
  const Icon = iconMap[item.icon];

  return (
    <a
      href={item.url}
      target={item.external ? "_blank" : undefined}
      rel={item.external ? "noopener noreferrer" : undefined}
      className="flex items-center gap-3 px-3 py-2.5 rounded-md transition-colors duration-150 hover:bg-menu-hover group"
    >
      {Icon && (
        <span className="flex-shrink-0 text-muted-foreground group-hover:text-primary transition-colors">
          <Icon size={18} strokeWidth={1.75} />
        </span>
      )}
      <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
        {item.label}
      </span>
      {item.external && (
        <ExternalLink size={12} className="text-muted-foreground ml-auto" />
      )}
    </a>
  );
};

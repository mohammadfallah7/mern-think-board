import { LucideArrowLeft } from "lucide-react";
import type { FC, PropsWithChildren } from "react";
import { Link } from "react-router";

interface TopBarProps extends PropsWithChildren {
  title: string;
  href: string;
}

export const TopBar: FC<TopBarProps> = ({ title, href, children }) => {
  return (
    <div className="flex justify-between items-center">
      <Link to={href} className="flex gap-2 items-center">
        <LucideArrowLeft className="size-5" />
        {title}
      </Link>
      {children}
    </div>
  );
};

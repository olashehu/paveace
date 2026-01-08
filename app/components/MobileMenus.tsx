import { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import { Phone } from "lucide-react";

type MenuProps = {
  navLinks: { href: string; label: string }[];
  phoneNumber: string;
  setIsMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
  onClick: () => void;
};

const MobileMenus = ({
  navLinks,
  phoneNumber,
  setIsMobileMenuOpen,
  onClick,
}: MenuProps) => {
  return (
    <div className="border-t border-border bg-white p-6 md:hidden">
      <nav className="flex flex-col gap-4">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href={`tel:${phoneNumber}`}
          aria-label={`Call ${phoneNumber}`}
          title={`Call ${phoneNumber}`}
          className="flex items-center gap-2 text-sm font-medium text-foreground"
        >
          <Phone className="h-4 w-4" />
          <span>08102612957</span>
        </Link>
        <Link
          href="#contact"
          onClick={onClick}
          className="mt-2 w-full inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-lg font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-9 px-4 gradient-primary"
        >
          Contact us
        </Link>
      </nav>
    </div>
  );
};

export default MobileMenus;

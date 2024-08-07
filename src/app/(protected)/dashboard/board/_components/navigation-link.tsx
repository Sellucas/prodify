import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  children: React.ReactNode;
  name: string;
  href: string;
  isOpen: boolean;
}

const NavigationLink = ({ children, name, href, isOpen }: Props) => {
  const pathname = usePathname();
  const isActive = pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={`flex p-1 rounded-[8px] cursor-pointer stroke-[0.75] text-muted-foreground border-2 border-background2 place-items-center gap-3 transition-colors duration-100 ${
        isActive
          ? "text-white bg-primary-foreground border-secondary"
          : "hover:text-white hover:bg-primary-foreground hover:border-secondary"
      }`}
    >
      {children}
      <p
        className={`overflow-clip whitespace-nowrap text-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      >
        {name}
      </p>
    </Link>
  );
};

export default NavigationLink;

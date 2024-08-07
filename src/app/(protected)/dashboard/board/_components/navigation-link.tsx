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
      className={`flex cursor-pointer place-items-center gap-3 rounded-[8px] border-2 border-background2 stroke-[0.75] p-1 text-muted-foreground transition-colors duration-100 ${
        isActive
          ? "border-secondary bg-primary-foreground text-white"
          : "hover:border-secondary hover:bg-primary-foreground hover:text-white"
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

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  children: React.ReactNode;
  name: string;
  href: string;
}

const NavigationLink = ({ children, name, href }: Props) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`flex p-1 rounded-[8px] cursor-pointer stroke-[0.75] text-muted-foreground border-2 border-transparent place-items-center gap-3 transition-colors duration-100 ${
        isActive
          ? "text-white bg-primary-foreground border-secondary"
          : "hover:text-white hover:bg-primary-foreground hover:border-secondary"
      }`}
    >
      {children}
      <p className="overflow-clip whitespace-nowrap text-sm">{name}</p>
    </Link>
  );
};

export default NavigationLink;

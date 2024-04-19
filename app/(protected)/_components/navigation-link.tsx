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
      className={`flex p-1 rounded-xl cursor-pointer stroke-[0.75] font-medium ${
        isActive
          ? "text-blue-600 bg-blue-100"
          : "hover:text-blue-600 hover:bg-blue-100"
      } place-items-center gap-3 transition-colors duration-100`}
    >
      {children}
      <p className="overflow-clip whitespace-nowrap text-sm">{name}</p>
    </Link>
  );
};

export default NavigationLink;

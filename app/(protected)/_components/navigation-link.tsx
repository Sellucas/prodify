import Link from "next/link";

interface Props {
  children: React.ReactNode;
  name: string;
  href: string;
}

const NavigationLink = ({ children, name, href }: Props) => {
  return (
    <Link
      href={href}
      className="flex p-1 rounded-xl cursor-pointer stroke-[0.75] font-medium hover:stroke-gray-900 stroke-neutral-400 text-gray-700 hover:text-blue-600 place-items-center gap-3 hover:bg-blue-100 transition-colors duration-100"
    >
      {children}
      <p className="overflow-clip whitespace-nowrap">{name}</p>
    </Link>
  );
};

export default NavigationLink;

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
      className="flex p-1 rounded cursor-pointer stroke-[0.75] hover:stroke-gray-900 stroke-neutral-400 text-black hover:text-blue-900 place-items-center gap-3 hover:bg-blue-200 transition-colors duration-100"
    >
      {children}
      <p className="text-inherit font-poppins overflow-clip whitespace-nowrap tracking-wide">
        {name}
      </p>
    </Link>
  );
};

export default NavigationLink;

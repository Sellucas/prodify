import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  children: React.ReactNode;
  name: string;
  href: string;
}

const NavigationLink = ({ children, name, href }: Props) => {
  const pathname = usePathname();
  const isActive = pathname.startsWith(href);

  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href={href}
            className={`flex cursor-pointer items-center size-11 justify-center border-2 border-background2 text-white transition-colors ${
              isActive
                ? "border-secondary bg-primary-foreground"
                : "hover:border-secondary hover:bg-primary-foreground"
            }`}
          >
            {children}
          </Link>
        </TooltipTrigger>
        <TooltipContent className="ml-2 bg-primary-foreground" side="right">
          <p>{name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default NavigationLink;

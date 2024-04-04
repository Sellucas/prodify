import { Board } from "@/components/dashboard/board";

const BoardLayout = ({ children }: { children: React.ReactNode }) => {
  return <Board>{children}</Board>;
};

export default BoardLayout;

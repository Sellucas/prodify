import { Board } from "@/app/(protected)/_components/board";

const BoardLayout = ({ children }: { children: React.ReactNode }) => {
  return <Board>{children}</Board>;
};

export default BoardLayout;

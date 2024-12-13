import { FC, ReactNode } from "react";

interface ILayout {
  children: ReactNode;
}

export const Layout: FC<ILayout> = ({ children }) => {
  return (
    <div className="flex gap-8 h-screen  p-6 rounded-md [&>*:first-child]:basis-2/6 max-w-[90rem] 2xl:mx-auto [&>*:last-child]:basis-4/6 w-full">
      {children}
    </div>
  );
};

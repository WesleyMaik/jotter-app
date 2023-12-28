import clsx from "clsx";
import { HTMLAttributes } from "react";
import { Menu } from "react-feather";

export interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
}

function Header({ title = "", ...props }: HeaderProps) {
  return (
    <header
      {...props}
      className={clsx(
        "w-full h-10 bg-zinc-100 dark:bg-zinc-800 flex items-center justify-between gap-4 px-4",
        props.className
      )}
    >
      <div>
        <p>{title}</p>
      </div>
      <button
        title="Menu"
        type="button"
        className="border-none outline-none bg-transparent"
      >
        <Menu />
      </button>
    </header>
  );
}

export default Header;

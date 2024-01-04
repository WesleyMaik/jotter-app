"use client";

import Dropdown from "@/components/Menu/Dropdown";
import clsx from "clsx";
import { HTMLAttributes } from "react";

export interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Text to appears in Header
   */
  title?: string;
}

function Header({ title = "", ...props }: HeaderProps) {
  return (
    <header
      {...props}
      className={clsx(
        "w-full h-10 flex items-center justify-between gap-4 px-4",
        props.className
      )}
    >
      <div>
        <p>{title}</p>
      </div>
      <Dropdown
        items={[
          {
            label: "Item 1",
          },
        ]}
      />
    </header>
  );
}

export default Header;

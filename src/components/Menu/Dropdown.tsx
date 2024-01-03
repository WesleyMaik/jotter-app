"use client";

import { useEffect, useRef, useState } from "react";
import { Menu as MenuIcon } from "react-feather";
import { Item } from "./props.types";
import MenuItem from "./MenuItem";

import setElementInScreen from "@/utils/setElementInScreen";
import useClickOutside from "@/hooks/useClickOutside";

interface DropdownProps {
  /*
   *  Text or Element to trigger dropdown menu.
   */
  label?: string;
  /*
   * Items to appear inside of dropdown menu.
   */
  items: Item[];
}

function Dropdown({ items, label }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsOpen((state) => !state);
  const closeMenu = () => setIsOpen(false);

  useClickOutside({
    ref: menuRef,
    callback: closeMenu,
  });

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    setElementInScreen(menuRef.current);
  }, [isOpen]);

  return (
    <div
      id="dropdown-menu"
      className="flex justify-center items-center flex-col relative"
    >
      <button
        type="button"
        aria-label="Choose a option"
        aria-haspopup="menu"
        className="active:scale-[0.95] transition-[scale]"
        onClick={toggleMenu}
      >
        {label ? label : <MenuIcon />}
      </button>
      {isOpen ? (
        <div
          id="menu"
          ref={menuRef}
          className="absolute top-[100%] bottom-auto bg-zinc-100 dark:bg-zinc-900 p-4 rounded-lg"
        >
          {items?.map((item, key) => (
            <MenuItem {...item} key={key} />
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default Dropdown;

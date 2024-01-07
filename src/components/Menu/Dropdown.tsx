"use client";

import { useEffect, useRef, useState } from "react";
import { HamburgerMenuIcon as MenuIcon } from "@radix-ui/react-icons";
import { Item } from "./props.types";
import MenuItem from "./MenuItem";

import setElementInScreen from "@/utils/setElementInScreen";
import useClickOutside from "@/hooks/useClickOutside";
import clsx from "clsx";

interface DropdownProps {
	/*
	 *  Text or Element to trigger dropdown menu.
	 */
	label?: string;
	/*
	 * Items to appear inside of dropdown menu.
	 */
	items: Item[];
	/*
	 * Trigger's class name.
	 */
	triggerClassName?: string;
	/*
	 * Menu Container's class name.
	 */
	menuClassName?: string;
	/*
	 * Items's class name.
	 */
	itemClassName?: string;
}

function Dropdown({
	items,
	label,
	triggerClassName,
	menuClassName,
	itemClassName,
}: DropdownProps) {
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
				className={clsx(
					"active:scale-[0.95] transition-[scale]",
					triggerClassName
				)}
				onClick={toggleMenu}
			>
				{label ? label : <MenuIcon />}
			</button>
			{isOpen ? (
				<div
					id="menu"
					ref={menuRef}
					className={clsx(
						"absolute top-[100%] bottom-auto bg-zinc-100 dark:bg-zinc-900 p-4 rounded-lg shadow-lg",
						menuClassName
					)}
				>
					{items?.map((item, key) => (
						<MenuItem {...item} key={key} itemClassName={itemClassName} />
					))}
				</div>
			) : null}
		</div>
	);
}

export default Dropdown;

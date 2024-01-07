import clsx from "clsx";
import { Item } from "./props.types";

type MenuItemProps = Item & {
	itemClassName?: string;
};

function MenuItem({ label, action, itemClassName }: MenuItemProps) {
	const className = clsx(
		"w-full text-nowrap hover:bg-zinc-200 dark:hover:bg-zinc-700 px-2 rounded-sm cursor-pointer select-none active:scale-[0.95] transition-[scale]",
		itemClassName
	);

	const props = {
		className,
		role: "menuitem",
		children: label,
	};

	if (!action) {
		return <p {...props} />;
	}

	if (typeof action == "object") {
		return <a {...props} href={action.url} />;
	}

	return <button {...props} type="button" onClick={action} />;
}

export default MenuItem;

import { Item } from "./props.types";

type MenuItemProps = Item;

function MenuItem({ label, action }: MenuItemProps) {
  const className =
    "w-full text-nowrap hover:bg-zinc-300 dark:hover:bg-zinc-800 px-2 rounded-sm cursor-pointer select-none active:scale-[0.95] transition-[scale]";

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

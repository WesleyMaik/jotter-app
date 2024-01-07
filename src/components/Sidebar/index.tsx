import { GearIcon, PersonIcon } from "@radix-ui/react-icons";

function Sidebar() {
	const borderedStyle =
		"w-full flex items-center gap-2 border border-zinc-300 dark:border-zinc-500 rounded-md p-4 hover:bg-zinc-200 dark:hover:bg-zinc-700 cursor-pointer transition ease-linear select-none";

	return (
		<div className="h-full flex flex-col gap-2 bg-zinc-100 dark:bg-zinc-800 p-4">
			<div id="profile">
				<button type="button" className={borderedStyle}>
					<GearIcon />
					<span>Guest</span>
				</button>
			</div>
			<div id="notes" className={borderedStyle}></div>
			<div id="settings" className="mt-auto">
				<button type="button" className={borderedStyle}>
					<PersonIcon />
					<span>Settings</span>
				</button>
			</div>
		</div>
	);
}

export default Sidebar;

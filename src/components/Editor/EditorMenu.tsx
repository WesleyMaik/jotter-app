import { Editor, BubbleMenu } from "@tiptap/react";
import Dropdown from "@/components/Menu/Dropdown";
import {
	FontBoldIcon,
	FontItalicIcon,
	CodeIcon,
	StrikethroughIcon,
	QuoteIcon,
} from "@radix-ui/react-icons";

interface EditorMenuProps {
	editor: Editor;
}

type FormatOptions =
	| "bold"
	| "italic"
	| "quote"
	| "code"
	| "strike"
	| "heading1"
	| "heading2"
	| "heading3"
	| "heading4"
	| "heading5"
	| "heading6"
	| "paragraph";

function EditorMenu({ editor }: EditorMenuProps) {
	const format = (option: FormatOptions) => {
		const chain = editor.chain();
		const toggleOptions = {
			bold: chain.toggleBold,
			italic: chain.toggleItalic,
			quote: chain.toggleBlockquote,
			code: chain.toggleCode,
			strike: chain.toggleStrike,
			heading1: () => chain.toggleHeading({ level: 1 }),
			heading2: () => chain.toggleHeading({ level: 2 }),
			heading3: () => chain.toggleHeading({ level: 3 }),
			heading4: () => chain.toggleHeading({ level: 4 }),
			heading5: () => chain.toggleHeading({ level: 5 }),
			heading6: () => chain.toggleHeading({ level: 6 }),
			paragraph: chain.setParagraph,
		};

		return toggleOptions[option]().run;
	};

	const buttonOptions = [
		{ title: "Bold", Icon: FontBoldIcon, onClick: format("bold") },
		{ title: "Italic", Icon: FontItalicIcon, onClick: format("italic") },
		{ title: "Quote", Icon: QuoteIcon, onClick: format("quote") },
		{ title: "Strike", Icon: StrikethroughIcon, onClick: format("strike") },
		{ title: "Code", Icon: CodeIcon, onClick: format("code") },
	];

	const dropdownItems = [
		{ label: "Heading 1", action: format("heading1") },
		{ label: "Heading 2", action: format("heading2") },
		{ label: "Heading 4", action: format("heading4") },
		{ label: "Heading 5", action: format("heading5") },
		{ label: "Heading 6", action: format("heading6") },
		{ label: "Paragraph", action: format("paragraph") },
	];

	return (
		<BubbleMenu
			editor={editor}
			className="p-1 bg-zinc-100 dark:bg-zinc-900 shadow-lg rounded-md overflow-visible flex"
		>
			<Dropdown
				label="Heading..."
				triggerClassName="p-1 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-md"
				itemClassName="text-sm"
				items={dropdownItems}
			/>
			{buttonOptions.map(({ Icon, onClick, title }, key) => (
				<button type="button" title={title} onClick={onClick} key={key}>
					{Icon ? (
						<Icon className="w-8 h-8 p-2 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-md" />
					) : null}
				</button>
			))}
		</BubbleMenu>
	);
}

export default EditorMenu;

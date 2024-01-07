import { useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import EditorMenu from "./EditorMenu";

interface EditorProps {
	isNew?: boolean;
	title?: string;
}

function Editor({ isNew, title = "Untitled" }: EditorProps) {
	const [noteTitle, setNoteTitle] = useState(isNew ? "Untitled" : title);

	const editor = useEditor({
		extensions: [StarterKit],
		editorProps: {
			attributes: {
				class: "outline-none min-h-screen",
			},
		},
	});

	return (
		<section className="h-full min-h-screen">
			<input
				type="text"
				name="title"
				id="title"
				placeholder="Title"
				className="w-full border-none outline-none text-4xl font-bold "
				value={noteTitle}
				onChange={(e) => setNoteTitle(e.target.value)}
				spellCheck={false}
			/>
			<hr className="mt-4 mb-4" />
			<EditorContent editor={editor} />
			{editor && <EditorMenu editor={editor} />}
		</section>
	);
}

export default Editor;

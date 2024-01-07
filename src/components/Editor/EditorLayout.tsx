"use client";

import { useState } from "react";
import { Header } from "@/components/Layout";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import Sidebar from "@/components/Sidebar";
import Editor from ".";

import clsx from "clsx";

interface EditorLayoutProps {
	/**
	 * If editor is a new note or not.
	 */
	isNew: boolean;
	/**
	 * Editor is full width or compact.
	 */
	fullWidth?: boolean;
}

function EditorLayout({ isNew, fullWidth }: EditorLayoutProps) {
	const [isFullWidth, setIsFullWidth] = useState(fullWidth);

	return (
		<PanelGroup autoSaveId="painel" direction="horizontal">
			<Panel minSize={12} maxSize={40} defaultSize={20}>
				<Sidebar />
			</Panel>
			<PanelResizeHandle className="border border-zinc-200 dark:border-zinc-700" />
			<Panel>
				<div className="w-full flex flex-col">
					<Header />
					<div
						className={clsx(
							"w-full h-full min-h-screen m-auto overflow-y-auto",
							isFullWidth ? "max-w-full" : "max-w-[720px]"
						)}
					>
						<Editor isNew={isNew} />
					</div>
				</div>
			</Panel>
		</PanelGroup>
	);
}

export default EditorLayout;

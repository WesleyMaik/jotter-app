"use client";

import { Header } from "@/components/Layout";
import Sidebar from "@/components/Sidebar";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-between">
      <PanelGroup autoSaveId="painel" direction="horizontal">
        <Panel minSize={12} maxSize={40} defaultSize={20}>
          <Sidebar />
        </Panel>
        <PanelResizeHandle className="border border-zinc-200 dark:border-zinc-700" />
        <Panel>
          <div className="w-full flex flex-col">
            <Header />
          </div>
        </Panel>
      </PanelGroup>
    </main>
  );
}

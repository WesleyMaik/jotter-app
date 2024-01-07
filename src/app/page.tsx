import dynamic from "next/dynamic";

const EditorLayout = dynamic(() => import("@/components/Editor/EditorLayout"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-between">
      <EditorLayout isNew={true} />
    </main>
  );
}

import dynamic from "next/dynamic";

const EditorLayout = dynamic(() => import("@/components/Editor/EditorLayout"), {
  ssr: false,
});

interface PageProps {
  params: Params;
  searchParams: SearchParams;
}

type Params = {
  user: string;
  id: string;
};

type SearchParams = {
  [key: string]: string | string[] | undefined;
};

export default function Note({ params }: PageProps) {
  const { user, id } = params;

  return (
    <main className="flex h-screen flex-col items-center justify-between">
      <EditorLayout isNew={false} />
    </main>
  );
}

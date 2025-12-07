// app/(pages)/storyvisualizer/[storyId]/[nodeId]/page.jsx
import { db } from "@/db";
import { Histoires, Nodes, Branches } from "@/db/schemas/schema";
import { and, eq, inArray } from "drizzle-orm";
import { notFound } from "next/navigation";
import StoryVisualizerPage from "../../../../_components/StoryVisualizerPage";
import AudioProvider from "../../../../_components/AudioProvider"

export default async function NodeView({ params }) {
  const { storyId, nodeId } = await params;

  const story = await db.query.Histoires.findFirst({
    where: eq(Histoires.id, storyId),
    where: eq(Histoires.id, storyId),
  });
  if (!story || !story.is_published) return notFound();

  const node = await db
    .select()
    .from(Nodes)
    .where(and(eq(Nodes.histoire_id, storyId), eq(Nodes.id, nodeId)))
    .limit(1);
  if (!node.length) return notFound();

  const edges = await db
    .select({
      id: Branches.id,
      source: Branches.source,
      target: Branches.target,
      texte: Branches.texte,
      type: Branches.type,
      history_key: Branches.history_key,
    })
    .from(Branches)
    .where(eq(Branches.source, nodeId));

  const current = node[0];

  // Pass data as props to Client Component
  return (
    <div>
      <StoryVisualizerPage
        story={story}
        current={current}
        edges={edges}
        storyId={storyId}
      />
      <AudioProvider />
    </div>
  );
}

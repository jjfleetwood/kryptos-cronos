import StageContainer from "@/components/StageContainer";

export default async function StagePage({
  params,
}: {
  params: Promise<{ stageId: string }>;
}) {
  const { stageId } = await params;
  return <StageContainer stageId={stageId} />;
}

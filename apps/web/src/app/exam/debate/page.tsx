import ExamRunner from "@/components/ExamRunner";

export default function DebateExamPage() {
  return (
    <ExamRunner
      mode="debate"
      title="Debate Mastery Exam"
      subtitle="Drawn from all 8 debate domains · randomized every attempt"
      backHref="/debate"
      accentHex="#a78bfa"
      accentText="text-purple-400"
      accentBtn="bg-purple-500 hover:bg-purple-400"
      accentBorder="border-purple-500/40"
    />
  );
}

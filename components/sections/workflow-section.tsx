import { ReactNode } from "react";
import SquaresScatterToCard from "@/components/graphs/squares-scatter-to-card";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { SectionHeader } from "../layout/section-header";
import { StepCards } from "../cards/steps-card";

const STEPS = [
  { number: 1, title: "AI Request", description: "AI agents query ADXC when completing tasks inside workflows." },
  { number: 2, title: "Orchestration", description: "ADXC's Agentic Orchestrator understands the question context, breaks it into sub-tasks and identifies the most relevant data to answer it." },
  { number: 3, title: "Abstract Answer", description: "The customer sees an abstract of the answer and price." },
  { number: 4, title: "Full Answer", description: "The user approves and ADXC pulls only the relevant data to answer the question." },
]


export type WorkflowStep = {
  number: number;
  title: string;
  description: string;
};

type WorkflowSectionProps = {
  title: ReactNode;
  description?: ReactNode;
  steps: WorkflowStep[];
  footer?: ReactNode;
};

export default function WorkflowSection({
  title,
  description,
  steps,
  footer,
}: WorkflowSectionProps) {
  return (
    <Section size="lg" className="relative">
      <Container size="lg" className="relative z-10">
        <SectionHeader
          title={title}
          description={description}
          align="center"
          size="md"
        />

        <div className="flex flex-col items-start gap-6 xl:flex-row">
          <SquaresScatterToCard />

          <StepCards steps={STEPS} />

        </div>

      </Container>
    </Section>
  );
}

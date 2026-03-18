import { HeroSection } from "@/components/sections/hero-section";
import { SMEsWantYourData } from "@/components/sections/smes-want-your-data";
import WorkflowSection, { WorkflowStep } from "@/components/sections/workflow-section";
import { FooterCtaSection } from "@/components/sections/footer-cta-section";
import { WhyNowSection } from "@/components/sections/why-now-section";
import { AIAgentsSection } from "@/components/sections/ai-agents-section";
import { MiroSection } from "@/components/sections/miro-section";
import CalculatorDataProviders from "@/components/sections/calculator-data-providers";
import { DataProviderValuePropsSection } from "@/components/sections/data-provider-value-props-section";
import { DataNeedSection } from "@/components/sections/data-need-section";

const steps: WorkflowStep[] = [
    { number: 1, title: "AI Request", description: "AI agents query ADXC when completing tasks inside workflows." },
    { number: 2, title: "Orchestration", description: "ADXC's Agentic Orchestrator understands the question context, breaks it into sub-tasks and identifies the most relevant data to answer it." },
    { number: 3, title: "Abstract Answer", description: "The customer sees an abstract of the answer and price." },
    { number: 4, title: "Full Answer", description: "The user approves and ADXC pulls only the relevant data to answer the question." },
];

export default function HomePage() {

    return (
        <>
            <HeroSection />

            <SMEsWantYourData />

            <DataNeedSection />

            <WhyNowSection />

            <AIAgentsSection />

            <WorkflowSection
                title="ADXC unlocks this SME market for you"
                description="ADXC is the data exchange connecting premium marketing data providers and SMEs via AI agents, on a pay-per-use model."
                steps={steps}
            />

            <DataProviderValuePropsSection />

            <MiroSection />

            <CalculatorDataProviders />

            <FooterCtaSection />
        </>
    );
}

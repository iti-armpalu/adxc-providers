import { HeroSection } from "@/components/hero-section";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { WhyNowSection } from "../(app)/data-providers/_components/why-now-section";
import { SMEsWantYourData } from "@/components/smes-want-your-data";
import { AIAgentsSection } from "../(app)/data-providers/_components/ai-agents-section";
import { MiroSection } from "../(app)/data-providers/_components/miro-section";
import CalculatorDataProviders from "../(app)/data-providers/_components/calculator-data-providers";
import WorkflowSection, { WorkflowStep } from "@/components/sections/workflow-section";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/sections/section-header";
import { Mail } from "lucide-react";
import { useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ProviderComparisonSection } from "@/components/provider-comparison-section";

const steps: WorkflowStep[] = [
    { number: 1, title: "AI Request", description: "AI agents query ADXC when completing tasks inside workflows." },
    { number: 2, title: "Orchestration", description: "ADXC's Agentic Orchestrator understands the question context, breaks it into sub-tasks and identifies the most relevant data to answer it." },
    { number: 3, title: "Abstract Answer", description: "The customer sees an abstract of the answer and price." },
    { number: 4, title: "Full Answer", description: "The user approves and ADXC pulls only the relevant data to answer the question." },
];

export default function HomePage() {
    const contactEmail = "josh@1pa.ai";
    const mailtoHref = useMemo(() => {
        const subject = encodeURIComponent("Requesting more information about ADXC");
        const body = encodeURIComponent(
            "Hi,\n\nI’d like access to ADXC. Please share the password.\n\nThanks!"
        );
        return `mailto:${contactEmail}?subject=${subject}&body=${body}`;
    }, [contactEmail]);

    return (
        <>
            <HeroSection />

            <SMEsWantYourData />

            <ProviderComparisonSection />



            <WhyNowSection />

            <AIAgentsSection />

            <WorkflowSection
                title="ADXC unlocks this SME market for you"
                description="ADXC is the data exchange connecting premium marketing data providers and SMEs via AI agents, on a pay-per-use model."
                steps={steps}
            />

            {/* Data Provider Value Props */}
            <Section size="md">
                <Container size="lg">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">


                        {[
                            {
                                title: "No Datasets Stored",
                                description:
                                    "ADXC queries your data via API and returns only a synthesised answer. Datasets are never copied, stored, or exposed to end users.",
                            },
                            {
                                title: "You Get Paid per Use",
                                description:
                                    "You get paid per query, proportioned by your data's contribution to the answer. We take a service fee.",
                            },
                            {
                                title: "Customer Referrals",
                                description:
                                    "When an SME's usage of your data through ADXC reaches a threshold, we refer them directly to you for a full subscription.",
                            },
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col gap-3">
                                <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            <MiroSection />


            <CalculatorDataProviders />


            {/* Footer CTA*/}
            <Section size="md">
                <Container size="sm">

                    <SectionHeader
                        title="Want a demo and more information?"
                        align="center"
                        size="md"
                    />

                    <div className="space-y-4 flex justify-center">
                        <Button
                            asChild
                            className="max-w-xs w-full text-base py-6">
                            <a
                                href={mailtoHref}
                                className="inline-flex items-center justify-center gap-2 w-full"
                            >
                                <Mail className="w-5 h-5" />
                                Get in touch
                            </a>
                        </Button>
                    </div>

                </Container>
            </Section>






        </>
    );
}

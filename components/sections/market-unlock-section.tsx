import { StepCards } from "../cards/steps-card"
import { Container } from "../layout/container"
import { Section } from "../layout/section"
import { SectionHeader } from "../layout/section-header"

const MARKET_UNLOCK_STEPS = [
    { number: 1, title: "AI Request", description: "AI agents query ADXC when completing tasks inside workflows." },
    { number: 2, title: "Orchestration", description: "ADXC's Agentic Orchestrator understands the question context, breaks it into sub-tasks and identifies the most relevant data to answer it." },
    { number: 3, title: "Abstract Answer", description: "The customer sees an abstract of the answer and price." },
    { number: 4, title: "Full Answer", description: "The user approves and ADXC pulls only the relevant data to answer the question." },
]

export function MarketUnlockSection() {
    return (
        <Section size="md">
            <Container size="lg">
                <SectionHeader
                    title="ADXC unlocks this SME market for you"
                    description="ADXC is the data exchange connecting premium marketing data providers and SMEs via AI agents, on a pay-per-use model."
                    align="center"
                    size="md"
                />

                <StepCards steps={MARKET_UNLOCK_STEPS} />

            </Container>
        </Section>
    )
}
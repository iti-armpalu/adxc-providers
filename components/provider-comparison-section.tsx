
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Section } from "./layout/section";
import { Container } from "./layout/container";
import { SectionHeader } from "./sections/section-header";

type ComparisonTask = {
    task: string
    agent: string
    providers: boolean[]
}

type ComparisonStage = {
    stage: string
    tasks: ComparisonTask[]
}

const PROVIDERS = ["YouGov", "Statista", "Experian", "Talkwalker", "Comscore"] as const

const COMPARISON_STAGES: ComparisonStage[] = [
    {
        stage: "Strategy / Brief",
        tasks: [
            {
                task: "Audience understanding",
                agent: "Your Miro",
                providers: [true, true, true, true, false],
            },
            {
                task: "Competitor analysis",
                agent: "Miro",
                providers: [true, true, false, false, false],
            },
            {
                task: "Market sizing",
                agent: "Miro",
                providers: [false, true, true, false, false],
            },
        ],
    },
    {
        stage: "Creative Development",
        tasks: [
            {
                task: "Social trend analysis",
                agent: "Jasper",
                providers: [false, false, false, true, false],
            },
            {
                task: "Inspiration",
                agent: "Jasper",
                providers: [false, false, false, true, false],
            },
            {
                task: "Messaging development",
                agent: "Jasper",
                providers: [true, false, false, true, false],
            },
        ],
    },
    {
        stage: "Media Strategy / Planning",
        tasks: [
            {
                task: "Reach, frequency",
                agent: "Miro",
                providers: [false, false, true, false, true],
            },
            {
                task: "Channel effectiveness",
                agent: "Miro",
                providers: [false, true, false, true, true],
            },
            {
                task: "Planning",
                agent: "Miro",
                providers: [true, false, true, false, true],
            },
        ],
    },
    {
        stage: "Activation / Execution",
        tasks: [
            {
                task: "Campaign activation",
                agent: "Salesforce",
                providers: [false, false, true, false, true],
            },
            {
                task: "Shopper journey mapping",
                agent: "Salesforce",
                providers: [false, false, true, false, true],
            },
            {
                task: "Programmatic targeting",
                agent: "Salesforce",
                providers: [true, false, true, false, true],
            },
        ],
    },
    {
        stage: "Measurement & Optimization",
        tasks: [
            {
                task: "Effectiveness",
                agent: "Your agent",
                providers: [true, false, false, true, true],
            },
            {
                task: "Sales impact",
                agent: "Salesforce",
                providers: [false, false, true, false, false],
            },
            {
                task: "Optimization",
                agent: "Your agent",
                providers: [false, false, false, true, true],
            },
        ],
    },
]

type ProviderComparisonSectionProps = {
    title?: string
}

export function ProviderComparisonSection({
    title = "They need diverse data from a range of providers, but can’t afford multiple subscriptions, so pick one or none",
}: ProviderComparisonSectionProps) {
    return (
        <Section size="md">
            <Container size="lg">
                <SectionHeader
                    title={title}
                    align="center"
                    size="md"
                />

                <div className="mt-16">
                    <Card className="overflow-hidden border-border/50 bg-card/80 py-0 shadow-sm">
                        <CardContent className="p-0">
                            <div className="overflow-x-auto">
                                <Table>
                                    <TableHeader>
                                        <TableRow className="border-adxc/30 bg-stone-100">
                                            <TableHead className="text-adxc text-xs font-semibold uppercase tracking-wider">
                                                Stage
                                            </TableHead>
                                            <TableHead className="text-adxc text-xs font-semibold uppercase tracking-wider">
                                                Task
                                            </TableHead>
                                            <TableHead className="text-adxc text-xs font-semibold uppercase tracking-wider">
                                                AI Agent
                                            </TableHead>

                                            {PROVIDERS.map((provider) => (
                                                <TableHead
                                                    key={provider}
                                                    className="text-adxc text-center text-xs font-semibold uppercase tracking-wider"
                                                >
                                                    {provider}
                                                </TableHead>
                                            ))}
                                        </TableRow>
                                    </TableHeader>

                                    <TableBody>
                                        {COMPARISON_STAGES.flatMap((stage) =>
                                            stage.tasks.map((row, rowIdx) => (
                                                <TableRow
                                                    key={`${stage.stage}-${row.task}`}
                                                    className="border-adxc/10 hover:bg-stone-50/50"
                                                >
                                                    {rowIdx === 0 && (
                                                        <TableCell
                                                            rowSpan={stage.tasks.length}
                                                            className="align-middle border-r border-border/20 bg-adxc/5 text-sm font-semibold text-adxc"
                                                        >
                                                            {stage.stage}
                                                        </TableCell>
                                                    )}

                                                    <TableCell className="text-sm text-stone-600">
                                                        {row.task}
                                                    </TableCell>

                                                    <TableCell className="text-xs text-stone-600">
                                                        {row.agent}
                                                    </TableCell>

                                                    {row.providers.map((checked, i) => (
                                                        <TableCell key={i} className="text-center">
                                                            {checked ? (
                                                                <div className="mx-auto flex items-center justify-center">
                                                                    <div className="h-2 w-2 rounded-full bg-[#66023C]" />
                                                                </div>
                                                            ) : null}
                                                        </TableCell>
                                                    ))}
                                                </TableRow>
                                            ))
                                        )}
                                    </TableBody>
                                </Table>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </Container>
        </Section>
    )
}
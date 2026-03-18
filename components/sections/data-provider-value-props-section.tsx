import { Container } from "../layout/container"
import { Section } from "../layout/section"

type ValueProp = {
    title: string
    description: string
}

const VALUE_PROPS: ValueProp[] = [
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
]

export function DataProviderValuePropsSection() {
    return (
        <Section size="md">
            <Container size="lg">
                <div className="-mt-24 grid grid-cols-1 gap-8 md:grid-cols-3">
                    {VALUE_PROPS.map((item) => (
                        <div key={item.title} className="flex flex-col gap-3">
                            <h3 className="text-lg font-semibold tracking-tight text-adxc">
                                {item.title}
                            </h3>

                            <p className="text-sm leading-relaxed text-muted-foreground">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    )
}
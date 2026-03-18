import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

type StepItem = {
    number: number
    title: string
    description: string
}

type StepCardsProps = {
    steps: StepItem[]
}

export function StepCards({ steps }: StepCardsProps) {
    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-1">
            {steps.map((step) => (
                <Card key={step.number} className="basis-0 flex-1 gap-3 py-4">
                    <CardHeader>
                        <CardTitle>
                            <div className="flex flex-col gap-3 xl:flex-row xl:items-center">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-pink-100">
                                    <span className="text-base font-bold text-adxc">
                                        {String(step.number).padStart(2, "")}
                                    </span>
                                </div>

                                <h3 className="text-base font-semibold text-adxc">
                                    {step.title}
                                </h3>
                            </div>
                        </CardTitle>
                    </CardHeader>

                    <CardContent>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                            {step.description}
                        </p>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}
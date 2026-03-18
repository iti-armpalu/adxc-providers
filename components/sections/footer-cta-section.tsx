import { useMemo } from "react"
import { Mail } from "lucide-react"
import { Section } from "../layout/section"
import { Container } from "../layout/container"
import { SectionHeader } from "../layout/section-header"
import { Button } from "../ui/button"

const CONTACT_EMAIL = "josh@1pa.ai"

const EMAIL_SUBJECT = "Requesting more information about ADXC"

const EMAIL_BODY = `Hi,

I would like more information about ADXC and would be interested in a demo.

Thanks!`

type FooterCtaSectionProps = {
    title?: string
    email?: string
}

export function FooterCtaSection({
    title = "Want a demo and more information?",
    email = CONTACT_EMAIL,
}: FooterCtaSectionProps) {
    const mailtoHref = useMemo(() => {
        const subject = encodeURIComponent(EMAIL_SUBJECT)
        const body = encodeURIComponent(EMAIL_BODY)

        return `mailto:${email}?subject=${subject}&body=${body}`
    }, [email])

    return (
        <Section size="md">
            <Container size="sm">
                <SectionHeader title={title} align="center" size="md" />

                <div className="mt-6 flex justify-center">
                    <Button
                        asChild
                        className="w-full max-w-xs py-6 text-base font-semibold shadow-md transition hover:shadow-lg"
                    >
                        <a
                            href={mailtoHref}
                            className="inline-flex w-full items-center justify-center gap-2"
                        >
                            <Mail className="h-5 w-5" />
                            Get in touch
                        </a>
                    </Button>
                </div>
            </Container>
        </Section>
    )
}
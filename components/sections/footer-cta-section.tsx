"use client"

import { useState } from "react"
import { Mail, Check } from "lucide-react"
import { Section } from "../layout/section"
import { Container } from "../layout/container"
import { SectionHeader } from "../layout/section-header"
import { Button } from "../ui/button"

const CONTACT_EMAIL = "josh@1pa.ai"

type FooterCtaSectionProps = {
    title?: string
}

export function FooterCtaSection({
    title = "Want a demo and more information?",
}: FooterCtaSectionProps) {
    const [copied, setCopied] = useState(false)

    async function handleCopy() {
        try {
            await navigator.clipboard.writeText(CONTACT_EMAIL)
            setCopied(true)

            setTimeout(() => setCopied(false), 2000)
        } catch {
            window.prompt("Copy email:", CONTACT_EMAIL)
        }
    }

    return (
        <Section size="md">
            <Container size="sm">
                <SectionHeader title={title} align="center" size="md" />

                <div className="mt-6 flex justify-center">
                    <Button
                        onClick={handleCopy}
                        className="w-full max-w-xs p-6 text-base font-semibold shadow-md transition hover:shadow-lg"
                    >
                        <span className="inline-flex w-full items-center justify-center gap-2">
                            {copied ? (
                                <>
                                    <Check className="h-5 w-5" />
                                    Copied!
                                </>
                            ) : (
                                <>
                                    <Mail className="h-5 w-5" />
                                    Copy email
                                </>
                            )}
                        </span>
                    </Button>
                </div>

                {/* Optional: show email */}
                <p className="mt-3 text-center text-sm text-muted-foreground">
                    {CONTACT_EMAIL}
                </p>

                {/* Optional helper text */}
                <p className="mt-1 text-center text-xs text-muted-foreground">
                    Click to copy and email us directly
                </p>
            </Container>
        </Section>
    )
}
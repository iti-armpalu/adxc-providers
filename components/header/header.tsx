"use client";

import Link from "next/link";
import { LogOut } from "lucide-react";

import { Button } from "@/components/ui/button";

import Logo from "./logo";
import { logoutAction } from "@/lib/gate-logout";


export default function Header({ showDemoButtons = true }: { showDemoButtons?: boolean }) {

    return (
        <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
                {/* Logo */}
                <Link href="/">
                    <Logo size="md" variant="full" theme="light" showGlow />
                </Link>

                <div className="flex items-center gap-2">

                    {/* Logout */}
                    <form action={logoutAction}>
                        <Button
                            variant="ghost"
                            size="sm"
                            className="text-muted-foreground hover:text-foreground"
                        >
                            <LogOut className="w-4 h-4" />
                        </Button>
                    </form>
                </div>
            </div>
        </header>
    );
}

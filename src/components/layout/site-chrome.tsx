"use client"

import { usePathname } from "next/navigation"
import { Header } from "./header"
import { WhatsAppButton } from "./whatsapp-button"

export function SiteChrome({
  children,
  footer,
}: {
  children: React.ReactNode
  footer: React.ReactNode
}) {
  const path = usePathname()
  const isLp = path?.startsWith("/lp") ?? false

  return (
    <>
      {!isLp && <Header />}
      <main>{children}</main>
      {!isLp && footer}
      {!isLp && <WhatsAppButton />}
    </>
  )
}

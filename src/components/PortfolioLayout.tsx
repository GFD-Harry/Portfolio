import type { ReactNode } from 'react'

import { Footer } from './Footer'
import { SectionNavigation } from './SectionNavigation'
import { TopBar } from './TopBar'

interface PortfolioLayoutProps {
  sidebar: ReactNode
  children: ReactNode
}

export function PortfolioLayout({
  sidebar,
  children,
}: PortfolioLayoutProps) {
  return (
    <div className="min-h-screen bg-canvas">
      <aside className="fixed bottom-0 left-0 top-24 w-96 bg-canvas">
        <div className="flex h-full flex-col px-8 py-10">
          {sidebar}
        </div>
      </aside>

      <main className="ml-96 min-h-screen">
        <TopBar />
        <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-12 pb-20 pt-24">
          <div className="flex-1 pt-16">
            {children}
          </div>
          <SectionNavigation />
          <Footer />
        </div>
      </main>
    </div>
  )
}

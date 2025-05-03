// app/layout.tsx
import "../styles/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Next.js + Tauri Boilerplate",
  description: "Starter template for building Tauri apps with Next.js, Tailwind CSS and shadcn/ui",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* Botón flotante para cambiar tema */}
          <div className="fixed top-4 right-4 z-50">
            <ThemeToggle />
          </div>

          <main className="min-h-screen bg-background text-foreground flex items-center justify-center">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}

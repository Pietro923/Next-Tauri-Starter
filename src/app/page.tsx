// src/App.tsx
import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground p-4">
      <Card className="w-full max-w-md text-center shadow-xl">
        <CardContent className="space-y-4 p-6">
          <h1 className="text-2xl font-bold">
            Aplicación Next.js en Tauri <br /> <span className="text-muted-foreground">Next.js App in Tauri</span>
          </h1>
          <a
            href="https://github.com/tu-usuario/tu-repo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" className="gap-2">
              <Github className="w-5 h-5" />
              ⭐ Deja una estrella / Leave a star
            </Button>
          </a>
        </CardContent>
      </Card>
    </div>
  )
}

export default App

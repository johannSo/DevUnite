// components/RightSidebar.tsx
"use client"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardContent } from "@/components/ui/card"
import { Bell, User, MessageCircle } from "lucide-react"

const RightSidebar = () => {
  const items = [
    {
      icon: <Bell className="w-4 h-4" />,
      title: "Notifications",
      content: "3 neue Meldungen",
    },
    {
      icon: <MessageCircle className="w-4 h-4" />,
      title: "Messages",
      content: "2 neue Nachrichten",
    },
    {
      icon: <User className="w-4 h-4" />,
      title: "Friends online",
      content: "5 Leute online",
    },
  ]

  return (
    <aside className="hidden lg:flex flex-col w-64 p-4 border-l border-muted bg-background fixed top-16 right-0 h-[calc(100vh-4rem)] z-40">      <ScrollArea className="flex-1">
        <div className="flex flex-col gap-4">
          {items.map((item, i) => (
            <Card key={i} className="shadow-none hover:bg-muted transition">
              <CardContent className="flex items-center gap-4 p-3">
                <div className="text-primary">{item.icon}</div>
                <div>
                  <p className="font-medium">{item.title}</p>
                  <p className="text-muted-foreground text-sm">{item.content}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </aside>
  )
}

export default RightSidebar

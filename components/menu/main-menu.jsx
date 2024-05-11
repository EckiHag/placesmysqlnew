"use client"

import { useState } from "react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import MenuItem from "@/components/menu/menu-item"
import MenuTitle from "@/components/menu/menu-title"
import Link from "next/link"
import { LightDarkToggle } from "@/components/ui/light-dark-toggle"
import { cn } from "@/lib/utils"
import { useSession } from "../../app/sessioncontext"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"

export default function MainMenu({ className }) {
  const session = useSession()

  const [showProfileCard, setShowProfileCard] = useState(false)

  const toggleProfileCard = () => {
    setShowProfileCard(!showProfileCard)
  }

  let initials = "NN"
  if (session.user.name) {
    const names = session.user.name.split(" ")
    if (names.length === 1) {
      initials = names[0].charAt(0).toUpperCase()
    } else {
      initials = names[0].charAt(0).toUpperCase() + names[1].charAt(0).toUpperCase()
    }
  }

  return (
    <nav className={cn(`md:bg-muted overflow-auto p-4 flex flex-col`, className)}>
      <header className="hidden md:block border-b dark:border-b-black border-b-zinc-300 pb-4">
        <MenuTitle />
      </header>
      <ul className="py-4 grow">
        <MenuItem href="/dashboard">My dashboard</MenuItem>
        <MenuItem href="/dashboard/quadrate">Quadrate</MenuItem>
        <MenuItem href="/dashboard/cardtesting">Cardtesting</MenuItem>
        <MenuItem href="/dashboard/mongodbeinlesen">MongoDbEinlesen</MenuItem>
        <MenuItem href="/dashboard/subjects">Subjects</MenuItem>
        <MenuItem href="/dashboard/settings">Settings</MenuItem>
        <MenuItem href="/dashboard/signupwithshad">Signup With Shad</MenuItem>
        <MenuItem href="/dashboard/tabs">Tabs Testing</MenuItem>
        <MenuItem href="/dashboard/testing/fileuploadfornextjs">File Upload Testing</MenuItem>
      </ul>
      <footer className="flex flex-row items-center justify-between">
        <HoverCard>
          <HoverCardTrigger>
            <Avatar onClick={toggleProfileCard}>
              <AvatarFallback className="bg-primary dark:bg-primary">{initials}</AvatarFallback>
            </Avatar>
          </HoverCardTrigger>
          <HoverCardContent>
            <div className="text-sm">{session.user.name}</div>
            <div className="text-sm">{session.user.email}</div>
            <div className="text-sm">{session.user.role}</div>
          </HoverCardContent>
        </HoverCard>
        <Link href="/dashboard/settings" className="hover:underline">
          settings
        </Link>

        <LightDarkToggle className="" />
      </footer>
    </nav>
  )
}

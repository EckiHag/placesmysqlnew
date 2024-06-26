"use client"

import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer"
import MainMenu from "@/components/menu/main-menu"
import MenuTitle from "@/components/menu/menu-title"
import { MenuIcon } from "lucide-react"
import { useMediaQuery } from "@/components/hooks/use-media-query"

export default function DashboardLayout({ children }) {
  const isDesktop = useMediaQuery("(min-width: 768px)")

  return (
    <div className="md:grid md:grid-cols-[250px_1fr] h-screen">
      <MainMenu className="hidden md:flex" />
      {!isDesktop && (
        <div className="p-4 flex justify-between md:hidden sticky top-0 left-0 bg-background border-b border-border">
          <MenuTitle />
          <Drawer direction="right">
            <DrawerTrigger>
              <MenuIcon />
            </DrawerTrigger>
            <DrawerContent>
              <MainMenu />
            </DrawerContent>
          </Drawer>
        </div>
      )}
      <div className="overflow-auto px-4">{children}</div>
    </div>
  )
}

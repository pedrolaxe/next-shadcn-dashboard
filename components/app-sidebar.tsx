"use client"

import * as React from "react"
import {
  Bot,
  Bird,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "Pedro Laxe",
    email: "pedrolaxe@gmail.com",
    avatar: "",
  },
  navMain: [
    {
      title: "Prime",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Consultar",
          url: "#",
        },
        {
          title: "Cancelados",
          url: "#",
        },
        {
          title: "Pendentes",
          url: "#",
        },
      ],
    },
    {
      title: "Chamados",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Listagem",
          url: "#",
        },
        {
          title: "Fechados",
          url: "#",
        },
      ],
    },
    {
      title: "Configurações",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Geral",
          url: "#",
        },
        {
          title: "Usuários",
          url: "#",
        },
        {
          title: "Integrações",
          url: "#",
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
      <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-6 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Bird />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Pedro Laxe</span>
                  <span className="truncate text-xs">Admin Manager</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

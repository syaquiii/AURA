"use client";

import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/shared/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Type, Palette, Component } from "lucide-react";

interface DesignContainerProps {
  children: React.ReactNode;
}

const DesignContainer = ({ children }: DesignContainerProps) => {
  const pathname = usePathname();

  const navItems = [
    { title: "Typography", url: "/design-system/typography", icon: Type },
    { title: "Colors", url: "/design-system/colors", icon: Palette },
    { title: "Components", url: "/design-system/components", icon: Component },
  ];

  return (
    <SidebarProvider>
      <div className="bg-background flex h-screen w-full overflow-hidden">
        <Sidebar className="border-r">
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Design System</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {navItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        render={<Link href={item.url} />}
                        isActive={pathname.startsWith(item.url)}
                      >
                        <item.icon className="mr-2 h-4 w-4" />
                        <span>{item.title}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        <main className="flex-1 overflow-y-auto">
          <div className="mx-auto max-w-6xl p-8">
            <div className="mb-4">
              <SidebarTrigger />
            </div>
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}

export default DesignContainer;
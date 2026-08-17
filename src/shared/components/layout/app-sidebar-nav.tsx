"use client";

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/shared/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/shared/constants/nav-item";

export function AppSidebarNav() {
  const pathname = usePathname();

  return (
    <SidebarMenu className="gap-2">
      {navItems.map((item) => (
        <SidebarMenuItem key={item.title}>
          <SidebarMenuButton
            className="data-active:bg-primary-1 h-12 rounded-lg transition-colors duration-300 hover:bg-white/10 hover:text-white data-active:font-semibold data-active:text-white"
            render={<Link href={item.url} />}
            isActive={pathname.startsWith(item.url)}
          >
            <item.icon className="size-6!" />
            <span className="text-body-2">{item.title}</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}

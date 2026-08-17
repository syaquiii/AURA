"use client";

import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
} from "@/shared/components/ui/sidebar";
import Image from "next/image";
import Icon from "../../../../public/assets/icon.png";
import { AppSidebarNav } from "./app-sidebar-nav";

export function AppSidebar() {
  return (
    <Sidebar className="">
      <SidebarContent className="bg-[#000B26] p-6">
        <SidebarGroup>
          <SidebarGroupLabel className="mb-14 flex flex-col items-start">
            <div className="mb-2 flex h-16 items-center gap-2 text-white">
              <Image src={Icon} alt="AURA Icon" className="h-8 w-auto" />
              <h1 className="text-heading-1">AURA</h1>
            </div>
            <h2 className="text-body-2 text-white">AI Retail Assistant</h2>
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <AppSidebarNav />
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

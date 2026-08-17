import React from "react";
import { AppSidebar } from "@/shared/components/layout/app-sidebar";
import {
  SidebarProvider,
} from "@/shared/components/ui/sidebar";
import AccountBadge from "@/shared/components/ui/account-badge";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="bg-background flex min-h-screen w-full overflow-hidden">
        <AppSidebar />
        <main className="flex-1 overflow-y-auto p-10">
          <AccountBadge />
          <section className="mt-10">{children}</section>
        </main>
      </div>
    </SidebarProvider>
  );
}

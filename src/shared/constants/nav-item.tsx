import {
  LayoutDashboard,
  GitBranch,
  Monitor,
  MousePointerClick,
  ClipboardList,
} from "lucide-react";

export const navItems = [
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  { title: "Decision Center", url: "/decision-center", icon: GitBranch },
  { title: "Simulator", url: "/simulator", icon: Monitor },
  { title: "Action Center", url: "/action-center", icon: MousePointerClick },
  {
    title: "Inventory Intelligence",
    url: "/inventory-intelligence",
    icon: ClipboardList,
  },
];

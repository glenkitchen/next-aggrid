"use client";

import * as React from "react";

import { NavProjects } from "@/components/nav-projects";
import ThemeToggle from "@/components/theme-toggle";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

const data = {
  projects: [
    {
      name: "Next Theme dark mode ",
      url: "#",
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarGroup className="group-data-[collapsible=icon]:hidden">
          <ThemeToggle />
        </SidebarGroup>
      </SidebarHeader>
      <SidebarContent>
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}

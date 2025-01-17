"use client";

import { Switch } from "@/components/ui/switch";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useId } from "react";

//npx shadcn@latest add https://originui.com/r/comp-182.json
export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDarkMode = theme === "dark";

  const id = useId();

  const toggleSwitch = () => {
    setTheme(isDarkMode ? "light" : "dark");
  };

  return (
    <div
      className="group inline-flex items-center gap-2 w-10 p-4"
      data-state={isDarkMode ? "checked" : "unchecked"}
    >
      <span
        id={`${id}-off`}
        className="flex-1 cursor-pointer text-right text-sm font-medium group-data-[state=checked]:text-muted-foreground/70"
        aria-controls={id}
        onClick={() => setTheme("light")}
      >
        <Moon size={16} strokeWidth={2} aria-hidden="true" />
      </span>
      <Switch
        id={id}
        checked={isDarkMode}
        onCheckedChange={toggleSwitch}
        aria-labelledby={`${id}-off ${id}-on`}
        aria-label="Toggle between dark and light mode"
      />
      <span
        id={`${id}-on`}
        className="flex-1 cursor-pointer text-left text-sm font-medium group-data-[state=unchecked]:text-muted-foreground/70"
        aria-controls={id}
        onClick={() => setTheme("dark")}
      >
        <Sun size={16} strokeWidth={2} aria-hidden="true" />
      </span>
    </div>
  );
}

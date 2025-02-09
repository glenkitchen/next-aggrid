import { useMounted } from "@/hooks/use-mounted";
import {
  colorSchemeDark,
  colorSchemeLight,
  themeQuartz,
} from "ag-grid-community";
import { useTheme } from "next-themes";

// Simple hook to integrate AG Grid theme with NextJS theme
export const useAgGridTheme = () => {
  const isMounted = useMounted();
  const { theme } = useTheme();

  return isMounted
    ? theme === "dark"
      ? themeQuartz.withPart(colorSchemeDark)
      : themeQuartz.withPart(colorSchemeLight)
    : themeQuartz.withPart(colorSchemeLight);
};

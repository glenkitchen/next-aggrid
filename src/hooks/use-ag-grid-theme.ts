import {
  colorSchemeDark,
  colorSchemeLight,
  themeQuartz,
} from "ag-grid-community";
import { useTheme } from "next-themes";

// Simple hook to integrate AG Grid theme with NextJS theme
export const useAgGridTheme = () => {
  const { theme } = useTheme();

  return theme === "dark"
    ? themeQuartz.withPart(colorSchemeDark)
    : themeQuartz.withPart(colorSchemeLight);
};

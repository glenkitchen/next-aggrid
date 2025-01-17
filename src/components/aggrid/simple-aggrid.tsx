"use client";

import { useAgGridTheme } from "@/hooks/use-ag-grid-theme";
import { AllCommunityModule, ColDef, ModuleRegistry } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { useTheme } from "next-themes";

ModuleRegistry.registerModules([AllCommunityModule]);

export default function SimpleAgGrid() {
  const { theme: themeMode } = useTheme();
  const theme = useAgGridTheme();

  const rowData = [
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  ];

  const colDefs: ColDef[] = [
    { field: "make" },
    { field: "model" },
    { field: "price" },
    { field: "electric" },
  ];

  return (
    <div>
      <div className="p-4 mt-10 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-md mb-4">
        <span>Grid is in {themeMode} mode</span>
      </div>
      <div className="h-56 w-[900px]">
        <AgGridReact theme={theme} rowData={rowData} columnDefs={colDefs} />
      </div>
    </div>
  );
}

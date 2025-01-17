"use client";

import { useAgGridTheme } from "@/hooks/use-ag-grid-theme";
import { formatAgGridCurrency, formatAgGridDate } from "@/utils/format-ag-grid";
import { AllCommunityModule, ColDef, ModuleRegistry } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { useTheme } from "next-themes";

ModuleRegistry.registerModules([AllCommunityModule]);

export default function SimpleAgGrid() {
  const { theme: themeMode } = useTheme();
  const theme = useAgGridTheme();

  const rowData = [
    {
      make: "Tesla",
      model: "Model Y",
      price: 64950,
      electric: true,
      date: new Date(),
    },
    {
      make: "Ford",
      model: "F-Series",
      price: 33850,
      electric: false,
      date: new Date(),
    },
    {
      make: "Toyota",
      model: "Corolla",
      price: 29600,
      electric: false,
      date: new Date(),
    },
  ];

  const colDefs: ColDef[] = [
    { field: "make" },
    { field: "model" },
    { field: "price", valueFormatter: formatAgGridCurrency },
    { field: "electric" },
    { field: "date", valueFormatter: formatAgGridDate },
  ];

  const defaultColDef: ColDef = {
    filter: true,
  };

  return (
    <div className="p-4">
      <div className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-md mb-4">
        {/*  <span>Grid is in {themeMode} mode</span> */}
      </div>
      <div className="h-56 w-[1200px]">
        <AgGridReact
          /*  theme={theme} */
          rowData={rowData}
          columnDefs={colDefs}
          defaultColDef={defaultColDef}
        />
      </div>
    </div>
  );
}

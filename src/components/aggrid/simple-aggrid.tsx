"use client";

import { useAgGridTheme } from "@/hooks/use-ag-grid-theme";
import { AllCommunityModule, ColDef, ModuleRegistry } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";

ModuleRegistry.registerModules([AllCommunityModule]);

export default function SimpleAgGrid() {
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
    <div className="h-[90vh] w-[1024px]">
      <AgGridReact theme={theme} rowData={rowData} columnDefs={colDefs} />
    </div>
  );
}

import {
  formatCurrency,
  formatDate,
  formatDateTime,
  formatPercent,
} from "@/utils/format";
import { ValueFormatterParams } from "ag-grid-community";

export const formatAgGridDate = (params: ValueFormatterParams) => {
  if (params.value) {
    return formatDate(params.value);
  }
  return "";
};

export const formatAgGridDateTime = (params: ValueFormatterParams) => {
  if (params.value) {
    return formatDateTime(params.value);
  }
  return "";
};

export const formatAgGridCurrency = (params: ValueFormatterParams) => {
  if (params.value) {
    return formatCurrency(params.value);
  }
  return "";
};

export const formatAgGridPercent = (params: ValueFormatterParams) => {
  if (params.value) {
    return formatPercent(params.value);
  }
  return "";
};

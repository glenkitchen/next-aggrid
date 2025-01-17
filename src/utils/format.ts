import { ValueFormatterParams } from "ag-grid-community";

export const getCurrency = () => {
  return "ZAR";
};

export const getCurrencyLocale = () => {
  return "en-ZA";
};

export const getLocale = () => {
  return "en-GB" ?? navigator.language;
};

export const formatDate = (date: string | Date) => {
  if (date) {
    const Format = new Intl.DateTimeFormat(getLocale());
    const format = Format.format(new Date(date));
    return format;
  }
  return "";
};

export const formatDateTime = (date: string | Date) => {
  if (date) {
    const Format = new Intl.DateTimeFormat(getLocale(), {
      dateStyle: "short",
      timeStyle: "medium",
    });
    const format = Format.format(new Date(date)).replace(",", " at ");
    return format;
  }
  return "";
};

export const formatCurrency = (value: number) => {
  return new Intl.NumberFormat(getCurrencyLocale(), {
    style: "currency",
    currency: getCurrency(),
  }).format(value);
};

export const formatPercent = (value: number) => {
  return new Intl.NumberFormat(getLocale(), {
    style: "percent",
  }).format(value);
};

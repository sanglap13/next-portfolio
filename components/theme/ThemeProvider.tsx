"use client";

import React from "react";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { TThemeProviderProps } from "@/@types/theme/Theme.types";

const ThemeProvider = ({ children, ...props }: any) => {
  return <NextThemeProvider {...props}>{children}</NextThemeProvider>;
};

export default ThemeProvider;

import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        primary: {
          // 100: "#d9edfd",
          // 200: "#b3dbfb",
          // 300: "#8ec9f9",
          // 400: "#68b7f7",
          // 500: "#42a5f5",
          // 600: "#3584c4",
          // 700: "#286393",
          // 800: "#1a4262",
          // 900: "#0d2131",
          50: "#f4f7fb",
          100: "#e8edf6",
          200: "#ccdaeb",
          300: "#9ebcdb",
          400: "#598dbf",
          500: "#477cb0",
          600: "#366293",
          700: "#2c4f78",
          800: "#284464",
          900: "#263b54",
        },
        secondary: {
          100: "#fcdddc",
          200: "#f9bab9",
          300: "#f59896",
          400: "#f27573",
          500: "#ef5350",
          600: "#bf4240",
          700: "#8f3230",
          800: "#602120",
          900: "#301110",
        },
        gray: {
          100: "#fdfdfd",
          200: "#fbfbfb",
          300: "#f9f9f9",
          400: "#f7f7f7",
          500: "#f5f5f5",
          600: "#c4c4c4",
          700: "#939393",
          800: "#626262",
          900: "#313131",
        },
      }
    : {
        primary: {
          // 100: "#0d2131",
          // 200: "#1a4262",
          // 300: "#286393",
          // 400: "#3584c4",
          // 500: "#42a5f5",
          // 600: "#68b7f7",
          // 700: "#8ec9f9",
          // 800: "#b3dbfb",
          // 900: "#d9edfd",
          50: "#263b54",
          100: "#284464",
          200: "#2c4f78",
          300: "#366293",
          400: "#477cb0",
          500: "#598dbf",
          600: "#9ebcdb",
          700: "#ccdaeb",
          800: "#e8edf6",
          900: "#f4f7fb",
        },
        secondary: {
          100: "#301110",
          200: "#602120",
          300: "#8f3230",
          400: "#bf4240",
          500: "#ef5350",
          600: "#f27573",
          700: "#f59896",
          800: "#f9bab9",
          900: "#fcdddc",
        },
        gray: {
          100: "#313131",
          200: "#626262",
          300: "#939393",
          400: "#c4c4c4",
          500: "#f5f5f5",
          600: "#f7f7f7",
          700: "#f9f9f9",
          800: "#fbfbfb",
          900: "#fdfdfd",
        },
      }),
});

export const themeSettings = (mode) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.secondary[500],
            },
            neutral: {
              dark: colors.gray[700],
              main: colors.gray[500],
              light: colors.gray[100],
            },
            background: {
              default: colors.primary[800],
            },
          }
        : {
            // palette values for light mode
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.secondary[500],
            },
            neutral: {
              dark: colors.gray[700],
              main: colors.gray[500],
              light: colors.gray[100],
            },
            background: {
              default: "#fcfcfc",
            },
          }),
    },
    typography: {
      fontFamily: ["Raleway", "sans-serif"].join(","),
      fontSize: 10,
      h1: {
        fontFamily: ["Raleway", "sans-serif"].join(","),
        fontSize: 35,
      },
      h2: {
        fontFamily: ["Raleway", "sans-serif"].join(","),
        fontSize: 28,
      },
      h3: {
        fontFamily: ["Raleway", "sans-serif"].join(","),
        fontSize: 22,
      },
      h4: {
        fontFamily: ["Raleway", "sans-serif"].join(","),
        fontSize: 16,
      },
      h5: {
        fontFamily: ["Raleway", "sans-serif"].join(","),
        fontSize: 14,
      },
      h6: {
        fontFamily: ["Raleway", "sans-serif"].join(","),
        fontSize: 12,
      },
    },
  };
};

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};

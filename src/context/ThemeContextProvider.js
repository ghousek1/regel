import { React, useState, useEffect } from "react";
import "../App.css";
import { ThemeContext } from "./ThemeContext";

// const regexOpenAPIKey = process.env.REGEX_OPEN_API_KEY

function ThemeContextDefaultProvider(props) {
  const [userThemeMode, setUserThemeMode] = useState("light");

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        const colorScheme = event.matches ? "dark" : "light";
        setUserThemeMode(colorScheme);
      });
  }, []);

  useEffect(() => {
    toggleCSSVariables();
  }, [userThemeMode]);


  const lightThemeCSSVariables = [
    {
      name: "--custom-background-color",
      value: "#fdfdfd",
    },
    {
      name: "--custom-font-color",
      value: "#090909",
    },
  ];

  const darkThemeCSSVariables = [
    {
      name: "--custom-background-color",
      value: "#090909",
    },
    {
      name: "--custom-font-color",
      value: "#fdfdfd",
    },
  ];

  const toggleUserThemeMode = () => {
    console.log("(triggering OPEN KEY SECRET");
    // console.log("REGEX_OPEN_API_KEY : ",regexOpenAPIKey);
    setUserThemeMode(userThemeMode === "dark" ? "light" : "dark");
  };

  const toggleCSSVariables = () => {
    const themeCSSVariables =
      userThemeMode === "light"
        ? lightThemeCSSVariables
        : darkThemeCSSVariables;
    themeCSSVariables.map((cssVar) => {
      document.documentElement.style.setProperty(cssVar.name, cssVar.value);
    });
  };

  return (
    <>
      <ThemeContext.Provider value={[userThemeMode, toggleUserThemeMode]}>
        {props.children}
      </ThemeContext.Provider>
    </>
  );
}

export default ThemeContextDefaultProvider;

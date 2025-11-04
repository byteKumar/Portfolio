"use client";
import React, { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Check for saved theme preference or default to light
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    // The theme is already set by the script in layout.js, but we sync it here
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

          return (
            <button
              onClick={toggleTheme}
              className="fixed top-3 right-3 sm:top-6 sm:right-6 z-50 p-2 sm:p-3 rounded-full bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 backdrop-blur-sm border border-gray-300 dark:border-white/20 transition-all duration-300"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <SunIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-900 dark:text-white" />
              ) : (
                <MoonIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-900 dark:text-white" />
              )}
            </button>
          );
};

export default ThemeToggle;


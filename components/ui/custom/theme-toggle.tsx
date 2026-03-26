"use client";
import { motion } from "motion/react"
import { useTheme } from "next-themes";
import { useState } from "react";
import { ThemeEnum } from "@/lib/constants/theme";
import {Sun, Moon} from 'lucide-react'
import { Button } from "@/components/ui/button";

export default function ThemeToggle({
  initialTheme,
}: {
  initialTheme?: string;
}) {
  const { setTheme } = useTheme();

  const [currentTheme, setCurrentTheme] = useState(initialTheme);

  const toggleTheme = () => {
    const newTheme =
      currentTheme === ThemeEnum.Dark ? ThemeEnum.Light : ThemeEnum.Dark;
    setTheme(newTheme);
    setCurrentTheme(newTheme);
    document.cookie = `theme=${newTheme}; path=/; max-age=31536000; SameSite=Lax`;
  };
  return (
    <Button onClick={toggleTheme} aria-label="Theme toggle" variant="outline" size="icon">
      <motion.div
        initial={false}
        animate={{
          rotate: currentTheme === ThemeEnum.Dark ? 0 : 90,
          scale: currentTheme === ThemeEnum.Dark ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
        className="absolute text-yellow-500"
      >
        <Moon size={20} />
      </motion.div>

      <motion.div
        initial={false}
        animate={{
          rotate: currentTheme === ThemeEnum.Light ? 0 : -90,
          scale: currentTheme === ThemeEnum.Light ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
        className="absolute text-orange-500"
      >
        <Sun size={20} />
      </motion.div>
    </Button>
  );
}

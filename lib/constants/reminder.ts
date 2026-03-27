import { Eye, Footprints, Dumbbell, Coffee } from "lucide-react";
import { Reminder } from "../types/reminder-type";

export const reminders: Reminder[] = [
    {
      id: "eye-exercises",
      icon: Eye,
      enabled: true,
      interval: 20,
    },
    {
      id: "stretch",
      icon: Dumbbell,
      enabled: true,
      interval: 45,
    },
    {
      id: "walk",
      icon: Footprints,
      enabled: false,
      interval: 120,
    },
    {
      id: "coffee-break",
      icon: Coffee,
      enabled: false,
      interval: 180,
    },
  ];
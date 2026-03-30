import { Eye, Footprints, Dumbbell, Coffee, HelpCircle } from "lucide-react";

const ICON_MAP: Record<string, any> = {
  Eye,
  Footprints,
  Dumbbell,
  Coffee,
};

export function getIcon(iconName: string) {
  const IconComponent = ICON_MAP[iconName] || HelpCircle;
  return <IconComponent className="size-6" />;
}
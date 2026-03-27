import { Switch } from "@/components/ui/switch";

interface ReminderToggleProps {
  id: string;
  enabled: boolean;
  onToggle: (id: string) => void;
}

export function ReminderToggle({ id, enabled, onToggle }: ReminderToggleProps) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-[10px] font-bold uppercase tracking-wider opacity-60 w-6 text-right transition-all">
        {enabled ? "On" : "Off"}
      </span>
      <Switch
        checked={enabled}
        onCheckedChange={() => onToggle(id)}
        aria-label={`Toggle reminder ${id}`}
      />
    </div>
  );
}

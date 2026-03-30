export type Reminder = {
  id: string;
  title?: string;
  description?: string;
  icon: string;
  enabled: boolean;
  intervalDescription?: string;
  interval: number;
  isCustom?: boolean;
}
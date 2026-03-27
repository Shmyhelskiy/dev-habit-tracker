export type Reminder = {
  id: string;
  title?: string;
  description?: string;
  icon: any;
  enabled: boolean;
  intervalDescription?: string;
  interval: number;
  isCustom?: boolean;
}
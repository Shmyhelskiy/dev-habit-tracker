'use client'
import { Card, CardContent } from "@/components/ui/card";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ReminderToggle } from "@/components/ui/custom/reminder-toggle";
import { reminders } from "@/lib/constants/reminder";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default  function ReminderList() {
    const t =  useTranslations('Reminders');
    const [remindersList, setRemindersList] = useState(reminders)
    const toggleReminder = (id: string) => {
        setRemindersList((prev) => {
            return ( prev.map((reminder) => {
                if (reminder.id === id) {
                    return {
                        ...reminder,
                        enabled: !reminder.enabled
                    }
                }
                return reminder
            }))
        })
    }

    return (
        <div className="flex flex-col gap-6">
            {remindersList.map((reminder) => (
                <Card key={reminder.id} className="relative overflow-hidden group hover:shadow-lg transition-all duration-300 border-border/50">
                    <div className="flex flex-col md:flex-row md:items-center">
                        <CardHeader className="flex flex-row items-center gap-4 pb-2 md:pb-6 flex-1">
                            <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                                <reminder.icon className="size-6" />
                            </div>
                            <div className="flex flex-col">
                                <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                                    {t(`${reminder.id}.title`)}
                                </CardTitle>
                                <CardDescription className="text-sm leading-relaxed mt-1">
                                    {t(`${reminder.id}.description`)}
                                </CardDescription>
                            </div>
                        </CardHeader>
                        <CardContent className="flex items-center justify-between md:justify-end gap-6 pt-0 md:pt-6 md:pr-8">
                            <Badge variant="secondary" className="py-1.5 px-3 font-medium">
                                {t(`${reminder.id}.intervalDescription`)}
                            </Badge>
                            <ReminderToggle 
                                id={reminder.id} 
                                enabled={reminder.enabled}
                                onToggle={toggleReminder}
                            />
                        </CardContent>
                    </div>
                </Card>
            ))}
        </div>
    );
}
import { getTranslations } from "next-intl/server";
import ReminderList from "./reminder-list";

export async function RemindersSection() {
    const t = await getTranslations('RemindersSection');

    return (
        <section
            className="py-12 md:py-16 px-4 bg-background"
            aria-labelledby="reminders-title"
        >
            <div className="container mx-auto max-w-4xl">
                <div className="mb-12 text-center md:text-left">
                    <h2
                        id="reminders-title"
                        className="text-3xl md:text-4xl font-bold mb-4 text-brand-title tracking-tight"
                    >
                        {t('title')}
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                        {t('description')}
                    </p>
                </div>

                <ReminderList />
            </div>
        </section>
    );
}
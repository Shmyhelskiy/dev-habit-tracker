import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getTranslations } from "next-intl/server";

export async function HeroSection() {
  const t = await getTranslations('HeroSection');
  return (
    <section className="py-12 md:py-20 lg:py-32 px-4 bg-gradient-to-b from-[#ebf4ff] to-background dark:from-[#0d1e36] dark:to-background">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="inline-flex items-center justify-center mb-6 px-4 py-2 bg-primary/10 text-primary rounded-full text-xs md:text-sm font-medium">
          {t('health')}
        </div>
        
        <h1 
          className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 text-brand-title"
        >
          {t('title')}
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          {t('description')}
        </p>

        <Button size="lg" className="gap-2 w-full sm:w-auto">
          <span className="text-base md:text-lg">{t('button')}</span>
          <ArrowRight className="size-4 md:size-5" />
        </Button>
      </div>
    </section>
  );
}

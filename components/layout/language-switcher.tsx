"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLocale = () => {
    const nextLocale = locale === "en" ? "uk" : "en";
    
    window.location.href = `/${nextLocale}${pathname === "/" ? "" : pathname}`;
  };

  return (
    <Button 
      variant="ghost" 
      size="sm" 
      onClick={toggleLocale} 
      className="flex items-center gap-2"
      aria-label="Toggle language"
    >
      <Globe className="h-4 w-4" />
      <span className="uppercase font-medium">{locale === 'uk' ? 'ua' : locale}</span>
    </Button>
  );
}

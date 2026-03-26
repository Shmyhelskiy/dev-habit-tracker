
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/server";
import {getTranslations} from 'next-intl/server';
import { LanguageSwitcher } from "./language-switcher";
import ThemeToggle from "@/components/ui/custom/theme-toggle";
import { cookies } from "next/headers";

export async function Navbar() {
const supabase = await createClient();
const { data: { user } } = await supabase.auth.getUser();
const t = await getTranslations('Navbar');

 const cookieStore = await cookies();
  const themeValue = cookieStore.get("theme")?.value || "light";


async function handleSignOut() {
    "use server"; 
    const supabase = await createClient();
    await supabase.auth.signOut();
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 w-full items-center justify-between px-4 sm:px-8">
        <div className="flex items-center">
          <Link href="/" className="font-bold text-lg tracking-tight">
            Habit Tracker
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle  initialTheme={themeValue}/>
          {user ? (
            <Button variant="outline" onClick={handleSignOut}>
              {t('logout')}
            </Button>
          ) : (
            <>
            <Button>
              <Link href="/login" >
                {t('login')}
              </Link> 
            </Button>
            <Button>
              <Link href="/auth" >
                {t('register')}
              </Link>
            </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}


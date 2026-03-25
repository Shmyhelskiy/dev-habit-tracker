"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createClient } from "@/lib/supabase/client";

export default function AuthPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const supabase = createClient();

const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `/`,
      },
    });

    console.log(data, error);

    if (error) {
      alert(error.message); 
      return;
    }

    if (data.user) {
      alert("Перевірте пошту для підтвердження реєстрації!");
      router.push("/login");
    }
    
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-2xl dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
            Реєстрація
          </h1>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Створіть нову сторінку облікового запису
          </p>
        </div>
        
        <form onSubmit={handleRegister} className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Електронна пошта
            </label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              required
              className="h-12 rounded-xl bg-zinc-50/50 dark:bg-zinc-950/50"
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Пароль
            </label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="h-12 rounded-xl bg-zinc-50/50 dark:bg-zinc-950/50"
            />
          </div>

          <Button
            type="submit"
            size="lg"
            disabled={!email || !password}
            className="mt-2 w-full h-12 rounded-xl text-base cursor-pointer"
          >
            Зареєструватись
          </Button>
        </form>

        <div className="mt-8 flex flex-col gap-5">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-zinc-200 dark:border-zinc-800"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-4 text-zinc-500 dark:bg-zinc-900 dark:text-zinc-400">
                Вже є акаунт?
              </span>
            </div>
          </div>

          <Button
            type="button"
            variant="outline"
            size="lg"
            onClick={() => router.push('/login')}
            className="w-full h-12 rounded-xl text-base cursor-pointer"
          >
            Увійти
          </Button>
        </div>
      </div>
    </div>
  );
}

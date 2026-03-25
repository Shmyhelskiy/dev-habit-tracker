"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Логіка входу
    console.log("Submit login:", { email, password });
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-2xl dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
            Вхід
          </h1>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Увійдіть до свого облікового запису
          </p>
        </div>
        
        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Електронна пошта
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-xl border border-zinc-200 bg-zinc-50/50 px-4 py-2.5 text-zinc-900 transition-all focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/10 dark:border-zinc-800 dark:bg-zinc-950/50 dark:text-zinc-100 dark:focus:border-blue-500 dark:focus:bg-zinc-950"
              placeholder="name@example.com"
              required
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Пароль
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="rounded-xl border border-zinc-200 bg-zinc-50/50 px-4 py-2.5 text-zinc-900 transition-all focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/10 dark:border-zinc-800 dark:bg-zinc-950/50 dark:text-zinc-100 dark:focus:border-blue-500 dark:focus:bg-zinc-950"
              placeholder="••••••••"
              required
            />
          </div>

          <Button
            type="submit"
            className="mt-2 w-full"
          >
            Увійти
          </Button>
        </form>

        <div className="mt-8 flex flex-col gap-5">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-zinc-200 dark:border-zinc-800"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-4 text-zinc-500 dark:bg-zinc-900 dark:text-zinc-400">
                Немає акаунту?
              </span>
            </div>
          </div>

          <Button
            type="button"
            variant="outline"
            onClick={() => router.push('/auth')}
            disabled={!email || !password}
            className="w-full"
          >
            Зареєструватись
          </Button>
        </div>
      </div>
    </div>
  );
}

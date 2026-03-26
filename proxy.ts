import { type NextRequest } from "next/server";
import { updateSession } from "./lib/supabase/proxy";
import { routing } from "./i18n/routing";
import createMiddleware from "next-intl/middleware";

const intlMiddleware = createMiddleware(routing);

export async function proxy(request: NextRequest) {
  // 1. Оновлюємо сесію Supabase (перевірка авторизації)
  const supabaseResponse = await updateSession(request);

  // Якщо Supabase вирішив перенаправити (наприклад, на логін), повертаємо його відповідь
  if (
    supabaseResponse.status >= 300 &&
    supabaseResponse.status < 400 &&
    supabaseResponse.headers.has("location")
  ) {
    return supabaseResponse;
  }

  // 2. Якщо перенаправлення немає, генеруємо локалізовану відповідь
  const intlResponse = intlMiddleware(request);

  // 3. Зливаємо файли cookie з Supabase (включаючи auth) у локалізовану відповідь
  supabaseResponse.cookies.getAll().forEach((cookie) => {
    intlResponse.cookies.set(cookie.name, cookie.value);
  });

  return intlResponse;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};

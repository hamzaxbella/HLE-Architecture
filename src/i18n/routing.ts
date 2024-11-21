import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';
import { Locale } from '@/lib/interface';
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['fr', 'en', 'ar'] as Locale[],
 
  // Used when no locale matches
  defaultLocale: 'fr' as Locale
});
 
// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const {Link, redirect, usePathname, useRouter} =
  createNavigation(routing);
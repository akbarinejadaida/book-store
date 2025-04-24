'use client';

import { NavLink } from './nav-link';
import { siteConfig } from '@/config/site.config';
import { mainNavigation } from '@/config/navigation';

export function Header() {
  return (
    <header className="w-full h-21 bg-background">
      <div className="h-full w-full flex items-center justify-between container px-6 lg:px-10 relative">
        {/* Logo */}
        <span className="font-secondary font-semibold text-3xl leading-7 text-foreground">
          {siteConfig.name}
        </span>

        {/* Navigation */}
        <div className="flex items-center gap-7">
          {mainNavigation.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              className="font-primary font-bold text-sm leading-4 text-foreground hidden lg:block"
            >
              {item.name}
            </NavLink>
          ))}

          {/* Sign In Button */}
          <NavLink
            href="/login"
            className="flex items-center justify-center h-12 px-6 py-4 gap-3 bg-primary rounded-[90px]"
          >
            <span className="font-primary font-bold text-base leading-4 text-primary-foreground text-center">
              Sign In
            </span>
          </NavLink>
        </div>
      </div>
    </header>
  );
} 
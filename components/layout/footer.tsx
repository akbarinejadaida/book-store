'use client';

import { NavLink } from './nav-link';
import { footerNavigation, socialLinks } from '@/config/navigation';
import { InputWithIcon } from '../ui/input-with-icon';
import { FiArrowUp } from 'react-icons/fi';

export function Footer() {
  const handleEmailSubmit = (email: string) => {
    console.log('Email submitted:', email);
  };

  return (
    <footer className="w-full bg-background relative">
      <div className="container w-full grid grid-cols-1 lg:grid-cols-4 items-start lg:items-center justify-between gap-8 lg:gap-4 py-8 px-4 sm:px-6 lg:px-10">
        {/* Logo and Social Links */}
        <div className="flex flex-col gap-4 lg:gap-7 col-span-1">
          <span className="font-secondary font-semibold text-lg sm:text-xl text-muted">
            Building
          </span>

          {/* Social Links */}
          <div className="flex items-center gap-3 sm:gap-4">
            {socialLinks.map((link) => (
              <NavLink
                key={link.name}
                href={link.href}
                className="text-muted hover:text-foreground transition-colors"
                aria-label={link.name}
              >
                <link.icon className="w-4 h-4 sm:w-5 sm:h-5" />
              </NavLink>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <nav className="col-span-1 lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 items-start gap-4 sm:gap-8 w-full lg:w-auto">
          {footerNavigation.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              className="font-primary text-sm text-muted-light hover:text-foreground transition-colors whitespace-nowrap"
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Email Input */}
        <div className="flex flex-col gap-4 w-full col-span-1">
          <h4 className="font-secondary font-bold text-xs uppercase text-foreground">
            Join our community 🔥
          </h4>

          <InputWithIcon
            type="email"
            name="email"
            placeholder="Enter your email"
            Icon={FiArrowUp}
            onSubmit={handleEmailSubmit}
            iconClassName="rotate-90 text-primary-foreground bg-primary"
            className="w-full sm:max-w-[320px]"
          />
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-muted-background py-4 sm:py-6">
        <p className="container px-4 sm:px-6 lg:px-10 font-secondary font-normal text-[11px] sm:text-xs leading-5 text-muted text-center lg:text-left">
          Copyright © {new Date().getFullYear()} UI8 LLC. All rights reserved
        </p>
      </div>
    </footer>
  );
} 
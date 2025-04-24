'use client';

import Image from 'next/image';
import { InputWithIcon } from '@/components/ui/input-with-icon';
import { FiArrowRight } from 'react-icons/fi';

export function Newsletter() {
  return (
    <section className="relative flex items-center justify-center bg-primary rounded-2xl px-4 py-22 sm:p-16">
      <Image
        src="/decorator.png"
        alt="Decorative element"
        width={114}
        height={138}
        className="absolute right-1/12 -translate-x-1/2 top-1/2 -translate-y-1/2 object-contain animate-float z-0"
      />

      <Image
        src="/newsletter-icon.svg"
        alt="Newsletter"
        width={378}
        height={378}
        className="absolute w-1/5 hidden lg:block -bottom-1/5 left-0 object-contain z-0"
      />

      <div className="flex flex-col items-center gap-8 max-w-xl w-full z-0">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-primary-foreground mb-2">
          Join our newsletter 🎉
        </h2>
        
        <InputWithIcon 
          type='email'
          className="w-full bg-background rounded-full" 
          iconClassName="bg-secondary text-secondary-foreground" 
          name="newsletter-email" 
          placeholder="Enter your email" 
          Icon={FiArrowRight} 
        />
      </div>
    </section>
  );
} 
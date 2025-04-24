'use client';

import { FiSearch } from 'react-icons/fi';
import { InputWithIcon } from '../ui/input-with-icon';
import Image from 'next/image';

export function Hero() {
  const handleSearch = (value: string) => {
    console.log('Search query:', value);
  };

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Content */}
      <div className="max-w-2xl flex flex-col gap-4 lg:gap-6">
        <h1 className="font-secondary text-4xl lg:text-5xl font-bold leading-tight">
          The{' '}
          <span className="text-secondary">Smart</span>
          <br />
          {' '}Choice For{' '}
          <span className="text-secondary">Future</span>
        </h1>

        <p className="text-base lg:text-lg text-muted-foreground max-w-lg">
          Elearn is a global training provider based across the UK that
          specialises in accredited and bespoke training courses. We crush the...
        </p>

        <div className="mt-2">
          <InputWithIcon
            type="search"
            name="search"
            placeholder="Search for a course..."
            Icon={FiSearch}
            onSubmit={handleSearch}
            iconClassName='text-secondary-foreground bg-secondary'
          />
        </div>
      </div>

      {/* Illustration */}
      <div className="relative flex items-center justify-center">
        <div className="relative w-full max-w-[500px] aspect-square">
          <Image
            src="/hero.svg"
            alt="People learning online"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
} 
'use client';

import dynamic from 'next/dynamic';

// Dynamically import the carousel component with no SSR
const DynamicTeamCarousel = dynamic(
  () => import('./team-carousel').then((mod) => mod.TeamCarousel),
  { 
    ssr: false,
    loading: () => (
      <div className="flex flex-col gap-4 sm:gap-6 container animate-pulse">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-6 justify-items-center">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-full aspect-square bg-muted rounded-2xl" />
          ))}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 justify-items-center w-full lg:w-[80%] mx-auto">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-full aspect-square bg-muted rounded-2xl" />
          ))}
        </div>
      </div>
    )
  }
);

export function Team() {
  return (
    <section className="flex flex-col gap-8 sm:gap-10 px-2 sm:px-4 py-10 sm:py-20 bg-background-muted rounded-2xl">
      <div className="text-center space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold">Meet Our Team</h2>
        <p className="text-muted-foreground text-sm sm:text-base">300+ superhost</p>
      </div>

      <DynamicTeamCarousel />
    </section>
  );
} 
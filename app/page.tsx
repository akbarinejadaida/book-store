import { Hero } from '@/components/sections/hero';
import { Features } from '@/components/sections/features';
import { Tracks } from '@/components/sections/tracks';
import { PremiumLearning } from '@/components/sections/premium-learning';
import { Testimonials } from '@/components/sections/testimonials';
import { Team } from '@/components/sections/team';
import { Newsletter } from '@/components/sections/newsletter';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col container py-24 px-6 lg:px-10 gap-24">      
      <Hero />
      <Features />
      <Tracks />
      <PremiumLearning />
      <Testimonials />
      <Team />
      <Newsletter />
    </main>
  );
}

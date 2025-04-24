import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface FeatureItemProps {
  number: string;
  title: string;
  description: string;
  badgeClassName?: string;
}

function FeatureItem({ number, title, description, badgeClassName }: FeatureItemProps) {
  return (
    <div className="space-y-4">
      <Badge className={cn("w-10 h-6 flex items-center justify-center rounded-full", badgeClassName)}>
        {number}
      </Badge>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

export function PremiumLearning() {
  return (
    <section className="container grid lg:grid-cols-2 gap-10 items-center">
      <div className="space-y-10">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold">
            Premium{' '}
            <span className="text-secondary">Learning</span>
            <br />
            Experience
          </h2>
        </div>

        <div className="space-y-10">
          <FeatureItem
            number="01"
            title="Easily Accessible"
            description="Learning Will fell Very Comfortable With Courslab."
            badgeClassName='bg-accent text-accent-foreground'
          />
          <FeatureItem
            number="02"
            title="Fun learning expe"
            description="Learning Will fell Very Comfortable With Courslab."
            badgeClassName='bg-tertiary text-tertiary-foreground'
          />
        </div>
      </div>

      <div className="relative h-[500px]">
        <Image
          src="/premium-learning.svg"
          alt="Premium Learning Experience"
          fill
          className="object-contain"
        />
      </div>
    </section>
  );
} 
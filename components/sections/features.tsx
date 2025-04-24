'use client';

import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { featuresData } from '@/data/features';

interface FeatureCardProps {
  icon: string;
  title: React.ReactNode;
  subtitle: string;
  id?: string;
}

function FeatureCard({ icon, title, subtitle }: FeatureCardProps) {
  return (
    <div className="flex items-center justify-center gap-7.5">
      <div className="relative w-25 h-25 shrink-0 rounded-2xl bg-background/10 flex items-center justify-center">
        <Image
          src={icon}
          alt={`${title}`}
          width={60}
          height={60}
          className="object-contain w-15 h-15"
        />
      </div>
      <div className="space-y-1">
        <h3 className="font-secondary font-semibold text-2xl">
          {title}
        </h3>
        
        <Badge className="bg-muted-background text-muted">
          {subtitle}
        </Badge>
      </div>
    </div>
  );
}

export function Features() {
  return (
    <div className="p-10 lg:p-16 bg-primary text-primary-foreground rounded-2xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {featuresData.map((feature) => (
        <FeatureCard
          key={feature.id}
          {...feature}
        />
      ))}
    </div>
  );
} 
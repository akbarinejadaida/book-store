'use client';

import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { memo } from 'react';

export interface FeatureCardProps {
  icon: string;
  title: React.ReactNode;
  subtitle: string;
  id?: string;
}

const FeatureCard = memo(function FeatureCard({ icon, title, subtitle }: FeatureCardProps) {
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
});

FeatureCard.displayName = 'FeatureCard';

export { FeatureCard }; 
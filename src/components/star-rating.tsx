import { StarIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

export function StarRating({
  rating,
  className,
  size = 'default',
}: {
  rating: number;
  className?: string;
  size?: 'default' | 'sm';
}) {
  const iconClass = size === 'sm' ? 'size-3.5' : 'size-4';

  return (
    <div
      className={cn('flex items-center gap-0.5', className)}
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }, (_, index) => (
        <StarIcon
          key={index}
          className={cn(
            iconClass,
            index < rating
              ? 'fill-amber-400 text-amber-400'
              : 'fill-muted text-muted-foreground/30',
          )}
        />
      ))}
    </div>
  );
}

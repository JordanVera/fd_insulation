import { QuoteIcon } from 'lucide-react';

import { StarRating } from '@/components/star-rating';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import type { Review } from '@/lib/reviews';

function initials(name: string) {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();
}

export function ReviewCard({ review }: { review: Review }) {
  return (
    <Card className="h-full border-border bg-card shadow-sm dark:shadow-none">
      <CardContent className="flex h-full flex-col p-6">
        <div className="mb-4 flex items-start justify-between gap-3">
          <StarRating rating={review.rating} />
          <QuoteIcon className="size-5 shrink-0 text-primary/30" aria-hidden="true" />
        </div>
        <blockquote className="flex-1 text-sm leading-relaxed text-muted-foreground">
          &ldquo;{review.body}&rdquo;
        </blockquote>
        <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
          <Avatar size="sm">
            <AvatarFallback className="bg-primary/10 text-xs font-semibold text-primary">
              {initials(review.author)}
            </AvatarFallback>
          </Avatar>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold">{review.author}</p>
            <p className="text-xs text-muted-foreground">{review.date}</p>
          </div>
          {review.service ? (
            <Badge variant="outline" className="hidden shrink-0 text-[10px] sm:inline-flex">
              {review.service}
            </Badge>
          ) : null}
        </div>
      </CardContent>
    </Card>
  );
}

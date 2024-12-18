import { cn } from '@/lib/utils';
import { Link } from '@tanstack/react-router';
import React from 'react';
export const Heading = React.forwardRef<
  HTMLDivElement,
  { size?: 'sm' | 'md' | 'lg'; className?: string }
>(({ size = 'lg', className }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('flex flex-col w-full justify-center gap-2', className)}
    >
      <h1
        className={cn(
          'font-bold tracking-tighter',
          size === 'sm' ? 'text-2xl' : size === 'md' ? 'text-3xl' : 'text-5xl'
        )}
      >
        <Link to="/" className="hover:text-primary">
          SearchGit
        </Link>
      </h1>
      {size !== 'sm' && (
        <p className=" text-muted-foreground tracking-tighter">
          A GitHub organization search.
        </p>
      )}
    </div>
  );
});

import * as React from 'react';

import { cn } from '@/lib/utils';

const Input = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<'input'> & {
    leftAdornment?: React.ReactNode;
    rightAdornment?: React.ReactNode;
  }
>(({ className, leftAdornment, rightAdornment, type, ...props }, ref) => {
  return (
    <div className="flex items-center px-3 border border-input rounded-lg w-full">
      {leftAdornment}
      <input
        type={type}
        className={cn(
          'flex h-10 w-full rounded-md bg-transparent py-3  outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      />
      {rightAdornment}
    </div>
  );
});
Input.displayName = 'Input';

export { Input };

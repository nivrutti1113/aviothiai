import React from 'react';

const Button = ({ children, className, variant, size, ...props }) => {
  // Default styles
  let baseClasses = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background ";
  
  // Variant styles
  if (variant === "outline") {
    baseClasses += "border border-input hover:bg-accent hover:text-accent-foreground ";
  } else if (variant === "secondary") {
    baseClasses += "bg-secondary text-secondary-foreground hover:bg-secondary/80 ";
  } else if (variant === "ghost") {
    baseClasses += "hover:bg-accent hover:text-accent-foreground ";
  } else if (variant === "link") {
    baseClasses += "underline-offset-4 hover:underline text-primary ";
  } else {
    // Default variant (primary)
    baseClasses += "bg-primary text-primary-foreground hover:bg-primary/90 ";
  }
  
  // Size styles
  if (size === "sm") {
    baseClasses += "h-9 px-3 rounded-md ";
  } else if (size === "lg") {
    baseClasses += "h-11 px-8 rounded-md ";
  } else if (size === "icon") {
    baseClasses += "h-10 w-10 ";
  } else {
    // Default size
    baseClasses += "h-10 py-2 px-4 ";
  }
  
  return (
    <button
      className={baseClasses + (className || '')}
      {...props}
    >
      {children}
    </button>
  );
};

export { Button };
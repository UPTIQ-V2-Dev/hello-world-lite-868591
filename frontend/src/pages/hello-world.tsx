import { cn } from '../lib/utils';

export const HelloWorldPage = () => {
  return (
    <div className={cn(
      "min-h-screen w-full",
      "flex flex-col items-center justify-center",
      "bg-background text-foreground",
      "px-4 py-8"
    )}>
      <div className="text-center max-w-2xl mx-auto">
        <h1 className={cn(
          "text-4xl md:text-6xl font-bold",
          "bg-gradient-to-r from-primary to-primary/60",
          "bg-clip-text text-transparent",
          "mb-6"
        )}>
          Hello, World!
        </h1>
        
        <p className={cn(
          "text-lg md:text-xl",
          "text-muted-foreground",
          "leading-relaxed"
        )}>
          Welcome to your minimal React application built with Vite, TypeScript, and ShadCN/UI components.
        </p>
        
        <div className={cn(
          "mt-8 p-4",
          "border border-border rounded-lg",
          "bg-card text-card-foreground",
          "shadow-sm"
        )}>
          <p className="text-sm text-muted-foreground">
            This is a simple HelloWorld implementation using Tailwind CSS and responsive design.
          </p>
        </div>
      </div>
    </div>
  );
};
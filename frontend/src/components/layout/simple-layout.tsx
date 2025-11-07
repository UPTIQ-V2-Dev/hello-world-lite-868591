import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../ui/button';
import { cn } from '../../lib/utils';

interface SimpleLayoutProps {
  children: ReactNode;
}

export const SimpleLayout = ({ children }: SimpleLayoutProps) => {
  const location = useLocation();
  
  const navItems = [
    { path: '/hello', label: 'Basic Hello' },
    { path: '/enhanced', label: 'Enhanced Hello' }
  ];
  
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 max-w-screen-2xl items-center">
          <div className="mr-4 flex">
            <Link to="/hello" className="mr-6 flex items-center space-x-2">
              <span className="font-bold text-xl bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                HelloWorld App
              </span>
            </Link>
            
            <nav className="flex items-center gap-6 text-sm">
              {navItems.map((item) => (
                <Button
                  key={item.path}
                  asChild
                  variant={location.pathname === item.path ? "default" : "ghost"}
                  size="sm"
                >
                  <Link 
                    to={item.path}
                    className={cn(
                      "transition-colors hover:text-foreground/80",
                      location.pathname === item.path ? "text-foreground" : "text-foreground/60"
                    )}
                  >
                    {item.label}
                  </Link>
                </Button>
              ))}
            </nav>
          </div>
          
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <span className="text-sm text-muted-foreground hidden md:inline">
                Minimal React HelloWorld Application
              </span>
            </div>
          </div>
        </div>
      </header>
      
      <main className="flex-1">
        {children}
      </main>
      
      <footer className="border-t border-border/40 py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-sm text-muted-foreground">
            Built with React 19, Vite, TypeScript, and ShadCN/UI
          </p>
          <p className="text-sm text-muted-foreground">
            Minimal HelloWorld Demo Application
          </p>
        </div>
      </footer>
    </div>
  );
};
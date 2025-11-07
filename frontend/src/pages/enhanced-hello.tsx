import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { cn } from '../lib/utils';

export const EnhancedHelloPage = () => {
  const [clickCount, setClickCount] = useState(0);
  const [greeting, setGreeting] = useState('Hello, World!');
  
  const greetings = [
    'Hello, World! 👋',
    'Bonjour, Monde! 🇫🇷',
    'Hola, Mundo! 🇪🇸',
    'Hallo, Welt! 🇩🇪',
    'Ciao, Mondo! 🇮🇹',
    'こんにちは、世界！ 🇯🇵',
    'Привет, мир! 🇷🇺',
    'Hello, World! 🌍'
  ];

  const handleGreetingToggle = () => {
    const nextCount = clickCount + 1;
    setClickCount(nextCount);
    setGreeting(greetings[nextCount % greetings.length]);
  };

  const resetGreeting = () => {
    setClickCount(0);
    setGreeting('Hello, World!');
  };

  return (
    <div className={cn(
      "min-h-screen w-full",
      "flex flex-col items-center justify-center",
      "bg-background",
      "px-4 py-8"
    )}>
      <div className="max-w-md w-full mx-auto">
        <Card className="shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className={cn(
              "text-3xl font-bold",
              "bg-gradient-to-r from-primary to-primary/60",
              "bg-clip-text text-transparent"
            )}>
              {greeting}
            </CardTitle>
            <CardDescription className="text-lg">
              Interactive HelloWorld with ShadCN/UI
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div className="text-center">
              <Badge variant="secondary" className="mb-4">
                Clicks: {clickCount}
              </Badge>
              
              <p className="text-sm text-muted-foreground mb-6">
                Click the button below to cycle through different language greetings!
              </p>
            </div>
            
            <div className="flex flex-col gap-3">
              <Button 
                onClick={handleGreetingToggle}
                className="w-full"
                size="lg"
              >
                Change Greeting
              </Button>
              
              <Button 
                onClick={resetGreeting}
                variant="outline"
                className="w-full"
                disabled={clickCount === 0}
              >
                Reset
              </Button>
            </div>
            
            <div className={cn(
              "p-4 rounded-lg",
              "bg-muted/50 border border-border",
              "text-center"
            )}>
              <p className="text-xs text-muted-foreground">
                Built with React 19, TypeScript, Vite, and ShadCN/UI
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
import { Navbar } from '@/components/navbar/Navbar';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Demo content to show navbar behavior */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
            Stripe-Style Navbar Demo
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hover over <strong>Solutions</strong> in the navbar to see the mega menu.
            On mobile, tap the hamburger menu and then tap Solutions.
          </p>
          
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            <div className="p-6 rounded-xl border border-border bg-card">
              <h3 className="font-semibold text-foreground mb-2">Desktop Hover</h3>
              <p className="text-sm text-muted-foreground">
                Hover over Solutions to reveal the mega menu with smooth animation.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-border bg-card">
              <h3 className="font-semibold text-foreground mb-2">2-Column Grid</h3>
              <p className="text-sm text-muted-foreground">
                Items are displayed in a responsive 2-column grid layout.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-border bg-card">
              <h3 className="font-semibold text-foreground mb-2">Mobile Friendly</h3>
              <p className="text-sm text-muted-foreground">
                Full-screen slide-in menu with back navigation for Solutions.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;

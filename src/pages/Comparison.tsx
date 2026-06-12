import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Comparison() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl font-black mb-4">Compare Gadgets</h1>
        <p className="text-muted-foreground mb-8">Use Meku to generate content for this page</p>
        <div className="p-12 bg-gray-50 rounded-3xl border-2 border-dashed border-primary/10">
          <p className="text-xl font-bold text-foreground">Coming soon</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
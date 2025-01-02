import React from 'react';
import { Newspaper, Shield } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-indigo-600 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8" />
            <h1 className="text-2xl font-bold">Veracity Vigilance</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Newspaper className="h-6 w-6" />
            <span className="font-medium">Fake News Detection</span>
          </div>
        </div>
      </div>
    </header>
  );
}
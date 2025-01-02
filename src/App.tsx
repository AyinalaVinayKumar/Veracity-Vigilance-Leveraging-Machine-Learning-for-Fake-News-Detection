import React from 'react';
import { Header } from './components/Header';
import { NewsAnalyzer } from './components/NewsAnalyzer';
import { MethodologySection } from './components/MethodologySection';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Detect Fake News with AI
          </h2>
          <p className="text-lg text-gray-600">
            Our advanced machine learning algorithms analyze content to help identify potential misinformation.
          </p>
        </div>
        <NewsAnalyzer />
      </main>
      <MethodologySection />
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Veracity Vigilance. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
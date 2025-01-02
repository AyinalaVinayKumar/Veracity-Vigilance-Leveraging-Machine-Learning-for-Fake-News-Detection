import React from 'react';
import { Brain, Database, LineChart, Code2 } from 'lucide-react';

export function MethodologySection() {
  const steps = [
    {
      icon: <Database className="h-6 w-6" />,
      title: 'Data Collection',
      description: 'Gathering diverse datasets of genuine and fake news articles from verified sources.'
    },
    {
      icon: <Code2 className="h-6 w-6" />,
      title: 'Preprocessing',
      description: 'Advanced text processing using NLP techniques for optimal analysis.'
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: 'ML Analysis',
      description: 'Utilizing state-of-the-art machine learning models for classification.'
    },
    {
      icon: <LineChart className="h-6 w-6" />,
      title: 'Evaluation',
      description: 'Comprehensive accuracy assessment and continuous model improvement.'
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Methodology</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-full mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
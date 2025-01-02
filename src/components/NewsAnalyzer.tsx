import React, { useState } from 'react';
import { AlertCircle, CheckCircle, Loader2 } from 'lucide-react';

export function NewsAnalyzer() {
  const [text, setText] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<null | { isFake: boolean; confidence: number }>(null);

  const analyzeText = async () => {
    setIsAnalyzing(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setResult({
      isFake: Math.random() > 0.5,
      confidence: Math.random() * 100
    });
    setIsAnalyzing(false);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <textarea
        className="w-full h-48 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        placeholder="Paste news article or content here for analysis..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      
      <button
        className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50"
        onClick={analyzeText}
        disabled={!text.trim() || isAnalyzing}
      >
        {isAnalyzing ? (
          <span className="flex items-center">
            <Loader2 className="animate-spin mr-2" />
            Analyzing...
          </span>
        ) : (
          'Analyze Content'
        )}
      </button>

      {result && (
        <div className={`mt-6 p-4 rounded-lg ${result.isFake ? 'bg-red-50' : 'bg-green-50'}`}>
          <div className="flex items-center">
            {result.isFake ? (
              <AlertCircle className="h-6 w-6 text-red-500 mr-2" />
            ) : (
              <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
            )}
            <h3 className={`font-semibold ${result.isFake ? 'text-red-700' : 'text-green-700'}`}>
              {result.isFake ? 'Potentially Fake News' : 'Likely Authentic Content'}
            </h3>
          </div>
          <p className="mt-2 text-gray-600">
            Confidence Score: {result.confidence.toFixed(1)}%
          </p>
        </div>
      )}
    </div>
  );
}
import React from 'react';
import { Brain, Globe, ChevronRight, Book } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <p className="text-sm text-center text-gray-400">January 15, 2025</p>
      </div>

      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-4 text-center mb-12">
        <h1 className="text-5xl md:text-7xl font-display mb-6">
          Introducing Gemma 2 Swahili
        </h1>
        <p className="text-xl text-gray-400 mb-8">
          A comprehensive suite of Swahili language models, bringing advanced AI capabilities to 200M+ speakers.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="bg-white text-black px-6 py-2 rounded-full flex items-center hover:bg-gray-200">
            Try Models
            <ChevronRight className="ml-2 h-4 w-4" />
          </button>
          <button className="text-white border border-white/20 px-6 py-2 rounded-full flex items-center hover:bg-white/10">
            Read Paper
            <Book className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="max-w-6xl mx-auto px-4 mb-24">
        <div className="rounded-lg overflow-hidden">
          <img
            src="/public/images/kilimanjaro.jpg"
            alt="Kilimanjaro landscape"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Feature Icons */}
      <div className="max-w-2xl mx-auto px-4 mb-24">
        <div className="bg-white/5 rounded-2xl p-8">
          <div className="grid grid-cols-5 gap-4">
            <div className="flex flex-col items-center">
              <Brain className="h-8 w-8" />
              <span className="text-sm mt-2">2B Model</span>
            </div>
            <div className="flex flex-col items-center">
              <Brain className="h-8 w-8" />
              <span className="text-sm mt-2">9B Model</span>
            </div>
            <div className="flex flex-col items-center">
              <Globe className="h-8 w-8" />
              <span className="text-sm mt-2">27B Model</span>
            </div>
            <div className="flex flex-col items-center">
              <Brain className="h-8 w-8" />
              <span className="text-sm mt-2">Preview</span>
            </div>
            <div className="flex flex-col items-center">
              <Globe className="h-8 w-8" />
              <span className="text-sm mt-2">Base</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="max-w-3xl mx-auto px-4 text-center mb-24">
        <p className="text-gray-400 leading-relaxed">
          Our mission is to advance AI technology so that everyone can access and benefit from it.
          Today, we are releasing our Swahili language model suite, and we plan to roll out even more
          intelligence and advanced tools to the community for free.
        </p>
      </div>

      {/* Benchmarks */}
      <div className="max-w-4xl mx-auto px-4 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/5 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-2">Swahili MMLU</h3>
            <p className="text-4xl font-bold mb-2">57.89%</p>
            <p className="text-sm text-gray-400">Accuracy on massive multitask language understanding</p>
          </div>
          <div className="bg-white/5 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-2">Sentiment Analysis</h3>
            <p className="text-4xl font-bold mb-2">90.00%</p>
            <p className="text-sm text-gray-400">Accuracy on Swahili sentiment classification</p>
          </div>
          <div className="bg-white/5 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-2">Translation</h3>
            <p className="text-4xl font-bold mb-2">0.49</p>
            <p className="text-sm text-gray-400">BLEU score on English-Swahili translation</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

import React from 'react';
import { BookOpen, Heart, Pen, Coffee } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            About the Author
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Sharing stories, one chapter at a time
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  My Writing Journey
                </h2>
                <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p>
                    I've been a storyteller for as long as I can remember. What started as scribbled tales 
                    in elementary school notebooks has evolved into a passion for crafting immersive worlds 
                    and exploring the depths of human experience through fiction.
                  </p>
                  <p>
                    My work spans multiple genres, but at the heart of every story is a fundamental belief 
                    in the power of narrative to connect us. Whether I'm writing about mystical gardens, 
                    futuristic societies, or the simple moments that define our lives, I'm always searching 
                    for the universal truths that bind us together.
                  </p>
                  <p>
                    This website represents my commitment to making literature accessible to everyone. 
                    In a world where books can be expensive and availability limited, I want to remove 
                    those barriers and share my stories freely with anyone who wants to read them.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                    <Pen className="mr-2 h-5 w-5 text-amber-600 dark:text-amber-400" />
                    Writing Stats
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Books Published</span>
                      <span className="font-medium text-gray-900 dark:text-white">4</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Genres Explored</span>
                      <span className="font-medium text-gray-900 dark:text-white">4</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Started Writing</span>
                      <span className="font-medium text-gray-900 dark:text-white">2023</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Writing Philosophy */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Why I Write
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 text-center">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full w-fit mx-auto mb-4">
                    <Heart className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Connection</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Stories have the power to bridge gaps between people, cultures, and experiences.
                  </p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 text-center">
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-full w-fit mx-auto mb-4">
                    <BookOpen className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Accessibility</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Great literature should be available to everyone, regardless of economic circumstances.
                  </p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 text-center">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-full w-fit mx-auto mb-4">
                    <Coffee className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Joy</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Reading should be a pleasure, an escape, and a source of wonder in our daily lives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
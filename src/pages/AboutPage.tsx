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
                    My name is Alex Osam Kakra. I’m an educator, speaker, and inspirational writer with a deep passion for guiding young people through the different seasons of life. With a background in Mathematics Education from the University of Education, Ghana, and further studies in Austria and Germany, I bring a balance of intellectual depth and spiritual insight to my work.
                  </p>
                  <p>
                    Writing, for me, has always been about purpose. Through books like <strong>Loyalty and Disloyalty</strong> and <strong>The Book of Remembrance</strong>, I’ve tried to speak to the heart—offering wisdom, encouragement, and guidance for anyone walking through life’s complexities.
                  </p>
                  <p>
                    My latest book, <strong>Sunrise, Sunshine, Sunset</strong>, is perhaps my most poetic and personal message yet. It’s a reflection on life as a journey of light, where each season carries meaning. From the fresh hope of sunrise to the fullness of sunshine and the quiet wisdom of sunset, every phase of life has something sacred to offer.
                  </p>
                  <p>
                    I write to inspire and to remind others that their journey matters. If something I’ve written brings clarity, comfort, or courage to even one person, then it’s worth it.
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
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Guidance</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    I write to help others navigate the changing seasons of life and find clarity when it’s needed most.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 text-center">
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-full w-fit mx-auto mb-4">
                    <BookOpen className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Purpose</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Every story I write is rooted in the belief that words can heal, teach, and uplift.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 text-center">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-full w-fit mx-auto mb-4">
                    <Coffee className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Simplicity</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    I believe in writing that speaks simply and honestly, so that everyone can feel seen and understood.
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

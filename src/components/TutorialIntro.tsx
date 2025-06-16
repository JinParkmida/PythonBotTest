import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bot, 
  Sparkles, 
  Code, 
  Zap, 
  Heart,
  ArrowRight,
  CheckCircle,
  Play,
  Users,
  Target
} from 'lucide-react';

interface TutorialIntroProps {
  onStart: () => void;
}

export const TutorialIntro: React.FC<TutorialIntroProps> = ({ onStart }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Welcome to BotCraft Academy!",
      subtitle: "Your First Bot: From Zero to Hero",
      content: "Have you ever thought coding was only for super-smart tech gurus? Think again! This guide is for everyone, especially if you're feeling a bit nervous or think you don't know enough.",
      icon: Bot,
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "No Magic Spells Required!",
      subtitle: "If you can follow a recipe, you can build a bot",
      content: "Forget everything you think you know about 'coding difficulty.' We'll break it down so simply, you'll be amazed at what you create. Think of it less as a complex AI and more like teaching a friendly parrot some cool tricks.",
      icon: Sparkles,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "What You'll Build",
      subtitle: "A real, interactive bot that talks to the internet!",
      content: "By the end of this tutorial, you'll have created a bot that can listen to you, think about what you said, talk back, and even fetch jokes from the internet. That's a real achievement!",
      icon: Code,
      color: "from-green-500 to-blue-500"
    },
    {
      title: "Perfect for Codedx Challenge",
      subtitle: "Ready to enter with confidence",
      content: "This tutorial prepares you perfectly for the Codedx 'Build-A-Bot' challenge. You'll learn all the core concepts: input/output, APIs, and creative customization. No more intimidation!",
      icon: Target,
      color: "from-orange-500 to-red-500"
    }
  ];

  const features = [
    { icon: Zap, text: "Zero assumptions - we explain everything" },
    { icon: Heart, text: "Beginner-friendly with encouraging tone" },
    { icon: Users, text: "Step-by-step with copy-paste examples" },
    { icon: CheckCircle, text: "Celebrate every small win along the way" }
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      {/* Background Animation */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/10 rounded-full"
            animate={{
              x: [0, Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200)],
              y: [0, Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800)],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="backdrop-blur-lg bg-slate-800/30 rounded-3xl border border-slate-700/50 overflow-hidden"
          >
            {/* Header */}
            <div className="p-8 text-center">
              <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${slides[currentSlide].color} flex items-center justify-center`}>
                {React.createElement(slides[currentSlide].icon, { className: "w-10 h-10 text-white" })}
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                {slides[currentSlide].title}
              </h1>
              
              <p className="text-xl text-blue-300 mb-6">
                {slides[currentSlide].subtitle}
              </p>
              
              <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
                {slides[currentSlide].content}
              </p>
            </div>

            {/* Features (only on first slide) */}
            {currentSlide === 0 && (
              <div className="px-8 pb-8">
                <div className="grid md:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="flex items-center space-x-3 p-4 bg-slate-900/50 rounded-xl"
                    >
                      <feature.icon className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-slate-300">{feature.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="p-8 border-t border-slate-700/50">
              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === currentSlide 
                          ? 'bg-blue-400 scale-125' 
                          : 'bg-slate-600 hover:bg-slate-500'
                      }`}
                    />
                  ))}
                </div>

                <div className="flex items-center space-x-4">
                  {currentSlide > 0 && (
                    <button
                      onClick={prevSlide}
                      className="px-4 py-2 text-slate-400 hover:text-white transition-colors"
                    >
                      Previous
                    </button>
                  )}
                  
                  {currentSlide < slides.length - 1 ? (
                    <button
                      onClick={nextSlide}
                      className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all flex items-center space-x-2 shadow-lg"
                    >
                      <span>Next</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      onClick={onStart}
                      className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl hover:from-green-600 hover:to-emerald-600 transition-all flex items-center space-x-2 shadow-lg text-lg font-semibold"
                    >
                      <Play className="w-5 h-5" />
                      <span>Start Building Your Bot!</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Encouragement Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-8"
        >
          <p className="text-slate-400 text-lg">
            Ready to surprise yourself with what you can create? Let's do this! 🚀
          </p>
        </motion.div>
      </div>
    </div>
  );
};
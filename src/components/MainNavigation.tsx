import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Map, 
  Target, 
  User, 
  Settings,
  Zap,
  BookOpen,
  TrendingUp
} from 'lucide-react';
import { LearningMode, UserProfile } from '../types';

interface MainNavigationProps {
  currentMode: LearningMode;
  onModeChange: (mode: LearningMode) => void;
  onProfileClick: () => void;
  userProfile: UserProfile;
}

export const MainNavigation: React.FC<MainNavigationProps> = ({
  currentMode,
  onModeChange,
  onProfileClick,
  userProfile
}) => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-slate-900/80 border-b border-slate-700/50"
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">PyFlow</span>
          </div>

          {/* Mode Switcher */}
          <div className="flex items-center space-x-1 bg-slate-800/50 rounded-lg p-1">
            <button
              onClick={() => onModeChange('explore')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all ${
                currentMode === 'explore'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <Map className="w-4 h-4" />
              <span className="hidden sm:inline">Explore</span>
            </button>
            <button
              onClick={() => onModeChange('guided')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all ${
                currentMode === 'guided'
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <Target className="w-4 h-4" />
              <span className="hidden sm:inline">Guided</span>
            </button>
          </div>

          {/* Quick Stats */}
          <div className="hidden md:flex items-center space-x-6 text-sm">
            <div className="flex items-center space-x-2 text-slate-300">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span>7 day streak</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-300">
              <BookOpen className="w-4 h-4 text-blue-400" />
              <span>12/50 concepts</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-300">
              <TrendingUp className="w-4 h-4 text-green-400" />
              <span>Level {userProfile.experience}</span>
            </div>
          </div>

          {/* Profile & Settings */}
          <div className="flex items-center space-x-2">
            <button
              onClick={onProfileClick}
              className="p-2 rounded-lg bg-slate-800/50 text-slate-300 hover:text-white hover:bg-slate-700/50 transition-all"
            >
              <User className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-lg bg-slate-800/50 text-slate-300 hover:text-white hover:bg-slate-700/50 transition-all">
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};
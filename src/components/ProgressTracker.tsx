import React from 'react';
import { motion } from 'framer-motion';
import { 
  Trophy, 
  Flame, 
  Target, 
  TrendingUp,
  Award,
  Calendar
} from 'lucide-react';

interface ProgressTrackerProps {
  completedAtoms: Set<string>;
  totalAtoms: number;
  currentStreak: number;
}

export const ProgressTracker: React.FC<ProgressTrackerProps> = ({
  completedAtoms,
  totalAtoms,
  currentStreak
}) => {
  const completionPercentage = (completedAtoms.size / totalAtoms) * 100;

  const achievements = [
    { 
      id: 'first-concept',
      name: 'First Steps',
      description: 'Completed your first concept',
      unlocked: completedAtoms.size >= 1,
      icon: Target
    },
    {
      id: 'streak-7',
      name: 'Week Warrior',
      description: '7-day learning streak',
      unlocked: currentStreak >= 7,
      icon: Flame
    },
    {
      id: 'concepts-10',
      name: 'Concept Master',
      description: 'Completed 10 concepts',
      unlocked: completedAtoms.size >= 10,
      icon: Trophy
    }
  ];

  return (
    <div className="space-y-6">
      {/* Overall Progress */}
      <div className="backdrop-blur-lg bg-slate-800/30 rounded-xl border border-slate-700/50 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white">Progress Overview</h3>
          <div className="text-right">
            <p className="text-2xl font-bold text-white">{Math.round(completionPercentage)}%</p>
            <p className="text-xs text-slate-400">Complete</p>
          </div>
        </div>
        
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-slate-300">Concepts Mastered</span>
              <span className="text-slate-400">{completedAtoms.size}/{totalAtoms}</span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-2">
              <motion.div 
                className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${completionPercentage}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="bg-slate-900/50 rounded-lg p-3 text-center">
              <Flame className="w-5 h-5 text-orange-400 mx-auto mb-1" />
              <p className="text-lg font-bold text-white">{currentStreak}</p>
              <p className="text-xs text-slate-400">Day Streak</p>
            </div>
            <div className="bg-slate-900/50 rounded-lg p-3 text-center">
              <TrendingUp className="w-5 h-5 text-green-400 mx-auto mb-1" />
              <p className="text-lg font-bold text-white">87%</p>
              <p className="text-xs text-slate-400">Accuracy</p>
            </div>
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="backdrop-blur-lg bg-slate-800/30 rounded-xl border border-slate-700/50 p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Award className="w-5 h-5 text-yellow-400" />
          <h3 className="text-lg font-semibold text-white">Achievements</h3>
        </div>
        
        <div className="space-y-3">
          {achievements.map((achievement) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={achievement.id}
                className={`flex items-center space-x-3 p-3 rounded-lg transition-all ${
                  achievement.unlocked
                    ? 'bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30'
                    : 'bg-slate-900/30 border border-slate-700/50'
                }`}
                animate={achievement.unlocked ? { scale: [1, 1.02, 1] } : {}}
                transition={{ duration: 0.3 }}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                  achievement.unlocked
                    ? 'bg-gradient-to-r from-yellow-400 to-orange-400'
                    : 'bg-slate-700'
                }`}>
                  <Icon className={`w-4 h-4 ${
                    achievement.unlocked ? 'text-white' : 'text-slate-400'
                  }`} />
                </div>
                <div className="flex-1">
                  <p className={`font-medium ${
                    achievement.unlocked ? 'text-white' : 'text-slate-400'
                  }`}>
                    {achievement.name}
                  </p>
                  <p className="text-xs text-slate-500">{achievement.description}</p>
                </div>
                {achievement.unlocked && (
                  <Trophy className="w-4 h-4 text-yellow-400" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Weekly Goal */}
      <div className="backdrop-blur-lg bg-slate-800/30 rounded-xl border border-slate-700/50 p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Calendar className="w-5 h-5 text-blue-400" />
          <h3 className="text-lg font-semibold text-white">Weekly Goal</h3>
        </div>
        
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-slate-300">Complete 5 concepts</span>
            <span className="text-blue-400 font-medium">3/5</span>
          </div>
          <div className="w-full bg-slate-700 rounded-full h-2">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full w-3/5" />
          </div>
          <p className="text-xs text-slate-500">2 more concepts to reach your weekly goal!</p>
        </div>
      </div>
    </div>
  );
};
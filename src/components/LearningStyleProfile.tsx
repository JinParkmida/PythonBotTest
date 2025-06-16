import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Eye, Ear, BookOpen, Hand, Settings, Save } from 'lucide-react';
import { UserProfile, LearningStyle, ExperienceLevel } from '../types';

interface LearningStyleProfileProps {
  userProfile: UserProfile;
  onProfileUpdate: (profile: UserProfile) => void;
  onClose: () => void;
}

const learningStyles = [
  {
    id: 'visual' as LearningStyle,
    name: 'Visual Learner',
    description: 'Learn best with diagrams, charts, and visual representations',
    icon: Eye,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'auditory' as LearningStyle,
    name: 'Auditory Learner',
    description: 'Prefer listening to explanations and verbal instructions',
    icon: Ear,
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'reading' as LearningStyle,
    name: 'Reading/Writing',
    description: 'Learn through reading text and taking detailed notes',
    icon: BookOpen,
    color: 'from-green-500 to-teal-500'
  },
  {
    id: 'kinesthetic' as LearningStyle,
    name: 'Hands-on Learner',
    description: 'Learn by doing, practicing, and interactive experiences',
    icon: Hand,
    color: 'from-orange-500 to-red-500'
  }
];

const experienceLevels = [
  { id: 'beginner' as ExperienceLevel, name: 'Beginner', description: 'New to programming' },
  { id: 'intermediate' as ExperienceLevel, name: 'Intermediate', description: 'Some programming experience' },
  { id: 'advanced' as ExperienceLevel, name: 'Advanced', description: 'Experienced programmer' }
];

export const LearningStyleProfile: React.FC<LearningStyleProfileProps> = ({
  userProfile,
  onProfileUpdate,
  onClose
}) => {
  const [profile, setProfile] = useState(userProfile);

  const handleSave = () => {
    onProfileUpdate(profile);
    localStorage.setItem('pyflow-profile', JSON.stringify(profile));
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-slate-900 rounded-2xl border border-slate-700 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="p-6 border-b border-slate-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <Settings className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Learning Profile</h2>
                <p className="text-slate-400">Customize your learning experience</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-slate-400" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Learning Style */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Learning Style</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {learningStyles.map((style) => {
                const Icon = style.icon;
                const isSelected = profile.learningStyle === style.id;
                
                return (
                  <button
                    key={style.id}
                    onClick={() => setProfile({ ...profile, learningStyle: style.id })}
                    className={`p-4 rounded-xl border-2 transition-all text-left ${
                      isSelected
                        ? 'border-white/30 bg-white/10'
                        : 'border-slate-700 bg-slate-800/50 hover:bg-slate-700/50'
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${style.color} flex items-center justify-center flex-shrink-0`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">{style.name}</h4>
                        <p className="text-sm text-slate-400 mt-1">{style.description}</p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Experience Level */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Experience Level</h3>
            <div className="space-y-2">
              {experienceLevels.map((level) => (
                <button
                  key={level.id}
                  onClick={() => setProfile({ ...profile, experience: level.id })}
                  className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                    profile.experience === level.id
                      ? 'border-white/30 bg-white/10'
                      : 'border-slate-700 bg-slate-800/50 hover:bg-slate-700/50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-white">{level.name}</h4>
                      <p className="text-sm text-slate-400">{level.description}</p>
                    </div>
                    <div className={`w-4 h-4 rounded-full border-2 ${
                      profile.experience === level.id
                        ? 'border-blue-400 bg-blue-400'
                        : 'border-slate-600'
                    }`} />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Learning Preferences */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Learning Preferences</h3>
            <div className="space-y-4">
              <label className="flex items-center justify-between p-4 bg-slate-800/50 rounded-xl">
                <div>
                  <p className="font-medium text-white">Code-First Learning</p>
                  <p className="text-sm text-slate-400">Start with code examples before theory</p>
                </div>
                <input
                  type="checkbox"
                  checked={profile.preferences.codeFirst}
                  onChange={(e) => setProfile({
                    ...profile,
                    preferences: { ...profile.preferences, codeFirst: e.target.checked }
                  })}
                  className="w-5 h-5 rounded bg-slate-700 border-slate-600 text-blue-500 focus:ring-blue-500"
                />
              </label>

              <label className="flex items-center justify-between p-4 bg-slate-800/50 rounded-xl">
                <div>
                  <p className="font-medium text-white">Visual Diagrams</p>
                  <p className="text-sm text-slate-400">Include flowcharts and visual representations</p>
                </div>
                <input
                  type="checkbox"
                  checked={profile.preferences.visualDiagrams}
                  onChange={(e) => setProfile({
                    ...profile,
                    preferences: { ...profile.preferences, visualDiagrams: e.target.checked }
                  })}
                  className="w-5 h-5 rounded bg-slate-700 border-slate-600 text-blue-500 focus:ring-blue-500"
                />
              </label>

              <label className="flex items-center justify-between p-4 bg-slate-800/50 rounded-xl">
                <div>
                  <p className="font-medium text-white">Step-by-Step Approach</p>
                  <p className="text-sm text-slate-400">Break down complex concepts into small steps</p>
                </div>
                <input
                  type="checkbox"
                  checked={profile.preferences.stepByStep}
                  onChange={(e) => setProfile({
                    ...profile,
                    preferences: { ...profile.preferences, stepByStep: e.target.checked }
                  })}
                  className="w-5 h-5 rounded bg-slate-700 border-slate-600 text-blue-500 focus:ring-blue-500"
                />
              </label>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-slate-700 flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-slate-400 hover:text-white transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all flex items-center space-x-2"
          >
            <Save className="w-4 h-4" />
            <span>Save Profile</span>
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};
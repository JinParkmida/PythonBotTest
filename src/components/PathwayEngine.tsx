import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Target, 
  Sparkles, 
  TrendingUp,
  Clock,
  CheckCircle
} from 'lucide-react';
import { ConceptAtomType, UserProfile } from '../types';

interface PathwayEngineProps {
  currentAtom: ConceptAtomType | null;
  userProfile: UserProfile;
  completedAtoms: Set<string>;
  suggestedNext: ConceptAtomType | null;
  onAtomSelect: (atom: ConceptAtomType) => void;
}

export const PathwayEngine: React.FC<PathwayEngineProps> = ({
  currentAtom,
  userProfile,
  completedAtoms,
  suggestedNext,
  onAtomSelect
}) => {
  const getPersonalizedTip = () => {
    switch (userProfile.learningStyle) {
      case 'visual':
        return "Try the diagram view for better visual understanding";
      case 'auditory':
        return "Enable audio explanations for better retention";
      case 'reading':
        return "Focus on the text content for detailed explanations";
      case 'kinesthetic':
        return "Jump into interactive challenges to learn by doing";
      default:
        return "Experiment with different learning modalities";
    }
  };

  return (
    <div className="space-y-6">
      {/* AI Pathway Suggestions */}
      <div className="backdrop-blur-lg bg-slate-800/30 rounded-xl border border-slate-700/50 p-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-white">AI Recommendations</h3>
        </div>

        <div className="space-y-4">
          {/* Personalized Tip */}
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <Target className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-blue-200">Personalized Tip</p>
                <p className="text-sm text-slate-300 mt-1">{getPersonalizedTip()}</p>
              </div>
            </div>
          </div>

          {/* Next Suggested Concept */}
          {suggestedNext && (
            <motion.button
              onClick={() => onAtomSelect(suggestedNext)}
              className="w-full bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg p-4 hover:from-green-500/20 hover:to-emerald-500/20 transition-all text-left"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-start space-x-3">
                  <TrendingUp className="w-5 h-5 text-green-400 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-green-200">Suggested Next</p>
                    <p className="text-white font-semibold">{suggestedNext.title}</p>
                    <p className="text-sm text-slate-400 mt-1">{suggestedNext.description}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <Clock className="w-3 h-3 text-slate-500" />
                      <span className="text-xs text-slate-500">{suggestedNext.estimatedTime} min</span>
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-green-400" />
              </div>
            </motion.button>
          )}

          {/* Learning Path Progress */}
          <div className="bg-slate-900/50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <p className="text-sm font-medium text-slate-300">Learning Path Progress</p>
              <span className="text-xs text-slate-500">
                {completedAtoms.size} completed
              </span>
            </div>
            
            <div className="space-y-2">
              {currentAtom?.nextConcepts?.slice(0, 3).map((nextId, index) => (
                <div key={nextId} className="flex items-center space-x-2">
                  <div className={`w-2 h-2 rounded-full ${
                    completedAtoms.has(nextId) ? 'bg-green-400' : 'bg-slate-600'
                  }`} />
                  <span className={`text-xs ${
                    completedAtoms.has(nextId) ? 'text-green-400' : 'text-slate-400'
                  }`}>
                    Concept {index + 1}
                  </span>
                  {completedAtoms.has(nextId) && (
                    <CheckCircle className="w-3 h-3 text-green-400" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Learning Analytics */}
      <div className="backdrop-blur-lg bg-slate-800/30 rounded-xl border border-slate-700/50 p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Your Learning Analytics</h3>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-300">Preferred Learning Style</span>
            <span className="text-sm font-medium text-blue-400 capitalize">
              {userProfile.learningStyle}
            </span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-300">Average Session Time</span>
            <span className="text-sm font-medium text-green-400">25 min</span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-300">Completion Rate</span>
            <span className="text-sm font-medium text-purple-400">87%</span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-300">Current Streak</span>
            <span className="text-sm font-medium text-yellow-400">7 days</span>
          </div>
        </div>
      </div>
    </div>
  );
};
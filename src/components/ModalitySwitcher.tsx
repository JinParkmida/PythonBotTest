import React from 'react';
import { motion } from 'framer-motion';
import { 
  Play, 
  Headphones, 
  FileText, 
  Gamepad2, 
  Workflow,
  Lightbulb
} from 'lucide-react';
import { ContentModality, UserProfile } from '../types';

interface ModalitySwitcherProps {
  currentModality: ContentModality;
  onModalityChange: (modality: ContentModality) => void;
  userProfile: UserProfile;
}

const modalityConfig = {
  video: {
    icon: Play,
    label: 'Video',
    description: 'Watch animated explanations',
    color: 'from-red-500 to-pink-500'
  },
  audio: {
    icon: Headphones,
    label: 'Audio',
    description: 'Listen to guided explanations',
    color: 'from-purple-500 to-indigo-500'
  },
  text: {
    icon: FileText,
    label: 'Text',
    description: 'Read detailed explanations',
    color: 'from-green-500 to-teal-500'
  },
  interactive: {
    icon: Gamepad2,
    label: 'Interactive',
    description: 'Hands-on coding challenges',
    color: 'from-blue-500 to-cyan-500'
  },
  diagram: {
    icon: Workflow,
    label: 'Diagram',
    description: 'Visual flow and structures',
    color: 'from-orange-500 to-yellow-500'
  }
};

export const ModalitySwitcher: React.FC<ModalitySwitcherProps> = ({
  currentModality,
  onModalityChange,
  userProfile
}) => {
  const getRecommendedModality = () => {
    switch (userProfile.learningStyle) {
      case 'visual': return 'diagram';
      case 'auditory': return 'audio';
      case 'reading': return 'text';
      case 'kinesthetic': return 'interactive';
      default: return 'interactive';
    }
  };

  const recommendedModality = getRecommendedModality();

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">Learning Modality</h3>
        <div className="flex items-center space-x-2 text-sm text-slate-300">
          <Lightbulb className="w-4 h-4 text-yellow-400" />
          <span>Recommended: {modalityConfig[recommendedModality].label}</span>
        </div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {Object.entries(modalityConfig).map(([modality, config]) => {
          const Icon = config.icon;
          const isActive = currentModality === modality;
          const isRecommended = modality === recommendedModality;
          
          return (
            <motion.button
              key={modality}
              onClick={() => onModalityChange(modality as ContentModality)}
              className={`relative p-4 rounded-xl backdrop-blur-lg border transition-all ${
                isActive
                  ? 'bg-white/10 border-white/30 shadow-lg'
                  : 'bg-slate-800/30 border-slate-700/50 hover:bg-slate-700/40'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isRecommended && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center"
                >
                  <Lightbulb className="w-3 h-3 text-white" />
                </motion.div>
              )}
              
              <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${config.color} flex items-center justify-center mb-3 mx-auto`}>
                <Icon className="w-4 h-4 text-white" />
              </div>
              
              <div className="text-center">
                <p className="font-medium text-white text-sm">{config.label}</p>
                <p className="text-xs text-slate-400 mt-1">{config.description}</p>
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};
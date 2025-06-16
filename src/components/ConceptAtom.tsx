import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { 
  Play, 
  CheckCircle, 
  Clock, 
  Tag,
  ChevronDown,
  ChevronUp,
  Lightbulb,
  Code,
  PlayCircle,
  Copy,
  Check,
  Zap,
  Heart,
  Target
} from 'lucide-react';
import { ConceptAtomType, ContentModality, UserProfile } from '../types';

interface ConceptAtomProps {
  atom: ConceptAtomType;
  modality: ContentModality;
  userProfile: UserProfile;
  isCompleted: boolean;
  onComplete: () => void;
}

export const ConceptAtom: React.FC<ConceptAtomProps> = ({
  atom,
  modality,
  userProfile,
  isCompleted,
  onComplete
}) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [currentChallenge, setCurrentChallenge] = useState(0);
  const [userCode, setUserCode] = useState('');
  const [showHint, setShowHint] = useState(false);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [currentHint, setCurrentHint] = useState(0);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'from-green-500 to-emerald-500';
      case 'intermediate': return 'from-yellow-500 to-orange-500';
      case 'advanced': return 'from-red-500 to-pink-500';
      default: return 'from-gray-500 to-slate-500';
    }
  };

  const copyToClipboard = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(code);
      setTimeout(() => setCopiedCode(null), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  const renderVideoContent = () => (
    <div className="space-y-6">
      <div className="relative aspect-video bg-gradient-to-br from-slate-900 to-purple-900 rounded-xl overflow-hidden border border-slate-700/50">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <PlayCircle className="w-16 h-16 text-blue-400 hover:text-blue-300 cursor-pointer transition-colors mx-auto mb-4" />
            <p className="text-white text-lg font-medium">Interactive Video Tutorial</p>
            <p className="text-slate-300 text-sm">Click to start learning!</p>
          </div>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-black/50 backdrop-blur rounded-lg p-3">
            <p className="text-white text-sm">{atom.content.video?.transcript}</p>
          </div>
        </div>
      </div>
      
      {atom.content.text?.sections[0]?.codeExample && (
        <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-700/50">
          <div className="p-4 border-b border-slate-700 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Code className="w-4 h-4 text-blue-400" />
              <h4 className="text-white font-medium">Live Code Example</h4>
            </div>
            <button
              onClick={() => copyToClipboard(atom.content.text!.sections[0].codeExample!)}
              className="flex items-center space-x-1 text-slate-400 hover:text-white transition-colors"
            >
              {copiedCode === atom.content.text!.sections[0].codeExample ? (
                <Check className="w-4 h-4 text-green-400" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
              <span className="text-sm">Copy</span>
            </button>
          </div>
          <SyntaxHighlighter
            language="python"
            style={oneDark}
            customStyle={{ margin: 0, borderRadius: 0 }}
          >
            {atom.content.text.sections[0].codeExample}
          </SyntaxHighlighter>
        </div>
      )}
    </div>
  );

  const renderInteractiveContent = () => {
    const challenges = atom.content.interactive?.challenges || [];
    const challenge = challenges[currentChallenge];
    
    if (!challenge) return null;

    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h4 className="text-xl font-semibold text-white flex items-center space-x-2">
            <Zap className="w-5 h-5 text-yellow-400" />
            <span>Hands-On Challenge {currentChallenge + 1} of {challenges.length}</span>
          </h4>
          <div className="flex space-x-2">
            {challenges.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  index <= currentChallenge ? 'bg-blue-400 scale-110' : 'bg-slate-600'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/20 rounded-xl p-6 border border-slate-700/50">
          <div className="flex items-start space-x-3 mb-4">
            <Target className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
            <div>
              <h5 className="text-lg font-medium text-white mb-2">Your Mission:</h5>
              <p className="text-slate-200 leading-relaxed">{challenge.question}</p>
            </div>
          </div>
          
          {challenge.type === 'code' && (
            <div className="space-y-4">
              <div className="bg-slate-900 rounded-lg overflow-hidden border border-slate-700/50">
                <div className="p-3 border-b border-slate-700 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Code className="w-4 h-4 text-green-400" />
                    <span className="text-slate-300 text-sm font-medium">Your Python Code</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => {
                        setShowHint(!showHint);
                        if (!showHint) setCurrentHint(0);
                      }}
                      className="text-yellow-400 hover:text-yellow-300 text-sm flex items-center space-x-1 transition-colors"
                    >
                      <Lightbulb className="w-4 h-4" />
                      <span>Need a hint?</span>
                    </button>
                  </div>
                </div>
                <textarea
                  value={userCode}
                  onChange={(e) => setUserCode(e.target.value)}
                  className="w-full h-32 bg-slate-900 text-slate-200 p-4 font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  placeholder="# Write your Python code here...
# Remember: every journey starts with a single line!"
                />
              </div>
              
              <AnimatePresence>
                {showHint && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-lg p-4"
                  >
                    <div className="flex items-start space-x-3">
                      <Lightbulb className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <div className="flex-1">
                        <p className="text-yellow-200 text-sm font-medium mb-2">
                          Hint {currentHint + 1} of {challenge.hints.length}:
                        </p>
                        <p className="text-yellow-100 text-sm">{challenge.hints[currentHint]}</p>
                        {challenge.hints.length > 1 && (
                          <div className="flex items-center space-x-2 mt-3">
                            <button
                              onClick={() => setCurrentHint(Math.max(0, currentHint - 1))}
                              disabled={currentHint === 0}
                              className="text-xs text-yellow-300 hover:text-yellow-200 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                              Previous
                            </button>
                            <span className="text-xs text-yellow-400">•</span>
                            <button
                              onClick={() => setCurrentHint(Math.min(challenge.hints.length - 1, currentHint + 1))}
                              disabled={currentHint === challenge.hints.length - 1}
                              className="text-xs text-yellow-300 hover:text-yellow-200 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                              Next
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
              <div className="flex items-center justify-between">
                <div className="flex space-x-3">
                  <button className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-lg transition-all shadow-lg flex items-center space-x-2">
                    <Play className="w-4 h-4" />
                    <span>Run Code</span>
                  </button>
                  <button 
                    onClick={() => copyToClipboard(challenge.solution || '')}
                    className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-300 hover:text-white rounded-lg transition-all flex items-center space-x-2"
                  >
                    {copiedCode === challenge.solution ? (
                      <Check className="w-4 h-4 text-green-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                    <span>Copy Solution</span>
                  </button>
                </div>
                
                {currentChallenge < challenges.length - 1 && (
                  <button 
                    onClick={() => {
                      setCurrentChallenge(currentChallenge + 1);
                      setUserCode('');
                      setShowHint(false);
                      setCurrentHint(0);
                    }}
                    className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-lg transition-all shadow-lg flex items-center space-x-2"
                  >
                    <span>Next Challenge</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderTextContent = () => (
    <div className="space-y-6">
      {atom.content.text?.sections.map((section, index) => (
        <motion.div 
          key={index} 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-gradient-to-br from-slate-800/30 to-purple-900/10 rounded-xl p-6 border border-slate-700/50"
        >
          <h4 className="text-xl font-semibold text-white mb-4 flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <span>{section.title}</span>
          </h4>
          <div className="prose prose-slate prose-invert max-w-none">
            <p className="text-slate-300 leading-relaxed text-lg">{section.content}</p>
          </div>
          
          {section.codeExample && (
            <div className="mt-6 bg-slate-900 rounded-lg overflow-hidden border border-slate-700/50">
              <div className="p-3 border-b border-slate-700 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Code className="w-4 h-4 text-slate-400" />
                  <span className="text-slate-300 text-sm font-medium">Example Code</span>
                </div>
                <button
                  onClick={() => copyToClipboard(section.codeExample!)}
                  className="flex items-center space-x-1 text-slate-400 hover:text-white transition-colors"
                >
                  {copiedCode === section.codeExample ? (
                    <Check className="w-4 h-4 text-green-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                  <span className="text-sm">Copy</span>
                </button>
              </div>
              <SyntaxHighlighter
                language="python"
                style={oneDark}
                customStyle={{ margin: 0, borderRadius: 0 }}
              >
                {section.codeExample}
              </SyntaxHighlighter>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );

  const renderContent = () => {
    switch (modality) {
      case 'video': return renderVideoContent();
      case 'interactive': return renderInteractiveContent();
      case 'text': return renderTextContent();
      case 'audio': return renderVideoContent(); // Simplified for demo
      case 'diagram': return renderTextContent(); // Simplified for demo
      default: return renderTextContent();
    }
  };

  return (
    <motion.div
      layout
      className="backdrop-blur-lg bg-slate-800/30 rounded-2xl border border-slate-700/50 overflow-hidden shadow-2xl"
    >
      {/* Header */}
      <div className="p-6 border-b border-slate-700/50 bg-gradient-to-r from-slate-800/50 to-purple-900/20">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-2">
              <h2 className="text-2xl font-bold text-white">{atom.title}</h2>
              {isCompleted && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="flex items-center space-x-1"
                >
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span className="text-green-400 text-sm font-medium">Completed!</span>
                </motion.div>
              )}
            </div>
            <p className="text-slate-300 text-lg leading-relaxed">{atom.description}</p>
          </div>
          
          <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${getDifficultyColor(atom.difficulty)} text-white text-sm font-medium shadow-lg`}>
            {atom.difficulty}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 text-sm text-slate-400">
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{atom.estimatedTime} min</span>
            </div>
            <div className="flex items-center space-x-1">
              <Tag className="w-4 h-4" />
              <span>{atom.category}</span>
            </div>
          </div>
          
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors bg-slate-700/50 hover:bg-slate-600/50 px-3 py-1 rounded-lg"
          >
            <span>{isExpanded ? 'Collapse' : 'Expand'}</span>
            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {atom.tags.map(tag => (
            <span
              key={tag}
              className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-md border border-slate-600/50"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-6">
              {renderContent()}
              
              {/* Completion Button */}
              {!isCompleted && (
                <div className="flex justify-center mt-8">
                  <motion.button
                    onClick={onComplete}
                    className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-xl hover:from-green-600 hover:to-emerald-600 transition-all shadow-lg flex items-center space-x-2 text-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Heart className="w-5 h-5" />
                    <span>Mark as Complete</span>
                  </motion.button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
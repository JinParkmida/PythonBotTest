import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ConceptAtomType, LearningMode } from '../types';
import { CheckCircle, Circle, Lock, Sparkles } from 'lucide-react';

interface ConceptGraphProps {
  conceptAtoms: ConceptAtomType[];
  selectedAtom: ConceptAtomType | null;
  onAtomSelect: (atom: ConceptAtomType) => void;
  completedAtoms: Set<string>;
  mode: LearningMode;
}

export const ConceptGraph: React.FC<ConceptGraphProps> = ({
  conceptAtoms,
  selectedAtom,
  onAtomSelect,
  completedAtoms,
  mode
}) => {
  const [hoveredAtom, setHoveredAtom] = useState<string | null>(null);

  // Calculate positions for atoms in a graph layout
  const atomPositions = useMemo(() => {
    const positions: Record<string, { x: number; y: number; level: number }> = {};
    const levels: Record<number, string[]> = {};
    
    // Simple level-based layout
    conceptAtoms.forEach(atom => {
      const level = atom.prerequisites.length;
      if (!levels[level]) levels[level] = [];
      levels[level].push(atom.id);
    });

    Object.entries(levels).forEach(([levelStr, atomIds]) => {
      const level = parseInt(levelStr);
      const y = 100 + level * 150;
      
      atomIds.forEach((atomId, idx) => {
        const totalInLevel = atomIds.length;
        const x = (idx + 1) * (800 / (totalInLevel + 1));
        positions[atomId] = { x, y, level };
      });
    });

    return positions;
  }, [conceptAtoms]);

  const getAtomStatus = (atom: ConceptAtomType) => {
    if (completedAtoms.has(atom.id)) return 'completed';
    
    const prerequisitesMet = atom.prerequisites.every(prereq => 
      completedAtoms.has(prereq)
    );
    
    if (!prerequisitesMet) return 'locked';
    return 'available';
  };

  const getConnectionPath = (from: ConceptAtomType, to: ConceptAtomType) => {
    const fromPos = atomPositions[from.id];
    const toPos = atomPositions[to.id];
    
    if (!fromPos || !toPos) return '';
    
    const midY = (fromPos.y + toPos.y) / 2;
    return `M ${fromPos.x} ${fromPos.y} Q ${fromPos.x} ${midY} ${toPos.x} ${toPos.y}`;
  };

  return (
    <div className="relative">
      <div className="backdrop-blur-lg bg-slate-800/30 rounded-2xl border border-slate-700/50 p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Learning Path</h2>
            <p className="text-slate-300">
              {mode === 'guided' 
                ? 'Follow the recommended path for optimal learning'
                : 'Explore concepts in any order that interests you'
              }
            </p>
          </div>
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-slate-300">Completed</span>
            </div>
            <div className="flex items-center space-x-2">
              <Circle className="w-4 h-4 text-blue-400" />
              <span className="text-slate-300">Available</span>
            </div>
            <div className="flex items-center space-x-2">
              <Lock className="w-4 h-4 text-slate-500" />
              <span className="text-slate-300">Locked</span>
            </div>
          </div>
        </div>

        {/* Graph Visualization */}
        <div className="relative overflow-hidden rounded-xl bg-slate-900/50 border border-slate-700/30" style={{ height: '600px' }}>
          <svg className="absolute inset-0 w-full h-full">
            {/* Render connections */}
            {conceptAtoms.map(atom => 
              atom.nextConcepts?.map(nextId => {
                const nextAtom = conceptAtoms.find(a => a.id === nextId);
                if (!nextAtom) return null;
                
                return (
                  <motion.path
                    key={`${atom.id}-${nextId}`}
                    d={getConnectionPath(atom, nextAtom)}
                    stroke="rgba(148, 163, 184, 0.3)"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                );
              })
            )}
            
            {/* Render atoms */}
            {conceptAtoms.map(atom => {
              const position = atomPositions[atom.id];
              if (!position) return null;
              
              const status = getAtomStatus(atom);
              const isSelected = selectedAtom?.id === atom.id;
              const isHovered = hoveredAtom === atom.id;
              
              return (
                <g key={atom.id}>
                  {/* Atom node */}
                  <motion.circle
                    cx={position.x}
                    cy={position.y}
                    r={isSelected ? 35 : isHovered ? 30 : 25}
                    className={`cursor-pointer transition-all ${
                      status === 'completed'
                        ? 'fill-green-500/80 stroke-green-400'
                        : status === 'available'
                        ? 'fill-blue-500/80 stroke-blue-400'
                        : 'fill-slate-600/80 stroke-slate-500'
                    }`}
                    strokeWidth="2"
                    onClick={() => status !== 'locked' && onAtomSelect(atom)}
                    onMouseEnter={() => setHoveredAtom(atom.id)}
                    onMouseLeave={() => setHoveredAtom(null)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  />
                  
                  {/* Status icon */}
                  <foreignObject
                    x={position.x - 8}
                    y={position.y - 8}
                    width={16}
                    height={16}
                    className="pointer-events-none"
                  >
                    {status === 'completed' ? (
                      <CheckCircle className="w-4 h-4 text-white" />
                    ) : status === 'locked' ? (
                      <Lock className="w-4 h-4 text-slate-400" />
                    ) : mode === 'guided' && selectedAtom?.nextConcepts?.includes(atom.id) ? (
                      <Sparkles className="w-4 h-4 text-yellow-400" />
                    ) : (
                      <Circle className="w-4 h-4 text-white" />
                    )}
                  </foreignObject>
                  
                  {/* Atom label */}
                  <text
                    x={position.x}
                    y={position.y + 50}
                    textAnchor="middle"
                    className="text-sm fill-slate-300 font-medium pointer-events-none"
                  >
                    {atom.title}
                  </text>
                  
                  {/* Category badge */}
                  <text
                    x={position.x}
                    y={position.y + 65}
                    textAnchor="middle"
                    className="text-xs fill-slate-500 pointer-events-none"
                  >
                    {atom.category}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>
    </div>
  );
};
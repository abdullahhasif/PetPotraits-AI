import React from 'react';
import { FrameIcon, SizeIcon, EffectIcon, BorderIcon, PlusIcon } from './icons';

interface EditingToolbarProps {
  onToolClick: (toolId: string) => void;
}

const EditingToolbar: React.FC<EditingToolbarProps> = ({ onToolClick }) => {
    const tools = [
        { id: 'Frame', name: 'Frame', icon: FrameIcon },
        { id: 'Size', name: 'Size', icon: SizeIcon },
        { id: 'Effect', name: 'Effect', icon: EffectIcon },
        { id: 'Border', name: 'Border', icon: BorderIcon },
    ];

    return (
        <div className="bg-white rounded-2xl shadow-lg p-2 flex items-center space-x-2" role="toolbar" aria-label="Image editing tools">
            <div className="flex items-center gap-2 pr-2">
                {tools.map((tool) => (
                    <button 
                        key={tool.id} 
                        onClick={() => onToolClick(tool.id)}
                        className="flex flex-col items-center justify-center text-zinc-600 hover:text-pink-600 transition-colors duration-200 w-16 h-14 rounded-lg hover:bg-zinc-100 focus:outline-none focus:bg-zinc-100 focus:ring-2 focus:ring-pink-500"
                    >
                        <tool.icon className="w-6 h-6" />
                        <span className="text-xs mt-1 font-semibold">{tool.name}</span>
                    </button>
                ))}
            </div>
            
            <div className="w-px h-10 bg-zinc-200" aria-hidden="true"></div>

            <button 
              onClick={() => onToolClick('Add')}
              className="w-12 h-12 flex-shrink-0 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center hover:bg-pink-200 transition-colors duration-200 ml-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
              aria-label="Use a different photo"
            >
                <PlusIcon className="w-6 h-6" />
            </button>
        </div>
    );
};

export default EditingToolbar;
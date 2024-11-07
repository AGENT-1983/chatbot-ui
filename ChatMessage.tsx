import React from 'react';
import { User } from 'lucide-react';

interface ChatMessageProps {
  content: string;
  isBot: boolean;
  timestamp: string;
}

export function ChatMessage({ content, isBot, timestamp }: ChatMessageProps) {
  return (
    <div className={`flex ${isBot ? 'justify-start' : 'justify-end'} mb-4`}>
      {isBot && (
        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
          <User className="w-5 h-5 text-blue-600" />
        </div>
      )}
      <div
        className={`max-w-[70%] rounded-2xl px-4 py-2 ${
          isBot
            ? 'bg-white text-gray-800'
            : 'bg-blue-600 text-white ml-2'
        } shadow-sm`}
      >
        <p className="text-sm">{content}</p>
        <span className="text-xs opacity-70 mt-1 block">{timestamp}</span>
      </div>
    </div>
  );
}
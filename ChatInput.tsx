import React, { useState } from 'react';
import { Send, Paperclip, MoreVertical } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

export function ChatInput({ onSendMessage }: ChatInputProps) {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 bg-white p-3 border-t">
      <button
        type="button"
        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
        aria-label="Add attachment"
      >
        <Paperclip className="w-5 h-5 text-gray-600" />
      </button>
      
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
        className="flex-1 rounded-full px-4 py-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-shadow"
      />
      
      <button
        type="button"
        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
        aria-label="More options"
      >
        <MoreVertical className="w-5 h-5 text-gray-600" />
      </button>
      
      <button
        type="submit"
        disabled={!message.trim()}
        className="p-2 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Send message"
      >
        <Send className="w-5 h-5 text-white" />
      </button>
    </form>
  );
}
import React from 'react';
import { Phone, Video, User } from 'lucide-react';

export function ChatHeader() {
  return (
    <div className="flex items-center justify-between p-4 bg-white border-b">
      <div className="flex items-center gap-3">
        <div className="relative">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
            <User className="w-6 h-6 text-blue-600" />
          </div>
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
        </div>
        <div>
          <h1 className="font-semibold text-gray-800">AI Assistant</h1>
          <p className="text-sm text-green-500">Online</p>
        </div>
      </div>
      
      <div className="flex gap-2">
        <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
          <Phone className="w-5 h-5 text-gray-600" />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
          <Video className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </div>
  );
}
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { ChatMessage } from '../types';
import { askAITutor } from '../services/geminiService';

export const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 'init', text: "Hi! I'm your AI Literacy Tutor. Have questions about the content?", sender: 'ai', timestamp: Date.now() }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    const responseText = await askAITutor(userMsg.text);

    const aiMsg: ChatMessage = {
      id: (Date.now() + 1).toString(),
      text: responseText,
      sender: 'ai',
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, aiMsg]);
    setIsTyping(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-violet-600 hover:bg-violet-700 text-white rounded-full p-4 shadow-xl transition-all hover:scale-105 flex items-center gap-2 border border-violet-500 shadow-violet-900/20"
        >
          <Bot className="w-6 h-6" />
          <span className="font-medium pr-2">Ask AI Tutor</span>
        </button>
      )}

      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl w-80 sm:w-96 flex flex-col border border-zinc-200 overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300" style={{ height: '500px' }}>
          {/* Header */}
          <div className="bg-violet-600 p-4 flex items-center justify-between text-white">
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5" />
              <span className="font-bold">AI Tutor</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-violet-700 p-1 rounded transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-zinc-50">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-2xl p-3 text-sm ${
                  msg.sender === 'user'
                    ? 'bg-violet-600 text-white rounded-br-none'
                    : 'bg-white border border-zinc-200 text-zinc-700 rounded-bl-none shadow-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
               <div className="flex justify-start">
                  <div className="bg-white border border-zinc-200 p-3 rounded-2xl rounded-bl-none shadow-sm">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce delay-75"></div>
                      <div className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce delay-150"></div>
                    </div>
                  </div>
               </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="p-3 border-t bg-white flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask about AI..."
              className="flex-1 border border-zinc-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
            <button type="submit" disabled={isTyping} className="bg-violet-600 text-white p-2 rounded-lg hover:bg-violet-700 disabled:opacity-50">
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0A0F0C] text-[#E5E7EB] relative overflow-hidden">
      {/* Animated background with subtle green grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#1F7A4D_1px,transparent_1px)] [background-size:24px_24px]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="py-6 flex items-center justify-between z-10">
          <h1 className="text-2xl font-bold text-[#1F7A4D]">
            ✨ Todo App
          </h1>
          <div className="flex items-center gap-3">
            <Link href="/signin">
              <Button variant="ghost" size="md">
                Sign In
              </Button>
            </Link>
            <Link href="/signup">
              <Button variant="secondary" size="md">
                Sign Up
              </Button>
            </Link>
          </div>
        </header>

        {/* Hero section */}
        <div className="py-20 md:py-32 text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block">Focus Better.</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#1F7A4D] to-[#1B5E20]">
              Get Things Done.
            </span>
          </h2>

          <p className="text-lg md:text-xl text-[#D1D5DB] mb-10 max-w-2xl mx-auto leading-relaxed">
            A calm and powerful todo app designed for deep focus.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link href="/signup">
              <Button variant="secondary" size="lg">
                Start Using Todo App
              </Button>
            </Link>
            <Link href="/signin">
              <Button variant="ghost" size="lg">
                Sign In →
              </Button>
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="bg-transparent border border-[#1F7A4D] rounded-xl p-6 hover:border-[#1B5E20] transition-all duration-300 hover:shadow-[0_0_15px_rgba(31,122,77,0.3)]">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#1F7A4D]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Smart Task Management</h3>
            <p className="text-[#D1D5DB]">
              Intelligent organization and categorization of your tasks for maximum efficiency.
            </p>
          </div>

          <div className="bg-transparent border border-[#1F7A4D] rounded-xl p-6 hover:border-[#1B5E20] transition-all duration-300 hover:shadow-[0_0_15px_rgba(31,122,77,0.3)]">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#1F7A4D]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5 10.5 20.25H21l-6.75-6.75H3.75ZM18 12.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Priority and Focus Mode</h3>
            <p className="text-[#D1D5DB]">
              Focus on what matters most with our distraction-free priority mode.
            </p>
          </div>

          <div className="bg-transparent border border-[#1F7A4D] rounded-xl p-6 hover:border-[#1B5E20] transition-all duration-300 hover:shadow-[0_0_15px_rgba(31,122,77,0.3)]">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#1F7A4D]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.759 14.741 5.1 12.094l-.641.64a7.46 7.46 0 0 1-.878 1.152 7.46 7.46 0 0 0-.878 1.153l-.64.64L2.25 12" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Minimal Distraction Interface</h3>
            <p className="text-[#D1D5DB]">
              Clean, focused interface that keeps you in the zone for deep work.
            </p>
          </div>

          <div className="bg-transparent border border-[#1F7A4D] rounded-xl p-6 hover:border-[#1B5E20] transition-all duration-300 hover:shadow-[0_0_15px_rgba(31,122,77,0.3)]">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#1F7A4D]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Fast and Lightweight</h3>
            <p className="text-[#D1D5DB]">
              Optimized for speed and performance, with no unnecessary bloat.
            </p>
          </div>
        </div>

        {/* Interface Preview */}
        <div className="py-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Task Management Interface</h2>
          
          <div className="bg-[#0E1110] border border-[#1F7A4D] rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">Today's Tasks</h3>
              <button className="text-[#1F7A4D] hover:text-[#1B5E20]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center p-3 border-b border-[#1F7A4D]/30">
                <input 
                  type="checkbox" 
                  className="w-5 h-5 text-[#1F7A4D] border-[#1F7A4D] rounded bg-transparent focus:ring-[#1F7A4D] mr-3" 
                />
                <span className="flex-1">Complete project proposal</span>
                <span className="text-sm text-[#1F7A4D]">High</span>
              </div>
              
              <div className="flex items-center p-3 border-b border-[#1F7A4D]/30">
                <input 
                  type="checkbox" 
                  className="w-5 h-5 text-[#1F7A4D] border-[#1F7A4D] rounded bg-transparent focus:ring-[#1F7A4D] mr-3" 
                />
                <span className="flex-1">Schedule team meeting</span>
                <span className="text-sm text-[#1F7A4D]">Medium</span>
              </div>
              
              <div className="flex items-center p-3 border-b border-[#1F7A4D]/30">
                <input 
                  type="checkbox" 
                  defaultChecked
                  readOnly
                  className="w-5 h-5 text-[#1F7A4D] border-[#1F7A4D] rounded bg-transparent focus:ring-[#1F7A4D] mr-3" 
                />
                <span className="flex-1 line-through text-[#1F7A4D]/60">Review quarterly reports</span>
                <span className="text-sm text-[#1F7A4D]">Low</span>
              </div>
              
              <div className="flex items-center p-3">
                <input 
                  type="checkbox" 
                  className="w-5 h-5 text-[#1F7A4D] border-[#1F7A4D] rounded bg-transparent focus:ring-[#1F7A4D] mr-3" 
                />
                <span className="flex-1">Prepare presentation slides</span>
                <span className="text-sm text-[#1F7A4D]">High</span>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="py-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full border-2 border-[#1F7A4D] flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-[#1F7A4D]">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Add your tasks</h3>
              <p className="text-[#D1D5DB]">Quickly create tasks with titles, due dates, and priorities</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full border-2 border-[#1F7A4D] flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-[#1F7A4D]">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Organize and prioritize</h3>
              <p className="text-[#D1D5DB]">Sort and categorize tasks to focus on what matters most</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full border-2 border-[#1F7A4D] flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-[#1F7A4D]">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Stay productive every day</h3>
              <p className="text-[#D1D5DB]">Track progress and maintain consistent productivity habits</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 border-t border-[#1F7A4D]">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Build Your Daily Focus Habit</h2>
            <Link href="/signup">
              <Button variant="secondary" size="lg" className="text-xl px-10 py-5">
                Start Using Todo App
              </Button>
            </Link>
          </div>
        </div>

        {/* Footer */}
        <footer className="py-8 text-center text-sm text-[#D1D5DB] border-t border-[#1F7A4D]">
          <div className="mb-4">
            <h3 className="text-xl font-bold text-[#1F7A4D] mb-2">✨ Todo App</h3>
          </div>
          <p>&copy; 2026 Todo App. Designed for focus and productivity.</p>
        </footer>
      </div>
    </div>
  );
}
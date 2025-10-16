import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Send } from 'lucide-react';
import { SparkleIcon } from '../SparkleIcon';
import { Button } from '../ui/button';

const QUERIES = [
  'Summarize this page',
  'Show where this article mentions El Niño.',
  'Find related articles',
  'Highlight the most important phrases',
];

const TYPING_SPEED = 30; // Even faster typing speed in ms

export function LiveDemo() {
  const [currentQueryIndex, setCurrentQueryIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentQuery = QUERIES[currentQueryIndex];
    
    if (isTyping && typedText.length < currentQuery.length) {
      // Typing phase - add one character
      const timeout = setTimeout(() => {
        setTypedText(currentQuery.slice(0, typedText.length + 1));
      }, TYPING_SPEED);
      return () => clearTimeout(timeout);
    } else if (isTyping && typedText.length === currentQuery.length) {
      // Finished typing, pause briefly then start deleting
      const timeout = setTimeout(() => {
        setIsTyping(false);
      }, 600); // Short pause at the end
      return () => clearTimeout(timeout);
    } else if (!isTyping && typedText.length > 0) {
      // Deleting phase - remove one character (backspace effect)
      const timeout = setTimeout(() => {
        setTypedText(typedText.slice(0, -1));
      }, TYPING_SPEED);
      return () => clearTimeout(timeout);
    } else if (!isTyping && typedText.length === 0) {
      // Finished deleting, move to next query
      const timeout = setTimeout(() => {
        setCurrentQueryIndex((prev) => (prev + 1) % QUERIES.length);
        setIsTyping(true);
      }, 300); // Brief pause before starting next query
      return () => clearTimeout(timeout);
    }
  }, [typedText, currentQueryIndex, isTyping]);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-slate-700 via-slate-800 to-slate-700 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Demo Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-6">
            <h3 className="text-2xl text-white">Ask me anything</h3>
          </div>

          {/* Composer Card */}
          <div className="bg-white rounded-3xl shadow-2xl shadow-blue-900/30 p-6 transition-shadow duration-300">
            {/* Input Area */}
            <div className="relative">
              <div className="relative flex items-center gap-3 p-4 rounded-2xl border-2 border-slate-200 bg-slate-50 transition-all duration-300">
                <div className="flex-1 relative flex items-center min-h-[28px]">
                  <span className="text-slate-800 text-lg whitespace-pre">
                    {typedText}
                  </span>
                  {/* Blinking cursor inline */}
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="inline-block w-0.5 h-5 bg-blue-500 ml-0.5"
                  />
                </div>
                
                {/* Send Button */}
                <button
                  className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center transition-all duration-200 pointer-events-none"
                  aria-label="Send message"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Typing Indicator */}
            <div className="flex items-center gap-2 mt-4 px-4">
              <div className="flex gap-1.5">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-slate-400"
                    animate={{
                      opacity: [0.3, 1, 0.3],
                      y: [0, -3, 0],
                    }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </div>

              {/* Sparkles */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 0.8, 0.4],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <SparkleIcon className="w-4 h-4 text-blue-400" />
              </motion.div>
            </div>
          </div>

          {/* Watch Demo Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center mt-8"
          >
            <Button
              onClick={() => {
                const demosSection = document.getElementById('demos');
                demosSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Watch Demo
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Reduced motion variant - hidden by default, shown when prefers-reduced-motion */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .animate-pulse,
          [style*="animation"],
          [style*="transition"] {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}

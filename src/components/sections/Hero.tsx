import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { SparkleIcon } from '../SparkleIcon';
import { Play } from 'lucide-react';
import { BubbleAnimation } from '../BubbleAnimation';

export function Hero() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Animated background sparkles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-primary/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.3, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <SparkleIcon className="w-6 h-6" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 tracking-tight leading-tight">
              The In-Article AI Copilot
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
              Noah AI adds an in-article assistant that highlights key lines, answers questions, and summarizes on demand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base">
                Get Early Access
              </Button>
              <Button size="lg" variant="outline" className="text-base">
                <Play className="w-4 h-4 mr-2" />
                Watch demo
              </Button>
            </div>
          </motion.div>

          {/* Right: Bubble Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[500px] lg:h-[600px]"
          >
            <BubbleAnimation />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

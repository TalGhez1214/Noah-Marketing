import { ReactNode } from 'react';
import { SparkleIcon } from './SparkleIcon';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="group relative p-6 rounded-xl border border-border bg-white hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-200/50">
      {/* Subtle glow effect on hover */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 text-primary">
            {icon}
          </div>
          <SparkleIcon className="w-4 h-4 text-primary/50 group-hover:text-primary transition-colors" />
        </div>
        <h3 className="mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

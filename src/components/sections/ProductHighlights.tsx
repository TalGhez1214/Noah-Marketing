import { motion } from 'motion/react';
import { MessageSquare, Highlighter, FileText, Search } from 'lucide-react';
import { FeatureCard } from '../FeatureCard';

export function ProductHighlights() {
  const features = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'In-article Chat',
      description: 'Ask questions and get answers grounded in the current article.',
    },
    {
      icon: <Highlighter className="w-6 h-6" />,
      title: 'Smart Highlights',
      description: 'Temporary, sentence-level marks that helps navigate in the content',
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Contextual Summary',
      description: 'Clean modal with the current article image and a \'Read full article\' CTA.',
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: 'Article Finder',
      description: 'Related articles with inline summary and key quote.',
    },
  ];

  return (
    <section id="product" className="py-20 md:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 tracking-tight">
            Powerful features that drive engagement
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Give your readers the tools they need to understand, explore, and engage with your content—all without leaving the page.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

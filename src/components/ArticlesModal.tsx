import { Dialog, DialogContent } from './ui/dialog';
import { ScrollArea } from './ui/scroll-area';
import { Button } from './ui/button';
import { X, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Article {
  title: string;
  author: string;
  image: string;
  summary: string;
  quote: string;
}

interface ArticlesModalProps {
  open: boolean;
  onClose: () => void;
}

export function ArticlesModal({ open, onClose }: ArticlesModalProps) {
  const articles: Article[] = [
    {
      title: 'The Future of AI in Content Creation',
      author: 'Sarah Chen',
      image: 'https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYwMzM2NTc2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      summary: 'Exploring how artificial intelligence is transforming the content creation landscape and what it means for creators.',
      quote: 'AI tools are not replacing creators; they\'re empowering them to do more.',
    },
    {
      title: 'Building Better Reading Experiences',
      author: 'Michael Rodriguez',
      image: 'https://images.unsplash.com/photo-1738073954103-1e0417112fd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcnRpY2xlJTIwcmVhZGVyfGVufDF8fHx8MTc2MDM2NDUxNHww&ixlib=rb-4.1.0&q=80&w=1080',
      summary: 'Design principles and technologies that enhance how readers engage with digital content.',
      quote: 'The best interfaces disappear, leaving only the content and the reader\'s curiosity.',
    },
    {
      title: 'Engagement Metrics That Matter',
      author: 'Emma Thompson',
      image: 'https://images.unsplash.com/photo-1758598305216-b8cf416cb5b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc2MDI3MTM4NHww&ixlib=rb-4.1.0&q=80&w=1080',
      summary: 'Moving beyond pageviews to understand what truly indicates reader satisfaction and value.',
      quote: 'Time on page isn\'t enough—we need to measure comprehension and satisfaction.',
    },
  ];

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl p-0 max-h-[80vh]">
        <div className="sticky top-0 z-10 flex items-center justify-between p-6 border-b border-border bg-background">
          <div>
            <h2 className="text-2xl">Related Articles</h2>
            <p className="text-sm text-muted-foreground mt-1">Based on your current reading</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-accent transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <ScrollArea className="h-full">
          <div className="p-6 space-y-6">
            {articles.map((article, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 cursor-pointer"
              >
                <div className="flex gap-6">
                  {/* Article Image */}
                  <div className="w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden">
                    <ImageWithFallback
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Article Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="mb-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      By {article.author}
                    </p>
                    <p className="text-sm text-foreground/80 mb-3 line-clamp-2">
                      {article.summary}
                    </p>
                    <div className="p-3 rounded-lg bg-accent/10 border-l-2 border-accent">
                      <p className="text-sm italic text-foreground/70">
                        "{article.quote}"
                      </p>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex items-center">
                    <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        <div className="sticky bottom-0 p-4 border-t border-border bg-background/95 backdrop-blur">
          <p className="text-xs text-center text-muted-foreground">
            Powered by <span className="text-primary">Noah AI</span>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}

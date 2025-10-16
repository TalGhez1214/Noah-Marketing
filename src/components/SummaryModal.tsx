import { Dialog, DialogContent } from './ui/dialog';
import { Button } from './ui/button';
import { X, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface SummaryModalProps {
  open: boolean;
  onClose: () => void;
  articleTitle?: string;
  articleImage?: string;
  summary?: string;
}

export function SummaryModal({
  open,
  onClose,
  articleTitle = 'Understanding Modern AI Systems',
  articleImage = 'https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYwMzM2NTc2fDA&ixlib=rb-4.1.0&q=80&w=1080',
  summary = 'This article explores the fundamental concepts behind modern AI systems, including neural networks, machine learning, and natural language processing. Key findings include the importance of training data quality, the role of transformer architectures, and emerging trends in AI safety and ethics.',
}: SummaryModalProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl p-0">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 backdrop-blur hover:bg-background transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative">
          {/* Article Image */}
          <div className="aspect-[21/9] w-full overflow-hidden rounded-t-lg">
            <ImageWithFallback
              src={articleImage}
              alt={articleTitle}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          {/* Content */}
          <div className="p-8">
            <h2 className="mb-6">Summary</h2>
            <p className="text-foreground/90 leading-relaxed mb-8">{summary}</p>

            <div className="flex items-center justify-between pt-6 border-t border-border">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>Powered by</span>
                <span className="text-primary">Noah AI</span>
              </div>
              <Button variant="outline" size="sm">
                Read full article
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

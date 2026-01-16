import { ArrowRight, ChevronRight } from 'lucide-react';

interface CardProps {
  image: string;
  category: string;
  title: string;
  description?: string;
  hasExpand?: boolean;
  className?: string;
}

export function Card({ image, category, title, description, hasExpand, className = '' }: CardProps) {
  return (
    <div className={`group cursor-pointer relative overflow-hidden h-[400px] ${className}`}>
      {/* Background Image */}
      <img 
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-between p-6 md:p-8">
        {/* Category Label */}
        <div>
          <span className="text-white/90 uppercase tracking-wider text-xs">
            {category}
          </span>
        </div>

        {/* Title and Description */}
        <div className="space-y-4">
          <h3 className="text-white text-xl md:text-2xl leading-tight">
            {title}
          </h3>
          
          {description && (
            <p className="text-white/80 text-sm leading-relaxed">
              {description}
            </p>
          )}

          {hasExpand && (
            <button className="flex items-center gap-2 text-white hover:text-[#A020F0] transition-colors">
              <span>Expand</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Hover Border Effect */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#A020F0] transition-colors pointer-events-none" />
    </div>
  );
}
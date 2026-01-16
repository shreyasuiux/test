import { Card } from './Card';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Article {
  id: number;
  image: string;
  category: string;
  title: string;
  description?: string;
  hasExpand?: boolean;
}

interface ArticleGridProps {
  articles: Article[];
}

export function ArticleGrid({ articles }: ArticleGridProps) {
  return (
    <section className="bg-black py-24">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        {/* Grid - 4 columns, 2 rows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((article) => (
            <Card
              key={article.id}
              image={article.image}
              category={article.category}
              title={article.title}
              description={article.description}
              hasExpand={article.hasExpand}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
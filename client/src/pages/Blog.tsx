import { useBlogPosts } from "@/hooks/use-content";
import { Section } from "@/components/Section";
import { Link } from "wouter";
import { ArrowRight, Loader2 } from "lucide-react";
import { format } from "date-fns";

export default function Blog() {
  const { data: posts, isLoading, error } = useBlogPosts();

  return (
    <div className="min-h-screen bg-background">
      <section className="bg-muted py-20 relative overflow-hidden">
        <div className="absolute inset-0 tech-grid-bg opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-5xl font-bold text-white mb-6">Our Blog</h1>
          <p className="text-xl text-gray-400 max-w-3xl">
            Latest news, technical articles, and updates from the world of industrial procurement and technology.
          </p>
        </div>
      </section>

      <Section>
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-8 h-8 text-primary animate-spin" />
          </div>
        ) : error ? (
          <div className="text-center py-20 text-red-400">
            Failed to load articles. Please try again later.
          </div>
        ) : posts?.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            No articles published yet. Check back soon.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts?.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <div className="group bg-muted/40 border border-white/5 overflow-hidden hover:border-primary/50 transition-all cursor-pointer h-full flex flex-col">
                  {/* Image Placeholder - In real app use post.coverImage */}
                  <div className="aspect-video bg-gray-800 relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-30 transition-opacity z-10" />
                    {/* Placeholder for blog image */}
                    <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-gray-700">
                       <span className="text-4xl font-bold opacity-20">IMAGE</span>
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center justify-between text-xs text-primary mb-3">
                      <span className="font-bold tracking-wider uppercase">Article</span>
                      {post.publishedAt && (
                        <span>{format(new Date(post.publishedAt), 'MMM d, yyyy')}</span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm mb-6 line-clamp-3 flex-grow">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center text-sm font-bold text-white group-hover:text-primary transition-colors mt-auto">
                      Read Article <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </Section>
    </div>
  );
}

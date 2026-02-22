import { useBlogPost } from "@/hooks/use-content";
import { useRoute, Link } from "wouter";
import { Section } from "@/components/Section";
import { Loader2, ArrowLeft, Calendar, Share2 } from "lucide-react";
import { format } from "date-fns";

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const slug = params?.slug || "";
  const { data: post, isLoading, error } = useBlogPost(slug);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="w-8 h-8 text-primary animate-spin" />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background text-center p-4">
        <h1 className="text-3xl font-bold text-white mb-4">Article Not Found</h1>
        <p className="text-gray-400 mb-8">The article you are looking for does not exist or has been removed.</p>
        <Link href="/blog" className="text-primary hover:underline">Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <article>
        {/* Header */}
        <div className="bg-muted py-24 relative overflow-hidden">
           <div className="absolute inset-0 tech-grid-bg opacity-30" />
           <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
             <Link href="/blog" className="inline-flex items-center text-gray-400 hover:text-primary mb-8 transition-colors">
               <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
             </Link>
             
             <div className="flex items-center space-x-4 mb-6">
                <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-bold uppercase rounded-full border border-primary/20">
                  Industrial
                </span>
                {post.publishedAt && (
                  <span className="flex items-center text-gray-400 text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    {format(new Date(post.publishedAt), 'MMMM d, yyyy')}
                  </span>
                )}
             </div>
             
             <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
               {post.title}
             </h1>
           </div>
        </div>

        {/* Content */}
        <Section className="py-12 md:py-20">
           <div className="max-w-3xl mx-auto">
             <div className="prose prose-invert prose-lg max-w-none prose-headings:font-sans prose-a:text-primary hover:prose-a:text-primary/80">
               {/* This would render HTML content in a real app */}
               <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>') }} />
             </div>
             
             <div className="mt-16 pt-8 border-t border-white/10 flex justify-between items-center">
               <div className="text-gray-400 italic">
                 Written by Promec Industrial Editorial Team
               </div>
               <button className="flex items-center text-primary hover:text-white transition-colors">
                 <Share2 className="w-4 h-4 mr-2" /> Share Article
               </button>
             </div>
           </div>
        </Section>
      </article>
    </div>
  );
}

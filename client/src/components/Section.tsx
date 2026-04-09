import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  gridBg?: boolean;
}

export function Section({ children, className, id, gridBg }: SectionProps) {
  return (
    <section 
      id={id} 
      className={cn(
        "py-20 md:py-32 relative overflow-hidden", 
        gridBg && "tech-grid-bg",
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </div>
      
      {/* Decorative side elements */}
      <div className="absolute top-1/2 left-0 w-1 h-32 bg-gradient-to-b from-transparent via-primary/20 to-transparent -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-1 h-32 bg-gradient-to-b from-transparent via-primary/20 to-transparent -translate-y-1/2" />
    </section>
  );
}

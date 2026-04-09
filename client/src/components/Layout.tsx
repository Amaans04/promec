import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import { Button } from "@/components/ui/button";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const { t, toggleLanguage, language } = useLanguage();

  const navLinks = [
    { href: "/", label: "nav.home" },
    { href: "/products", label: "Products" },
    { href: "/industries", label: "nav.industries" },
    { href: "/procurement", label: "nav.procurement" },
    { href: "/why-choose-us", label: "Why Choose Us" },
    { href: "/about", label: "nav.about" },
    { href: "/blog", label: "nav.blog" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-transparent backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <img 
              src="/big_logo.png" 
              alt="Promec Industrial Logo" 
              className="h-[195px] w-auto object-contain group-hover:opacity-80 transition-opacity"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={`text-sm font-medium transition-colors hover:text-primary ${location === link.href ? 'text-primary' : 'text-gray-300'}`}>
                {t(link.label)}
              </Link>
            ))}
            
            <button 
              onClick={toggleLanguage}
              className="p-2 rounded-full hover:bg-white/5 transition-colors text-gray-400 hover:text-white flex items-center space-x-2"
            >
              <Globe className="w-4 h-4" />
              <span className="text-xs font-bold">{language === 'en' ? 'AR' : 'EN'}</span>
            </button>

            <Link href="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-background font-bold px-6">
                {t("nav.contact")}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
             <button onClick={toggleLanguage} className="text-white/70">
                <span className="text-xs font-bold">{language === 'en' ? 'AR' : 'EN'}</span>
             </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-white/10"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
                  <div className={`block px-3 py-4 text-base font-medium border-l-2 ${location === link.href ? 'border-primary text-white bg-white/5' : 'border-transparent text-gray-400 hover:text-white hover:bg-white/5'}`}>
                    {t(link.label)}
                  </div>
                </Link>
              ))}
              <div className="pt-4">
                 <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-primary text-background font-bold">
                    {t("nav.contact")}
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-background border-t border-white/10 pt-16 pb-8 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <img 
              src="/big_logo.png" 
              alt="Promec Industrial Logo" 
              className="h-20 w-auto object-contain mb-4"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Leading the evolution of industrial procurement in Qatar. We bridge the gap between global manufacturers and local industry needs.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/products" className="hover:text-primary transition-colors">Products</Link></li>
              <li><Link href="/industries" className="hover:text-primary transition-colors">Industries</Link></li>
              <li><Link href="/procurement" className="hover:text-primary transition-colors">Procurement</Link></li>
              <li><Link href="/why-choose-us" className="hover:text-primary transition-colors">Why Choose Us</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>West Bay, Doha, Qatar</li>
              <li>PO Box 12345</li>
              <li>+974 4400 0000</li>
              <li>info@promec.qa</li>
            </ul>
          </div>
          
          <div>
             <h4 className="text-white font-bold mb-6">Legal</h4>
             <ul className="space-y-3 text-sm text-gray-400">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>ISO Compliance</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Promec Industrial. {t("footer.rights")}.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
             {/* Social placeholders */}
             <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-background transition-colors cursor-pointer">
               <span className="font-bold text-xs">LN</span>
             </div>
             <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-background transition-colors cursor-pointer">
               <span className="font-bold text-xs">IG</span>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location]);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-body selection:bg-primary selection:text-background">
      <Navbar />
      <main className="flex-grow pt-24">
        {children}
      </main>
      <Footer />
    </div>
  );
}

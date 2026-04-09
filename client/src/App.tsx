import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/components/LanguageContext";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Industries from "@/pages/Industries";
import Procurement from "@/pages/Procurement";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import Contact from "@/pages/Contact";
import WhyChooseUs from "@/pages/WhyChooseUs";
import Products from "@/pages/Products";
import { lazy, Suspense } from "react";
import { Loader2 } from "lucide-react";

const ProductsMro = lazy(() => import("@/pages/ProductsMro"));
const ProductMroDetail = lazy(() => import("@/pages/ProductMroDetail"));
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/why-choose-us" component={WhyChooseUs} />
        <Route path="/products" component={Products} />
        <Route path="/products/mro" component={() => (
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-background"><Loader2 className="w-8 h-8 text-primary animate-spin" /></div>}>
            <ProductsMro />
          </Suspense>
        )} />
        <Route path="/products/mro/:slug" component={() => (
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-background"><Loader2 className="w-8 h-8 text-primary animate-spin" /></div>}>
            <ProductMroDetail />
          </Suspense>
        )} />
        <Route path="/industries" component={Industries} />
        <Route path="/procurement" component={Procurement} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog/:slug" component={BlogPost} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;

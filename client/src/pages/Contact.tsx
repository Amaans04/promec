import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertInquirySchema, type InsertInquiry } from "@shared/schema";
import { useCreateInquiry } from "@/hooks/use-content";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Mail, MapPin, Phone, Loader2 } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const createInquiry = useCreateInquiry();

  const form = useForm<InsertInquiry>({
    resolver: zodResolver(insertInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const onSubmit = (data: InsertInquiry) => {
    createInquiry.mutate(data, {
      onSuccess: () => {
        toast({
          title: "Inquiry Sent",
          description: "We have received your message and will contact you shortly.",
        });
        form.reset();
      },
      onError: (error) => {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        });
      },
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="bg-muted py-20 relative overflow-hidden">
        <div className="absolute inset-0 tech-grid-bg opacity-30" />
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&q=80)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">{t("contact.form.title")}</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to streamline your procurement? Our team of engineers and sourcing specialists is here to assist.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-8">Get in Touch</h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center text-primary flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">Office Location</h3>
                  <p className="text-gray-400">
                    Promec Industrial Tower<br />
                    West Bay, Doha, Qatar
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center text-primary flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">Phone</h3>
                  <p className="text-gray-400">
                    +974 4400 0000 (Main)<br />
                    +974 5500 0000 (Sales)
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center text-primary flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">Email</h3>
                  <p className="text-gray-400">
                    info@promec.qa<br />
                    sales@promec.qa
                  </p>
                </div>
              </div>
            </div>

            {/* Mock Map Placeholder */}
            <div className="mt-12 aspect-video bg-muted border border-white/5 rounded-lg overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                <span className="text-gray-500 font-sans tracking-widest">MAP PLACEHOLDER (DOHA)</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-muted/30 border border-white/5 p-8 rounded-lg">
             <h2 className="text-2xl font-bold text-white mb-6">Send an Enquiry</h2>
             <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" className="bg-background border-white/10 text-white placeholder:text-gray-600 focus:border-primary" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Business Email</FormLabel>
                      <FormControl>
                        <Input placeholder="john@company.com" className="bg-background border-white/10 text-white placeholder:text-gray-600 focus:border-primary" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Company Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Tech Industries LLC" className="bg-background border-white/10 text-white placeholder:text-gray-600 focus:border-primary" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Your Requirements</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about the parts or equipment you need..." 
                          className="bg-background border-white/10 text-white placeholder:text-gray-600 focus:border-primary min-h-[150px]" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  disabled={createInquiry.isPending}
                  className="w-full bg-primary hover:bg-primary/90 text-background font-bold h-12"
                >
                  {createInquiry.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
                    </>
                  ) : (
                    "Submit Inquiry"
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </Section>
    </div>
  );
}

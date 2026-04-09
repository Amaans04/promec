import { z } from "zod";

// Inquiry schema
export const insertInquirySchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(1, "Company name is required"),
  message: z.string().min(1, "Message is required"),
});

export type InsertInquiry = z.infer<typeof insertInquirySchema>;

// Blog post types (for client-side use)
export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  publishedAt: Date | string;
  isFeatured: boolean;
}

export type InsertBlogPost = Omit<BlogPost, "id" | "publishedAt">;

// Inquiry type
export interface Inquiry {
  id: number;
  name: string;
  email: string;
  company: string;
  message: string;
  createdAt: Date | string;
}

// Product types
export interface ProductCategory {
  id: number;
  name: string;
  description: string | null;
}

export interface Product {
  id: number;
  name: string;
  categoryId: number;
  description: string;
  specifications: string[] | null;
  image: string | null;
}

export type InsertProduct = Omit<Product, "id">;
export type InsertCategory = Omit<ProductCategory, "id">;


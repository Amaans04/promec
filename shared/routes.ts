import { z } from "zod";
import { insertInquirySchema, type InsertInquiry, type BlogPost, type Product, type ProductCategory, type Inquiry } from "./schema";

export const errorSchemas = {
  validation: z.object({
    message: z.string(),
    field: z.string().optional(),
  }),
  notFound: z.object({
    message: z.string(),
  }),
  internal: z.object({
    message: z.string(),
  }),
};

export const api = {
  blog: {
    list: {
      method: "GET" as const,
      path: "/api/blog",
      responses: {
        200: z.array(z.custom<BlogPost>()),
      },
    },
    get: {
      method: "GET" as const,
      path: "/api/blog/:slug",
      responses: {
        200: z.custom<BlogPost>(),
        404: errorSchemas.notFound,
      },
    },
  },
  products: {
    list: {
      method: "GET" as const,
      path: "/api/products",
      responses: {
        200: z.array(z.custom<Product>()),
      },
    },
    categories: {
      method: "GET" as const,
      path: "/api/categories",
      responses: {
        200: z.array(z.custom<ProductCategory>()),
      },
    },
  },
  inquiries: {
    create: {
      method: "POST" as const,
      path: "/api/inquiries",
      input: insertInquirySchema,
      responses: {
        201: z.custom<Inquiry>(),
        400: errorSchemas.validation,
      },
    },
  },
};

export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}

